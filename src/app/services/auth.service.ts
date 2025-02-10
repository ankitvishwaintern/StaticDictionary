import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { FirebaseConfig } from '../shared/models/firebase-config.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  firebaseConfig: FirebaseConfig | undefined;
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //******************************************* */
  //create below for production enviornment
  //******************************************* */
  /*
  firebaseConfig = {
    apiKey: "AIzaSyA9Yq2UCZTGzmhGV4Uv9CNXuS7rL_yR7ks",
    authDomain: "picturedictionary-a2149.firebaseapp.com",
    projectId: "picturedictionary-a2149",
    storageBucket: "picturedictionary-a2149.firebasestorage.app",
    messagingSenderId: "249299812094",
    appId: "1:249299812094:web:96c7906db266f64c88afaf",
    measurementId: "G-DD99CEG1VQ"
  };
*/
  // Initialize Firebase


  constructor(private http: HttpClient) { }

  async register(email: string, password: string, name: string): Promise<void> {
    try {
      this.firebaseConfig = await this.getFirebaseConfig();
      if (!this.firebaseConfig) {
        throw new Error('Firebase configuration not found');
      }
      else {
        const app = initializeApp(this.firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = {
              id: userCredential.user.uid,
              email,
              name,
              wordsViewed: 0,
              registrationDate: new Date(),
              lastLoginDate: new Date()
            };
            this.currentUserSubject.next(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw error;
          });
      }
    } catch (error) {
      throw error;
    }
  }

  async updateWordsViewed(userId: string, count: number): Promise<void> {
    const currentUser = this.currentUserSubject.value;
    if (currentUser) {
      this.currentUserSubject.next({ ...currentUser, wordsViewed: count });
    }
  }

  async login(email: string, password: string): Promise<void> {
    try {
      this.firebaseConfig= await this.getFirebaseConfig();
      if (!this.firebaseConfig) {
        throw new Error('Firebase configuration not found');
      }
      else {
        const app = initializeApp(this.firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = {
        id: userCredential.user.uid,
        email: userCredential.user.email || '',
        name: userCredential.user.displayName || '',
        wordsViewed: 0,
        registrationDate: new Date(),
        lastLoginDate: new Date()
      };
      this.currentUserSubject.next(user);
    } 
  }
  catch (error) {
      // Log any errors that occur during login
      //console.log(error);
      // Reset the current user to null since login failed
      //this.currentUserSubject.next(null);
      // Commented out throwing the error to prevent crashes
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      const auth = getAuth();
      await auth.signOut();
      this.currentUserSubject.next(null);
    } catch (error) {
      throw error;
    }
  }

  async getFirebaseConfig(): Promise<FirebaseConfig | undefined> {
    //return await this.http.get<FirebaseConfig>('http://localhost:5225/api/Config/firebase').toPromise();
    return await this.http.get<FirebaseConfig>('https://picturedictionary-bugef2hseebsh2bn.eastus2-01.azurewebsites.net/api/Config/firebase').toPromise();

  }

  async forgotPassword(email: string): Promise<void> {
    try {
      this.firebaseConfig = await this.getFirebaseConfig();
      if (!this.firebaseConfig) {
        throw new Error('Firebase configuration not found');
      }
      
      const app = initializeApp(this.firebaseConfig);
      const auth = getAuth();
      
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw error;
    }
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      this.firebaseConfig = await this.getFirebaseConfig();
      if (!this.firebaseConfig) {
        throw new Error('Firebase configuration not found');
      }
      
      const app = initializeApp(this.firebaseConfig);
      const auth = getAuth();
      const user = auth.currentUser;
      
      if (!user || !user.email) {
        throw new Error('No authenticated user found');
      }

      // Re-authenticate user before changing password
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      
      // Change password
      await updatePassword(user, newPassword);
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  }

  async getStripeSession(): Promise<any | undefined> {
    //return await this.http.get<FirebaseConfig>('http://localhost:5225/api/Config/firebase').toPromise();
    return await this.http.post<any>('http://localhost:5225/api/payments/checkout',null).toPromise();

  }

  async getProductList(): Promise<any | undefined> {
    //return await this.http.get<FirebaseConfig>('http://localhost:5225/api/Config/firebase').toPromise();
    return await this.http.get<any>('http://localhost:5225/api/Payments/products').toPromise();

  }
} 