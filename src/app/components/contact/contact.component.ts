import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formUser : User;
  users : User[] = [] as User[];
  constructor(private userStuff : UserServiceService) {

   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser(){
    
  }

  getAllUsers(){
    this.userStuff.getUsers().subscribe((data)=>{
      this.users = data;
      console.log(data);
      console.log(this.users);
    })
  }

}
