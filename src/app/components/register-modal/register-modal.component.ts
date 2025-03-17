import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-overlay">
      <div class="modal-content">
        <h2>Registration Required</h2>
        <p>You've viewed 10 words! Register or login now to continue learning and track your progress.</p>
        <form (ngSubmit)="register()">
          <input type="text" [(ngModel)]="name" name="name" placeholder="Name" required>
          <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required>
          <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required>
          <div class="button-group">
            <button type="submit">Register</button>
            <button type="button" (click)="close.emit()">Close</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
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
    .button-group {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
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
  `]
})
export class RegisterModalComponent {
  @Output() close = new EventEmitter<void>();
  
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  async register() {
    if (this.name && this.email && this.password) {
      try {
        await this.authService.register(this.email, this.password, this.name).then((p:void)=>{
          this.close.emit();
          alert("Registration successful");
        });
        
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  }
} 
