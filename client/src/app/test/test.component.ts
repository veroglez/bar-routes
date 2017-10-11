import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef, Directive, Input  } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { DirectionsMapDirective } from './google-map.directive';

declare var google:any;
declare var jQuery:any;

@Component({
  selector: 'app-test',
   styles: [`
    .sebm-google-map-container {
       height: 300px;
     },

  `],
  templateUrl: './test.component.html',
 providers : [ GoogleMapsAPIWrapper ]
})

export class TestComponent implements OnInit {
    public latitude: number;
    public longitude: number;
    public destinationInput: FormControl;
    public destinationOutput: FormControl;
    public zoom: number;
    public iconurl: string;
    public mapCustomStyles : any;
    public estimatedTime: any;
    public estimatedDistance: any;
    public waypoints:Array<string> = [] ;
    arrPlaces:Array<object> = [];

    @ViewChild("pickupInput")
    public pickupInputElementRef: ElementRef;

     @ViewChild("pickupOutput")
    public pickupOutputElementRef: ElementRef;

     @ViewChild("scrollMe")
    private scrollContainer: ElementRef;

    @ViewChild(DirectionsMapDirective) vc: DirectionsMapDirective;

    public origin :any ; // its a example aleatory position
    public destination : any; // its a example aleatory position
    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private gmapsApi: GoogleMapsAPIWrapper,
      private _elementRef : ElementRef
    ) {
    }

    ngOnInit() {
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;
      // this.iconurl = '../image/map-icon.png';

     // this.mapCustomStyles = this.getMapCusotmStyles();
      //create search FormControl
      this.destinationInput = new FormControl();
      this.destinationOutput = new FormControl();
      //set current position
      this.setCurrentPosition();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
          let autocompleteInput = new google.maps.places.Autocomplete(this.pickupInputElementRef.nativeElement, {
            types: ["address"]
          });

          // let autocompleteOutput = new google.maps.places.Autocomplete(this.pickupOutputElementRef.nativeElement, {
          //   types: ["address"]
          // });

          this.setupPlaceChangedListener(autocompleteInput, 'ORG');
          // this.setupPlaceChangedListener(autocompleteOutput, 'DES');
      });
    }

    private setupPlaceChangedListener(autocomplete: any, mode: any ) {
      autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {

              let place: google.maps.places.PlaceResult = autocomplete.getPlace();
              this.arrPlaces.push({placeId:place.place_id, placeName: place.name, lng: place.geometry.location.lng(), lat: place.geometry.location.lat()})
              console.log(this.arrPlaces[0]['lng'], this.arrPlaces[0]['lat'])

              if (place.geometry === undefined) {
                return;
              }
              if (mode === 'ORG') {
                  this.vc.origin = { longitude: this.arrPlaces[0]['lng'], latitude: this.arrPlaces[0]['lat'] };
                  this.vc.originPlaceId = this.arrPlaces[0]['placeId'];

                  if(this.arrPlaces.length > 2){
                    this.vc.waypoints.push({location:this.arrPlaces[this.arrPlaces.length-2]['placeName']})
                  }

                  console.log(this.waypoints)

                  this.vc.destination = { longitude: this.arrPlaces[this.arrPlaces.length-1]['lng'], latitude: this.arrPlaces[this.arrPlaces.length-1]['lat'] }; // its a example aleatory position
                  this.vc.destinationPlaceId = this.arrPlaces[this.arrPlaces.length-1]['placeId'];


              }

              if(this.vc.directionsDisplay === undefined){ this.mapsAPILoader.load().then(() => {
                this.vc.directionsDisplay = new google.maps.DirectionsRenderer;
              });
            }

              //Update the directions
              this.vc.updateDirections();
              this.zoom = 12;

            });

         });

    }

    getDistanceAndDuration(){
      this.estimatedTime = this.vc.estimatedTime;
      this.estimatedDistance = this.vc.estimatedDistance;
    }

    scrollToBottom(): void {
      jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 3000);
    }
    private setPickUpLocation( place:any ) {
      //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
    }

    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }

    private getMapCusotmStyles() {
      // Write your Google Map Custom Style Code Here.
    }

}
