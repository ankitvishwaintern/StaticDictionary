import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces/user.interface";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { FirebaseConfig } from "../shared/models/firebase-config.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> =
    this.isLoggedInSubject.asObservable();
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> =
    this.currentUserSubject.asObservable();
  private authTokenKey = "authToken";

  firebaseConfig: FirebaseConfig | undefined;
  private app: any;
  private auth: any;

  constructor(private http: HttpClient, private router: Router) {
    // Clear any existing auth token initially
    localStorage.removeItem(this.authTokenKey);

    // Initialize Firebase
    this.initializeFirebase()
      .then(() => {
        // Force signOut initially to clear any lingering auth state
        signOut(this.auth).then(() => {
          console.log("Cleared existing auth state");
          this.isLoggedInSubject.next(false);

          // Now set up the auth state listener
          onAuthStateChanged(this.auth, (user) => {
            console.log(
              "Auth state changed:",
              user ? "logged in" : "logged out"
            );
            if (user) {
              const userObj = {
                id: user.uid,
                email: user.email || "",
                name: user.displayName || "",
                wordsViewed: 0,
                registrationDate: new Date(),
                lastLoginDate: new Date(),
              };
              this.currentUserSubject.next(userObj);
              this.isLoggedInSubject.next(true);
            } else {
              this.currentUserSubject.next(null);
              this.isLoggedInSubject.next(false);
              localStorage.removeItem(this.authTokenKey);
            }
          });
        });
      })
      .catch((error) => {
        console.error("Firebase initialization failed:", error);
      });
  }

  private async initializeFirebase(): Promise<void> {
    if (!this.app) {
      try {
        this.firebaseConfig = await this.getFirebaseConfig();
        if (!this.firebaseConfig) {
          throw new Error("Firebase configuration not found");
        }
        this.app = initializeApp(this.firebaseConfig);
        this.auth = getAuth();
        getAnalytics(this.app);
        console.log("Firebase initialized successfully");
      } catch (error) {
        console.error("Error initializing Firebase:", error);
        throw error;
      }
    }
    return Promise.resolve();
  }

  // Rest of the methods remain the same...
  async register(email: string, password: string, name: string): Promise<void> {
    try {
      await this.initializeFirebase();
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = {
        id: userCredential.user.uid,
        email,
        name,
        wordsViewed: 0,
        registrationDate: new Date(),
        lastLoginDate: new Date(),
      };
      this.currentUserSubject.next(user);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem(this.authTokenKey, token);
      this.isLoggedInSubject.next(true);
      console.log(
        "Registration successful, isLoggedIn:",
        this.isLoggedInSubject.value
      );
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await this.initializeFirebase();
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      
      const user = {
        id: userCredential.user.uid,
        email: userCredential.user.email || "",
        name: userCredential.user.displayName || "",
        wordsViewed: 0,
        registrationDate: new Date(),
        lastLoginDate: new Date(),
      };
      
      this.currentUserSubject.next(user);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem(this.authTokenKey, token);
      
      // Explicitly set login state and emit a new value
      this.isLoggedInSubject.next(true);
      console.log("Login successful, isLoggedIn value is now:", this.isLoggedInSubject.value);
      
      // Debug information
      setTimeout(() => {
        console.log("Checking login state after timeout:", this.isLoggedInSubject.value);
      }, 500);
    } catch (error) {
      console.error("Login error:", error);
      this.isLoggedInSubject.next(false);
      localStorage.removeItem(this.authTokenKey);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.auth.signOut();
      this.currentUserSubject.next(null);
      localStorage.removeItem(this.authTokenKey);
      this.isLoggedInSubject.next(false);
      console.log(
        "Logout successful, isLoggedIn:",
        this.isLoggedInSubject.value
      );
      this.router.navigate(["/login"]);
    } catch (error) {
      console.error("Logout error:", error);
      this.isLoggedInSubject.next(false);
      this.router.navigate(["/login"]);
      throw error;
    }
  }
  async updateWordsViewed(userId: string, count: number): Promise<void> {
    const currentUser = this.currentUserSubject.value;
    if (currentUser) {
      this.currentUserSubject.next({ ...currentUser, wordsViewed: count });
    }
  }

  async getFirebaseConfig(): Promise<FirebaseConfig | undefined> {
    //return await this.http.get<FirebaseConfig>('http://localhost:5225/api/Config/firebase').toPromise();
    return await this.http
      .get<FirebaseConfig>(
        "https://picturedictionary-bugef2hseebsh2bn.eastus2-01.azurewebsites.net/api/Config/firebase"
      )
      .toPromise();
  }

  async forgotPassword(email: string): Promise<void> {
    try {
      this.firebaseConfig = await this.getFirebaseConfig();
      if (!this.firebaseConfig) {
        throw new Error("Firebase configuration not found");
      }

      const app = initializeApp(this.firebaseConfig);
      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
    }
  }

  async changePassword(
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    try {
      this.firebaseConfig = await this.getFirebaseConfig();
      if (!this.firebaseConfig) {
        throw new Error("Firebase configuration not found");
      }

      const app = initializeApp(this.firebaseConfig);
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user || !user.email) {
        throw new Error("No authenticated user found");
      }

      // Re-authenticate user before changing password
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Change password
      await updatePassword(user, newPassword);
    } catch (error) {
      console.error("Error changing password:", error);
      throw error;
    }
  }

  async getStripeSession(): Promise<any | undefined> {
    //return await this.http.get<FirebaseConfig>('http://localhost:5225/api/Config/firebase').toPromise();
    //return await this.http.post<any>('http://localhost:5225/api/payments/checkout',null).toPromise();
    return await this.http
      .post<any>(
        "https://picturedictionary-bugef2hseebsh2bn.eastus2-01.azurewebsites.net/api/payments/checkout",
        null
      )
      .toPromise();
  }

  async getProductList(): Promise<any | undefined> {
    //return await this.http.get<FirebaseConfig>('http://localhost:5225/api/Config/firebase').toPromise();
    //return await this.http.get<any>('http://localhost:5225/api/Payments/products').toPromise();
    return await this.http
      .get<any>(
        "https://picturedictionary-bugef2hseebsh2bn.eastus2-01.azurewebsites.net/api/payments/products"
      )
      .toPromise();
    //https://picturedictionary-bugef2hseebsh2bn.eastus2-01.azurewebsites.net/api/payments/products
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
  // Keep the rest of your methods but make sure they use this.auth instead of getAuth()
  // ...
}
