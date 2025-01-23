import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Login</h2>
        <form (ngSubmit)="login()">
          <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required>
          <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required>
          <button type="submit" [disabled]="isLoading">
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>
        </form>
        
        <div class="links-container">
          <a href="#" class="forgot-password" (click)="onForgotPassword($event)">Forgot Password?</a>
          <a href="#" class="change-password" (click)="onChangePassword($event)">Change Password</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
      padding: 1rem;
    }
    
    .login-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
    }

    @media (min-width: 768px) {
      .login-card {
        padding: 2rem;
      }
    }
    
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #6B5ED9;
      border-radius: 4px;
    }
    button {
      padding: 0.5rem 1rem;
      background: #6B5ED9;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #5648C0;
    }

    .links-container {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .forgot-password,
    .change-password {
      color: #666;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s;
    }

    .forgot-password:hover,
    .change-password:hover {
      color: #4CAF50;
      text-decoration: underline;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    if (this.email && this.password) {
      try {
        this.isLoading = true;
        await this.authService.login(this.email, this.password);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        this.isLoading = false;
      }
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    this.router.navigate(['/forgot-password']);
  }

  onChangePassword(event: Event) {
    event.preventDefault();
    this.router.navigate(['/change-password']);
  }
} 