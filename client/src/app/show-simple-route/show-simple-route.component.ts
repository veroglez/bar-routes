import { Router, ActivatedRoute } from '@angular/router'
import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core'
import { DirectionsMapDirective } from '../map/google-map.directive'
import { PlacesService } from '../services/places.service'
import { } from 'googlemaps'

@Component({
  selector: 'app-show-simple-route',
  templateUrl: './show-simple-route.component.html',
  styleUrls: ['./show-simple-route.component.css'],
  providers: [GoogleMapsAPIWrapper]
})

export class ShowSimpleRouteComponent implements OnInit {placeLatitude

  public latitude: number
  public longitude: number
  public zoom: number
  public iconurl: string
  public mapCustomStyles: any
  public estimatedTime: any
  public estimatedDistance: any
  public waypoints: Array<string> = []
  public route

  @ViewChild("pickupInput")
  public pickupInputElementRef: ElementRef

  @ViewChild("pickupOutput")
  public pickupOutputElementRef: ElementRef

  @ViewChild("scrollMe")
  private scrollContainer: ElementRef

  @ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective

  public origin: any
  public destination: any
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private gmapsApi: GoogleMapsAPIWrapper,
    private _elementRef: ElementRef,
    public places:PlacesService,
    public router: ActivatedRoute
  ){}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.getRoute(params['id'])
    })

    this.zoom = 4
    this.latitude = 39.8282
    this.longitude = -98.5795

    this.mapsAPILoader.load().then(() => {
      this.showRoute()
    })
  }

  getRoute(id){
    this.places.getRoute(id).subscribe(route =>{
      this.route = route
    })
  }

  showRoute(){
      this.vc.origin = { longitude: this.route.places[0].longitude, latitude: this.route.places[0].longitude }
      this.vc.originPlaceId = this.route.places[0].mapPlaceId

      if (this.route.places.length > 2)
        this.vc.waypoints.push({ location: this.route.places[this.route.places.length-2].name })

      this.vc.destination = { longitude: this.route.places[this.route.places.length-1].longitude, latitude: this.route.places[this.route.places.length-1].latitude } // its a example aleatory position
      this.vc.destinationPlaceId = this.route.places[this.route.places.length-1].mapPlaceId

    if (this.vc.directionsDisplay === undefined)
      this.mapsAPILoader.load().then(() => {this.vc.directionsDisplay = new google.maps.DirectionsRenderer})

    this.vc.updateDirections()
    this.zoom = 12
  }

  getDistanceAndDuration() {
    this.estimatedTime = this.vc.estimatedTime
    this.estimatedDistance = this.vc.estimatedDistance
  }

}
