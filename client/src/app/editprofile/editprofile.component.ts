import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})

export class EditprofileComponent implements OnInit {
  userId;
  formInfo = {
    username:"",
    password:"",
    email:""
  }
  user:any;

  constructor(public auth:AuthService, public router: Router) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
      .subscribe( user => {
        this.user=user
      } );
  }

  editProfile(){
    this.userId = this.auth.getUser()
    const {username, password, email} = this.formInfo;
      this.auth.editProfile(username, password, email)
      .map(user => console.log('holi',user))
      // .subscribe( ()=>this.router.navigate([`/profile/${this.userId._id}}`]) );
      .subscribe( result => this.user = result);

  }
}
