import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

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
      <!-- For debugging -->
      <span style="color: white; margin-right: 10px;">Auth: {{isLoggedIn ? 'IN' : 'OUT'}}</span>
      
      <!-- Simplified version -->
      <a *ngIf="!isLoggedIn" routerLink="/login">Login</a>
      <button *ngIf="isLoggedIn" (click)="logout()">Logout</button>
    </div>
    </nav>
    <div>
      <!-- Only shown during development -->
      <div style="display: none;">Debug: isLoggedIn = {{isLoggedIn}}</div>
    </div>
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
export class AppComponent implements OnInit, OnDestroy {
  title = 'picture-dictionary';
  isLoggedIn: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit() {
    console.log('AppComponent: ngOnInit is called');
    
    // Debug current value
    console.log('Initial isLoggedIn state:', this.authService.isLoggedIn());
    
    this.subscription = this.authService.isLoggedIn$.subscribe(loggedIn => {
      console.log('AppComponent: isLoggedIn value from subscription', loggedIn);
      this.zone.run(() => {
        this.isLoggedIn = loggedIn;
        console.log('AppComponent: Updated isLoggedIn to', this.isLoggedIn);
        this.cdr.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    console.log('AppComponent: logout called');
    this.authService.logout();
  }
}