import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service'


@Component({
  selector: 'app-show-routes',
  templateUrl: './show-routes.component.html',
  styleUrls: ['./show-routes.component.css']
})
export class ShowRoutesComponent implements OnInit {
  routes
  constructor(public places:PlacesService) { }

  ngOnInit() {

    console.log(this.places.allRoutes)
  }


}
