import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service' ;
// The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains information
// about the route, its parameters, and additional data associated with the route.

import { products } from '../products';

@Component({
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html',
    styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    private url: {};
    private id: number;
    private product: {};
    private outlet ;

    constructor(private route: ActivatedRoute, private cart: CartService) {
        console.log('this is details constructor');
        this.url = this.route.snapshot.url;
        this.id = this.route.snapshot.params.productId;
        this.product = products[this.id];
        this.outlet = this.route.snapshot.outlet;
        console.log(this.product);
    }
    addToCart(product) {
        this.cart.addToCart(product);
        alert('Product added to cart');
    }

    ngOnInit() { }
}
