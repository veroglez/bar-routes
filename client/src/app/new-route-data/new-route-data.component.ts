import { Component, OnInit, Input } from '@angular/core'
import { PlacesService } from '../services/places.service'
import { AuthService } from '../services/auth.service'


interface LoginForm{
  routename:string
}


@Component({
  selector: 'app-new-route-data',
  templateUrl: './new-route-data.component.html',
  styleUrls: ['./new-route-data.component.css']
})
export class NewRouteDataComponent implements OnInit {
  user
  formInfo:LoginForm = {
    routename: ""
  }


  constructor( public places:PlacesService, public auth:AuthService  ) { }

  ngOnInit() {
  }


  createRoute(){
    this.user = this.auth.getUser()
    console.log('entro al componente', this.user._id, this.formInfo.routename)
    this.places.createRoutes(this.user._id, this.formInfo.routename).subscribe()
  }

}
