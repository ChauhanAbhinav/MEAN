import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent  implements AfterViewInit {

@ViewChild('form', {static: false}) formRef: NgForm;
@ViewChild('name', {static: false}) nameRef: ElementRef;
// public model = {};
onSubmit(form) {
console.log(JSON.stringify(form));
}

hasSubmitted() {
  // console.log(this.formRef.submitted);
  return this.formRef.submitted;

  }
  constructor() {
   }

  ngAfterViewInit() {
    console.log('CustomerListComponent loaded');
  }

}
