import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../services/places.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  barsRoutes

  constructor(public places:PlacesService) { }

  ngOnInit() {

    this.places.getList()
      .subscribe(d => {
        this.barsRoutes = d;
      });

  }

}
