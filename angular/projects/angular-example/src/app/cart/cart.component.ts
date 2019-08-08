import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CartService } from '../cart.service' ;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  form;
  constructor(private cart: CartService, private fb: FormBuilder) {
    this.items = this.cart.getItems();
    this.form = this.fb.group({
      name: '',
      address: ''
    });
  }
 onSubmit(formData) {
 console.log('your order has been submitted', formData);
 this.items = this.cart.clearCart();
 this.form.reset();
 }
  ngOnInit() {
  }

}
