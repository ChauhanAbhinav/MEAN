import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements AfterViewInit {
suits: any = ['Men', 'Women', 'Boys', 'Inspiration'];
formGroup = new FormGroup({
  name :  new FormControl('name', Validators.required),
  address :  new FormControl('address', Validators.required),
  oppoSuits :  new FormControl('Women'),

});
// formGroup = this.fb.group(
//   {
//     name: ['Name', Validators.required],
//     address: ['Address'],
//     oppoSuits: ['Women']
//   }
// )

  constructor(private fb: FormBuilder) {
   }

  ngAfterViewInit() {
      console.log('OrdersListComponent loaded', this.formGroup.value);
      console.log('printing', this.formGroup.value);
      console.log(this.formGroup.get('name').value);
  }

  setValue() {
    // this.formGroup.setValue({name: '', address: 'dsf', oppoSuits: 'Boys'}, { onlySelf: true});

  }
  patchValue() {
    this.formGroup.patchValue({address: ''}, { onlySelf: true});
  }
  onSubmit(form) {
  console.log('is form valid' + this.formGroup.valid);
  console.log('is name valid' + this.formGroup.get('name').valid);
  console.log('is address valid' + this.formGroup.get('address').valid);

  // console.log(this.fb);
  }
  reset() {
    // this.formGroup.get('address').reset( {value: 'Drew', disabled: true });

  }
  
}
