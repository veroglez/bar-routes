import { Injectable } from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Http} from '@angular/http'
import 'rxjs'
import {environment} from '../../environments/environment'
import {AuthService} from './auth.service'


const BASEURL:string = environment.BASEURL + "/api"

@Injectable()
export class PlacesService {
  response
  userId
  routeId
  barsrouteId
  barsroute
  private options = {withCredentials:true}

  private handleError(e) {
    console.log("PLACE ERROR")
    return Observable.throw(e.json().message)
  }

  constructor( private http: Http, private auth:AuthService ) { }


  createPlaces(name, routeId, placeId, latitude, longitude) {
    return this.http.post(`${BASEURL}/profile/places/new`, {name, routeId, placeId, latitude, longitude}, this.options)
      .map(res => res.json())
      .map(place => {
        return place
      })
      .catch(this.handleError)
  }

  createRoutes(userId, routeName, routeGenre, priceRange,schedule, city) {
    return this.http.post(`${BASEURL}/profile/${userId}/routes/new`, {userId, routeName, routeGenre, priceRange, schedule, city}, this.options)
      .map(res => res.json())
      .map(route => {
        this.routeId = route.routeId
        this.barsrouteId = route._id
        this.barsroute = route
        return route
      })
      .catch(this.handleError)
  }


  getList() {
    return this.http.get(`${BASEURL}/routes`, this.options)
      .map(res => res.json())
  }

  deletePlace(placeId, barsrouteId) {
    return this.http.put(`${BASEURL}/profile/delete/place`, {placeId, barsrouteId}, this.options)
      .map(res => res.json())
      .catch(this.handleError)
  }

}
