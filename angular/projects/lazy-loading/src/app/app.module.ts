import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { AuthGuardsService } from './services/auth-guards.service';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// CustomersModule and OrdersModule are loaded dynamically by lazy-loading, should not be imported here

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomersModule,
    // OrdersModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [AuthGuardsService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
