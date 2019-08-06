import { Injectable } from '@angular/core';
// import { NgModule } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'application/json',
    }),
    // responseType: 'text'
  };

  constructor(private http: HttpClient) {
  }

 getUsers() {
   return this.http.get(this.baseurl + '/users' , this.httpOptions );
  }
  getUserById(id) {
    return this.http.get(this.baseurl + '/users/' + id , this.httpOptions );
   }
   createUser(body) {
    return this.http.post(this.baseurl + '/users/', body, this.httpOptions );
    }
   updateUser(body,id) {
  return this.http.put(this.baseurl + '/users/' + id, body, this.httpOptions );
  }
  deleteUser(id) {
    return this.http.delete(this.baseurl + '/users/' + id, this.httpOptions );
    }

}
