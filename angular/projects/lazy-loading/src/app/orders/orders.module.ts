import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import {CustomerListComponent} from '../customers/customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // CustomerListComponent
  ]
})
export class OrdersModule {
  constructor(){
    console.log('Orders  Module loaded');
  }
 }
