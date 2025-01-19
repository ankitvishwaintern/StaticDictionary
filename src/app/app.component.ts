import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
        <a routerLink="/login" routerLinkActive="active">Login</a>
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
export class AppComponent {
  title = 'picture-dictionary';
} 