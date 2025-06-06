import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  message = '';
  isError = false;
  isSubmitting = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.isError = true;
      this.message = 'New passwords do not match';
      return;
    }

    this.isSubmitting = true;
    this.message = '';
    this.isError = false;

    try {
      await this.authService.changePassword(this.currentPassword, this.newPassword);
      this.message = 'Password changed successfully';
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } catch (error: any) {
      this.isError = true;
      this.message = 'Failed to change password. Please try again.';
      console.error('Change password error:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
} 