import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users : User[] = [];
  url : string = 'https://stormy-lake-54891.herokuapp.com/api/v1/';
  constructor(private http : HttpClient) {

   }

  /* 
   POST new user
  */
  public newUser(u : User) : Observable<User> {
    let jsonU = JSON.stringify(u);
    return this.http.post(this.url + '/new', {jsonU}) as Observable<User>;
  }

  
}
