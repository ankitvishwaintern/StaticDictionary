import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss']
})
export class PaymentCheckoutComponent implements OnInit {
  product: string = '';
  price: number = 0;
  isYearly: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Retrieve product details from localStorage or a service
    const productDetails = JSON.parse(localStorage.getItem('productDetails') || '{}');
    this.product = productDetails.product;
    this.price = productDetails.price;
    this.isYearly = productDetails.isYearly;
  }

  handleCheckout(): void {
    this.authService.getStripeSession()
      .then(p => {
        window.location.href = p.url;
      })
      .catch(error => {
        console.error('Payment session creation failed:', error);
      });
  }
}