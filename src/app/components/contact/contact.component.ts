import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formUser : User;
  users : User[] = [] as User[];

  userForm = this.fb.group({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    phonenumber : new FormControl('', Validators.required),
    address1 : new FormControl(''),
    address2 : new FormControl(''),
    city : new FormControl(''),
    zip : new FormControl(''),
    state : new FormControl(''),
    message : new FormControl(''),
    receivesNotification : new FormControl(false),
    canVolunteer : new FormControl(false)
  })


  constructor(private userStuff : UserServiceService, private fb : FormBuilder) {

   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  addUser(){
    this.formUser = new User(this.userForm.get('firstname').value, this.userForm.get('lastname').value, 
    this.userForm.get('phonenumber').value, this.userForm.get('email').value, this.userForm.get('address1').value,
    this.userForm.get('address2').value, this.userForm.get('city').value, this.userForm.get('state').value, 
    this.userForm.get('zip').value, this.userForm.get('receivesNotification').value, this.userForm.get('canVolunteer').value, 
    null, this.userForm.get('message').value)

    console.log('user : ' + this.formUser);
    this.userStuff.newUser(this.formUser).subscribe((data)=>{
      console.log("==============================")
      console.log("User creation successful!!")
      console.log("New User :" + data);
      console.log("==============================")
    },()=>{console.log("User adding failed")})
  }

  onSubmit(){
    this.addUser();
  }

  getAllUsers(){
    this.userStuff.getUsers().subscribe((data)=>{
      this.users = data;
    },()=>{console.log("something is amiss")})
  }

}
