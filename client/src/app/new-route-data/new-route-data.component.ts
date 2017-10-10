import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { PlacesService } from '../services/places.service'
import { AuthService } from '../services/auth.service'


interface LoginForm{
  routename:string
  routegenre:string
  pricerange:string
  schedule:string
  city:string
}


@Component({
  selector: 'app-new-route-data',
  templateUrl: './new-route-data.component.html',
  styleUrls: ['./new-route-data.component.css']
})
export class NewRouteDataComponent implements OnInit {
  @Output() onSubmitId = new EventEmitter<boolean>();
  user
  places_genre = [
    'Romántica',
    'Música en directo',
    'De after',
    'Comer'
  ]
  price_range = [
    '€',
    '€€',
    '€€€'
  ]
  schedule = [
    'Mañana',
    'Tarde',
    'Noche'
  ]
  formInfo:LoginForm = {
    routename: "",
    routegenre: "",
    pricerange: "",
    schedule:"",
    city:""
  }

  constructor( public places:PlacesService, public auth:AuthService  ) { }

  ngOnInit() {}

  createRoute(){
    this.user = this.auth.getUser()
    this.places.createRoutes(this.user._id, this.formInfo.routename, this.formInfo.routegenre, this.formInfo.pricerange, this.formInfo.schedule, this.formInfo.city).subscribe()
    setTimeout(()=> {
        this.onSubmitId.emit(true)
    }, 1000);


  }

}
