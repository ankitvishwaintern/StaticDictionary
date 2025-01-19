import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logout-message">
      <p>Logging out...</p>
    </div>
  `,
  styles: [`
    .logout-message {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 2rem;
    }

    .logout-message p {
      color: #666;
      font-size: 1.1rem;
    }
  `]
})
export class LogoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Add logout method to AuthService
    this.authService.logout();
    this.router.navigate(['/']);
  }
} 