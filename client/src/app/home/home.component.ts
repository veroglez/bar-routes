import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../services/places.service'
import { AuthService } from '../services/auth.service';


interface LoginForm{
  routename:string
  routegenre:string
  pricerange:string
  schedule:string
  city:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  places_genre = [
    'Romantic',
    'Live Music',
    'After',
    'Brunch'
  ]
  price_range = [
    'Cheap',
    'Moderate',
    'Expensive'
  ]
  schedule = [
    'Morning',
    'Afternoon',
    'Night'
  ]
  formInfo:LoginForm = {
    routename: "",
    routegenre: "",
    pricerange: "",
    schedule:"",
    city:""
  }
  resultRoutes
  user

  constructor(public places:PlacesService, public auth:AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );}

  ngOnInit() {}


  searchRoutes(){
    const {city, schedule, routegenre, pricerange} = this.formInfo;
    this.places.searchRoutes(city, schedule, routegenre, pricerange).subscribe(
      res => console.log('componente',res)
    )
  }

}
