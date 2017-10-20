import { Component, OnInit } from '@angular/core'
import {AuthService} from '../services/auth.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
formInfo = {
  username:"",
  password:"",
  email:""
}
  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
  }

  signup(){
    const {username, password, email} = this.formInfo
    if(username != "" && password != "" && email != ""){
      this.auth.signup(username, password, email)
      .map(user => console.log(user))
      .subscribe( ()=> this.router.navigate(["/"]) )
    } else{
      console.log("You must set a username and a password")
    }
  }

}
