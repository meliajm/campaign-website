import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users : User[] = [];
  url : string = 'https://desolate-mesa-04505.herokuapp.com/api/v1/users/';
  constructor(private http : HttpClient) {

   }

  /* 
   POST new user
  */
  public newUser(u : User) : Observable<User> {
    let jsonU = JSON.stringify(u);
    return this.http.post(this.url, jsonU, {  headers : {
      'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*'
    }}) as Observable<User>;
  }

  public getUsers() : Observable<User[]>{
    return this.http.get(this.url,{
      headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
      }
    }) as Observable<User[]>;
  }


}
