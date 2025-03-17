import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="nav-bar">
      <div class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/about" routerLinkActive="active">About Us</a>
        <a routerLink="/contact" routerLinkActive="active">Contact Us</a>
      </div>
      <div class="auth-links">
        <ng-container *ngIf="!isLoggedIn">
          <a routerLink="/login" routerLinkActive="active">Login</a>
        </ng-container>
        <ng-container *ngIf="isLoggedIn">
          <button (click)="logout()" style="background: none; border: none; color: white; cursor: pointer; padding: 0.5rem 1rem; border-radius: 4px; transition: background-color 0.3s;">Logout</button>
        </ng-container>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav-bar {
      background: #6B5ED9;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links, .auth-links {
      display: flex;
      gap: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    a:hover {
      background: rgba(255,255,255,0.1);
    }
    .active {
      background: rgba(255,255,255,0.2);
    }
  `]
})
export class AppComponent implements OnInit{
  title = 'picture-dictionary';
  isLoggedIn : boolean = false;

  constructor(private authService : AuthService) {}

  ngOnInit(){
    console.log('AppComponent : ngOnInit is called');
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      console.log('AppComponent : ngOnInit isLoggedIn value from subscription', loggedIn);
      this.isLoggedIn = loggedIn;
    });
  }

  logout() {
    this.authService.logout();
  }
}
