import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  @Input() product: string = '';
  @Input() monthlyPrice: number = 0;
  @Input() yearlyPrice: number = 0;

  isYearly: boolean = false;
  productName:string="";
  constructor(private authService:AuthService,private router:Router) {

  }

ngOnInit(){
  this.authService.getProductList().then(p=>{
    console.log(p);
    this.productName=p[0].description;
  });
}

  get currentPrice(): number {
    return this.isYearly ? this.yearlyPrice : this.monthlyPrice;
  }

  handleCheckout(): void {
    // Add your checkout logic here
    //this.router.navigate(['/payment-checkout']);
    // console.log('Proceeding to checkout with:', {
    //   product: this.product,
    //   frequency: this.isYearly ? 'yearly' : 'monthly',
    //   price: this.currentPrice
    // });
    // this.authService.getStripeSession()
    // .then(p=>{
    //   window.location=p.url;

    // });

    this.authService.getStripeSession()
    .then(response => {
      
      if (response?.url) {
        window.location.href = response.url;
      }
    })
    .catch(error => {
      console.error('Error creating checkout session:', error);
    });
  }

  Test(){
    this.router.navigate(['/payment-success']);
    this.router.navigate(['/payment-cancel']);
  }
}