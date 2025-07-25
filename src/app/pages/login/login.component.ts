import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService
  ) {}

  // async login() {
  //   if (this.email && this.password) {
  //     try {
  //       this.isLoading = true;
  //       await this.authService.login(this.email, this.password);
  //       this.router.navigate(['/home']);
  //     } catch (error) {
  //       console.error('Login failed:', error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   }
  // }

  async login() {
    if (this.email && this.password) {
      try {
        this.isLoading = true;
        this.errorMessage = '';  // Clear previous error before login attempt
        await this.authService.login(this.email, this.password);
        this.router.navigate(['/home']);
      } catch (error: any) {
        if (error.code === 'auth/wrong-password') {
          this.errorMessage = 'Incorrect password.';
        } else if (error.code === 'auth/user-not-found') {
          this.errorMessage = 'No account found with this email.';
        } else {
          this.errorMessage = 'Login failed. Please try again.';
        }
      } finally {
        this.isLoading = false;
      }
    } else {
      this.errorMessage = 'Please enter both email and password';
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