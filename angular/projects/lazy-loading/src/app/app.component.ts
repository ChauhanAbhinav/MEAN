import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'lazy-loading';
  users: {};
  user: {} =  {
    id: 3,
    first_name: 'Camila',
    last_name: 'sadsadads',
    email: 'camila@email.com'
};
  id = 3;
  @ViewChild(CustomerListComponent, {static: false}) chviewChild: CustomerListComponent;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    // get all users
    // this.httpService.getUsers().subscribe(
    // res => {
    //   // console.log("type is",typeof res);
    //   this.users = res;
    //   console.log('[GET] Users: ' + JSON.stringify(this.users));
    // },
    // err => {
    //   console.log('Error:', err.error);
    // });
    // // get user by id
    // this.httpService. getUserById(this.id).subscribe(
    //   res => {
    //     console.log('[GET] User is : ' + JSON.stringify(res));
    //   },
    //   err => {
    //     console.log('Error:', err.error);
    //   });
    //   // Create User
    // this.httpService.createUser( {first_name: 'Abhinav', last_name: 'chauhan', email: 'abhinav@email.com'})
    // .subscribe(
    //   res => {
    //     console.log('[POST] User Created : ' + JSON.stringify(res));
    //   },
    //   err => {
    //     console.log('Error:', err.error);
    //   });
    // // update user data
    // this.httpService.updateUser(this.user,this.id).subscribe(
    //   res => {
    //     console.log('[PUT] User updated : ' + JSON.stringify(res));
    //   },
    //   err => {
    //     console.log('Error:', err.error);
    //   });

    //   // delete user
    // this.httpService.deleteUser(10).subscribe(
    //   res => {
    //     console.log('[DELETE] User deleted : ' + JSON.stringify(res));
    //   },
    //   err => {
    //     console.log('Error:', err.error);
    //   });



    }

ngAfterViewInit() {
    // console.log(this.chviewChild);
}
}
