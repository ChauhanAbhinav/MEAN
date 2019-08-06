import { Injectable } from '@angular/core';
import {CustomerListComponent} from '../customers/customer-list/customer-list.component';
import {
   CanActivate,
   CanActivateChild,
   CanDeactivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot
} from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Injectable()
export class AuthGuardsService  implements CanActivate, CanActivateChild, CanDeactivate <CustomerListComponent> {

  constructor() { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url === 'customers') {
       alert('Guard activated : route allowed');
       return true;
    } else {
      alert('Guard activated : route not allowed');
      return false;
    }
  }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log('yes');
      // return this.canActivate(route, state);
      return true;
    }

    canDeactivate(component: CustomerListComponent) {
      if(component.hasSubmitted()){
        console.log('inside deactivate, Allowed');
        return true;
      }
      else {
        console.log('inside deactivate, Not Allowed');
        return window.confirm('You have not submitted the form, do you still want to cancel?');
      }

    }
  }

