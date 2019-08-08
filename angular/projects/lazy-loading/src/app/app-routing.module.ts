import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent} from './customers/customer-list/customer-list.component';
import { AuthGuardsService } from './services/auth-guards.service';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent,
    // loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule),
    canActivate: [AuthGuardsService],
    canActivateChild: [AuthGuardsService],
    canDeactivate: [AuthGuardsService],
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule),
    // canActivate: [AuthGuardsService],
    // canActivateChild: [AuthGuardsService],
    // canDeactivate: [AuthGuardsService],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
