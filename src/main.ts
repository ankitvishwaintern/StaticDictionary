import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterModalComponent } from './app/components/register-modal/register-modal.component';
import { LogoutComponent } from './app/components/logout/logout.component';
import { ForgotPasswordComponent } from './app/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './app/pages/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, RegisterModalComponent],
  template: `
    <div class="app-container">
      <header>
        <div class="brand">
          <h1>Picture Dictionary</h1>
          <p class="tagline">Learn with Visual Mnemonics</p>
        </div>
        <nav>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About Us</a>
          <a routerLink="/contact" routerLinkActive="active">Contact Us</a> 
          <a href="#" (click)="showRegisterModal($event)">Register</a>
            <a routerLink="/login" routerLinkActive="active">Login</a>
            <a routerLink="/logout" class="logout-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </a>         
          <!-- <div class="auth-links">
            <a href="#" (click)="showRegisterModal($event)">Register</a>
            <a routerLink="/login" routerLinkActive="active">Login</a>
            <a routerLink="/logout" class="logout-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </a>
          </div> -->
        </nav>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-register-modal *ngIf="isRegisterModalVisible" (close)="hideRegisterModal()"></app-register-modal>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.5rem;
      width: 100%;
    }

    header {
      margin-bottom: 0.25rem;
      padding: 0.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    @media (min-width: 768px) {
      header {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 0;
      justify-content: flex-start;
      width: 100%;
    }

    @media (min-width: 768px) {
      nav {
        flex-direction: row;
        flex-wrap: wrap;
        width: auto;
        gap: 0.5rem;
        padding: 0;
        flex-grow: 1;
        justify-content: flex-end;
      }
    }

    .auth-links {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      width: 100%;
      justify-content: center;
      padding-top: 0.5rem;
      border-top: 1px solid #eee;
    }

    @media (min-width: 768px) {
      .auth-links {
        width: auto;
        margin-left: auto;
        padding-top: 0;
        border-top: none;
      }
    }

    .brand {
      text-align: left;
      padding: 1rem 1rem 0 1rem;
      width: 100%;
    }

    @media (min-width: 768px) {
      .brand {
        padding: 0 0 0 1rem;
        width: auto;
        min-width: 250px;
      }
    }

    h1 {
      color: #333;
      margin: 0;
      font-size: 1.25rem;
      line-height: 1;
      white-space: nowrap;
    }

    .tagline {
      color: #666;
      margin: 0.15rem 0 0;
      font-style: italic;
      font-size: 0.8rem;
      white-space: nowrap;
    }

    nav a {
      color: #666;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition: all 0.3s;
      font-size: 0.9rem;
      text-align: left;
      width: auto;
    }

    @media (min-width: 768px) {
      nav a {
        white-space: nowrap;
      }
    }

    nav a:hover {
      color: #4CAF50;
      background: #f5f5f5;
    }

    nav a.active {
      color: #4CAF50;
      font-weight: bold;
    }

    main {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 0.75rem;
    }

    .logout-link {
      display: flex;
      align-items: center;
      padding: 0.25rem;
    }

    .logout-link svg {
      color: #666;
      transition: color 0.3s;
    }

    .logout-link:hover svg {
      color: #4CAF50;
    }
  `]
})
export class App {
  isRegisterModalVisible = false;

  showRegisterModal(event: Event) {
    event.preventDefault();
    this.isRegisterModalVisible = true;
  }

  hideRegisterModal() {
    this.isRegisterModalVisible = false;
  }
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});