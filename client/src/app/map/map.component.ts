import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core'
import { DirectionsMapDirective } from './google-map.directive'
import { PlacesService } from '../services/places.service'
import { } from 'googlemaps'


declare var google: any
declare var jQuery: any
interface Place{
  lat:any
  lng:any
  id:string
  name:string
  photos:Array<object>
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GoogleMapsAPIWrapper]
})

export class MapComponent implements OnInit {
  placeLatitude
  placeLongitude
  placePlaceId
  placeName
  placePhotos
  mapPlaceId
  public latitude: number
  public longitude: number
  public destinationInput: FormControl
  public destinationOutput: FormControl
  public zoom: number
  public iconurl: string
  public mapCustomStyles: any
  public estimatedTime: any
  public estimatedDistance: any
  public waypoints: Array<string> = []
  public arrPlaces: Array<object> = []

  arrPlacesName:Array<string> = []
  arrPlacesIds:Array<string> = []
  place:Place


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
    public places:PlacesService
  ){}

  ngOnInit() {
    this.zoom = 4
    this.latitude = 39.8282
    this.longitude = -98.5795

    this.destinationInput = new FormControl()
    this.destinationOutput = new FormControl()
    this.setCurrentPosition()

    this.mapsAPILoader.load().then(() => {
      let autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
        types: ["establishment"]
      })
      this.setupPlaceChangedListener(autocompleteInput, 'ORG')
    })
  }

  private setupPlaceChangedListener(autocomplete: any, mode: any) {
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {

        let place: google.maps.places.PlaceResult = autocomplete.getPlace()
        this.placeLatitude = place.geometry.location.lat()
        this.placeLongitude = place.geometry.location.lng()
        this.placePlaceId = place.id
        this.placeName = place.name
        this.placePhotos = place.photos
        this.mapPlaceId = place.place_id
        this.createPlace()

        this.arrPlaces.push({ placeId: place.place_id, placeName: place.name, lng: place.geometry.location.lng(), lat: place.geometry.location.lat() })
        if (place.geometry === undefined) return

        if (mode === 'ORG') {
          this.vc.origin = { longitude: this.arrPlaces[0]['lng'], latitude: this.arrPlaces[0]['lat'] }
          this.vc.originPlaceId = this.arrPlaces[0]['placeId']

          if (this.arrPlaces.length > 2)
            this.vc.waypoints.push({ location: this.arrPlaces[this.arrPlaces.length - 2]['placeName'] })

          this.vc.destination = { longitude: this.arrPlaces[this.arrPlaces.length - 1]['lng'], latitude: this.arrPlaces[this.arrPlaces.length - 1]['lat'] } // its a example aleatory position
          this.vc.destinationPlaceId = this.arrPlaces[this.arrPlaces.length - 1]['placeId']
        }

        if (this.vc.directionsDisplay === undefined)
          this.mapsAPILoader.load().then(() => {this.vc.directionsDisplay = new google.maps.DirectionsRenderer})

        this.vc.updateDirections()
        this.zoom = 12
      })
    })
  }

  getDistanceAndDuration() {
    this.estimatedTime = this.vc.estimatedTime
    this.estimatedDistance = this.vc.estimatedDistance
  }

  private setPickUpLocation(place: any) {
    if (place.geometry === undefined || place.geometry === null) {
      return
    }
    this.latitude = place.geometry.location.lat()
    this.longitude = place.geometry.location.lng()
    this.zoom = 12
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
        this.zoom = 12
      })
    }
  }


  createPlace(){
    this.places.createPlaces(this.placeName, this.places.routeId, this.placePlaceId, this.placeLatitude, this.placeLongitude, this.placePhotos, this.mapPlaceId).subscribe( place => {
      this.arrPlacesName.push(place.name)
      this.arrPlacesIds.push(place._id)
    })
  }

  deletePlace(place){


    let positionId = this.arrPlacesName.indexOf(place)
    this.places.deletePlace(this.arrPlacesIds[positionId], this.places.barsroute._id).subscribe()
    this.arrPlacesName.splice(positionId,1)
    this.arrPlacesIds.splice(positionId,1)
    this.arrPlaces.splice(positionId,1)

    this.vc.waypoints=[]
    this.vc.origin = { longitude: this.arrPlaces[0]['lng'], latitude: this.arrPlaces[0]['lat'] }
    this.vc.originPlaceId = this.arrPlaces[0]['placeId']

    for(let i=0; i<this.arrPlaces.length-2; i++){
      this.vc.waypoints.push({ location: this.arrPlaces[i+1]['placeName'] })
    }
    this.vc.destination = { longitude: this.arrPlaces[this.arrPlaces.length - 1]['lng'], latitude: this.arrPlaces[this.arrPlaces.length - 1]['lat'] }
    this.vc.destinationPlaceId = this.arrPlaces[this.arrPlaces.length - 1]['placeId']

    this.vc.updateDirections()

  }
}
