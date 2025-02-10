import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentSuccessComponent } from './components/PaymentSuccess/payment-success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  // Add other routes here
];