import { Component, OnInit, Output,EventEmitter } from '@angular/core'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  routeId:boolean = false
  user

  constructor( public auth:AuthService ) { }

  ngOnInit() {
    this.user = this.auth.getUser()
    console.log(this.user)

  }

  receiveEmitter(a){
    this.routeId = a
    console.log('componente padre', this.routeId)
  }
}
