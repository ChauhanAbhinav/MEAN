import { Component , OnInit, AfterViewInit} from '@angular/core';
import { products } from '../products';
import {ViewChild, ElementRef} from '@angular/core';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  constructor() {
    console.log('this is list constructor');
    this.a = 22;
  }
  products = products;
  private a ;
  // The constructor should only be used to initialize class members but shouldn't do actual "work"


  @ViewChild(ProductAlertsComponent, { static: false }) child: ProductAlertsComponent;
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngAfterViewInit() {
    console.log(this.child.whoAmI());
  }
  ngOnInit() {
    // alert('this is ngOnit' + this.a);

  }
}
