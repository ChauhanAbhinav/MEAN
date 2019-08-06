import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(private cart: CartService) {
    this.cart.getShippingPrices().subscribe(
    data => {
      this.shippingCosts = data;
      console.log(JSON.stringify(this.shippingCosts));
      console.log(typeof data)
    }
      );
   }

  ngOnInit() {
  }

}
