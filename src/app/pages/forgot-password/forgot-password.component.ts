import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = '';
  isError: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    if (!this.email) return;
    
    this.isSubmitting = true;
    this.message = '';
    this.isError = false;

    try {
      await this.authService.forgotPassword(this.email);
      this.message = 'Password reset link has been sent to your email.';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    } catch (error: any) {
      this.isError = true;
      this.message = 'Failed to send reset link. Please try again.';
      console.error('Password reset error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
} 