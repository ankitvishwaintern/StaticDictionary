import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //******************************************* */
  //create below for production enviornment
  //******************************************* */
  firebaseConfig = {
    apiKey: "AIzaSyA9Yq2UCZTGzmhGV4Uv9CNXuS7rL_yR7ks",
    authDomain: "picturedictionary-a2149.firebaseapp.com",
    projectId: "picturedictionary-a2149",
    storageBucket: "picturedictionary-a2149.firebasestorage.app",
    messagingSenderId: "249299812094",
    appId: "1:249299812094:web:96c7906db266f64c88afaf",
    measurementId: "G-DD99CEG1VQ"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);

  async register(email: string, password: string, name: string): Promise<void> {
    try {
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
    } catch (error) {
      this.currentUserSubject.next(null);
      //throw error;
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
} 