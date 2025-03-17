import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email = "";
  password = "";
  isLoading = false;
  errorMessage = "";

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
        this.toastr.success('Login Successful!', 'Success');
        
        // Update UI state explicitly
        console.log("Login successful in component, waiting for redirect");
        
        // Delay navigation slightly to ensure UI updates first
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 100);
      } catch (error: any) {
        if (error.code === 'auth/wrong-password') {
          this.errorMessage = 'Incorrect password.';
          this.toastr.error('Incorrect email or password', 'Error');
        } else if (error.code === 'auth/user-not-found') {
          this.errorMessage = 'No account found with this email.';
          this.toastr.error('No account found with this email', 'Error');
        } else {
          this.errorMessage = 'Login failed. Please try again.';
          this.toastr.error('Login failed. Please try again', 'Error');
        }
      } finally {
        this.isLoading = false;
      }
    } else {
      this.errorMessage = 'Please enter both email and password';
      this.toastr.warning('Please enter both email and password', 'Warning');
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    this.router.navigate(["/forgot-password"]);
  }

  onChangePassword(event: Event) {
    event.preventDefault();
    this.router.navigate(["/change-password"]);
  }
}
