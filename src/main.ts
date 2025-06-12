import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, provideRouter, Routes, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { Router } from '@angular/router';
import { AboutComponent } from './app/pages/about/about.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterModalComponent } from './app/components/register-modal/register-modal.component';
import { LogoutComponent } from './app/components/logout/logout.component';
import { ForgotPasswordComponent } from './app/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './app/pages/change-password/change-password.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { SubscriptionComponent } from './app/components/subscription/subscription.component';
import { PaymentSuccessComponent } from './app/components/PaymentSuccess/payment-success.component';
import { PaymentCancelComponent } from './app/components/payment-cancel/payment-cancel.component';
import { PaymentCheckoutComponent } from './app/components/payment-checkout/payment-checkout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: 'payment-cancel', component: PaymentCancelComponent },
  { path: 'payment-checkout', component: PaymentCheckoutComponent },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  imports: [CommonModule, RouterModule, HttpClientModule, RegisterModalComponent],  template: `
    <div class="app-container">
      <header>
        <div class="brand">
          <h1>Picture Dictionary</h1>
          <p class="tagline">Learn with Visual Mnemonics</p>
        </div>
        <button class="hamburger" [class.open]="isMenuOpen" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav [class.open]="isMenuOpen">
          <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About Us</a>
          <a routerLink="/contact" routerLinkActive="active">Contact Us</a>
          <a routerLink="/subscription" routerLinkActive="active">Subscribe</a>
          <a href="#" (click)="showRegisterModal($event)">Register</a>
          <a routerLink="/login" routerLinkActive="active">Login</a>
          <a routerLink="/logout" class="logout-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-register-modal *ngIf="isRegisterModalVisible" (close)="hideRegisterModal()"></app-register-modal>
    </div>
  `,  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f8f9fa;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-around;
      width: 30px;
      height: 25px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 10;
    }

    .hamburger span {
      width: 30px;
      height: 3px;
      background-color: #666;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }

    .hamburger.open span:first-child {
      transform: rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
      transform: rotate(-45deg);
    }

    @media (max-width: 767px) {
      .hamburger {
        display: flex;
      }

      nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: white;
        padding: 4rem 2rem 2rem;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: 5;
      }

      nav.open {
        transform: translateX(0);
      }
    }

    .app-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0.5rem;
      width: 100%;
    }

    @media (max-width: 480px) {
      .app-container {
        padding: 0.25rem;
      }
    }    header {
      margin-bottom: 0.25rem;
      padding: 0.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      width: 100%;
    }    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.25rem;
      width: 100%;
    }

    @media (min-width: 768px) {
      header {
        flex-direction: row;
        align-items: center;
        padding: 1rem 2rem;
      }

      .brand {
        align-items: flex-start;
        width: 50%;
        padding: 0;
      }
    }

    h1 {
      color: #333;
      margin: 0;
      font-size: clamp(1.25rem, 2vw, 1.5rem);
      line-height: 1.2;
      text-align: center;
    }

    .tagline {
      color: #666;
      margin: 0.25rem 0 0;
      font-style: italic;
      font-size: clamp(0.75rem, 1.5vw, 0.9rem);
      text-align: center;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      margin-top: 1rem;
    }

    @media (min-width: 768px) {
      nav {
        flex-direction: row;
        justify-content: flex-end;
        flex-wrap: wrap;
        margin-top: 0;
        margin-left: 2rem;
      }
    }    nav a {
      color: #666;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      transition: all 0.3s;
      font-size: 0.85rem;
      text-align: center;
      width: 100%;
      background: #f8f9fa;
    }

    @media (min-width: 768px) {
      nav a {
        width: auto;
        background: transparent;
      }
    }

    nav a:hover {
      color: #4CAF50;
      background: #f0f0f0;
    }

    nav a.active {
      color: #4CAF50;
      font-weight: 600;
      background: #e8f5e9;
    }

    main {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem;
      margin-top: 0.5rem;
      min-height: calc(100vh - 200px);
    }

    @media (max-width: 480px) {
      main {
        padding: 0.75rem;
        border-radius: 4px;
      }
    }

    .logout-link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem;
      width: 100%;
    }

    @media (min-width: 768px) {
      .logout-link {
        width: auto;
        padding: 0.75rem 1rem;
      }
    }

    .logout-link svg {
      color: #666;
      transition: color 0.3s;
      width: 20px;
      height: 20px;
    }

    @media (min-width: 768px) {
      .logout-link svg {
        width: 16px;
        height: 16px;
      }
    }

    .logout-link:hover svg {
      color: #4CAF50;
    }
  `]
})
export class App {
  isRegisterModalVisible = false;
  isMenuOpen = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    //alert("A");
     this.route.queryParams.subscribe(params => {
      const isSuccess = params['isSuccess'];
      const isFailed = params['isfailed'];
      
      if (isSuccess === '1' || isSuccess === 'true') {
        this.router.navigate(['/payment-success']);
      } else if (isFailed === '1' || isFailed === 'true') {
        this.router.navigate(['/payment-cancel']);
      }
    });
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const isSuccess = params['isSuccess'];
      const isFailed = params['isFailed'];
      
      if (isSuccess === 'Y') {
        this.router.navigate(['/payment-success'], { replaceUrl: true });
      } else if (isFailed === 'Y') {
        this.router.navigate(['/payment-cancel'], { replaceUrl: true });
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

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
    provideHttpClient(),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-below-button',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true
    })
  ]
});