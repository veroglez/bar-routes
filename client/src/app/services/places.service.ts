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
  simpleRoute
  allRoutes
  private options = {withCredentials:true}

  private handleError(e) {
    console.log("PLACE ERROR")
    return Observable.throw(e.json().message)
  }

  constructor( private http: Http, private auth:AuthService ) { }


  createPlaces(name, routeId, placeId, latitude, longitude, photos, mapPlaceId) {
    return this.http.post(`${BASEURL}/profile/places/new`, {name, routeId, placeId, latitude, longitude, photos, mapPlaceId}, this.options)
      .map(res => res.json())
      .map(place => {
        return place
      })
      .catch(this.handleError)
  }

  createRoutes(userId, routeName, routeGenre, priceRange,schedule, city, description) {
    return this.http.post(`${BASEURL}/profile/${userId}/routes/new`, {userId, routeName, routeGenre, priceRange, schedule, city, description}, this.options)
      .map(res => res.json())
      .map(route => {
        this.routeId = route.routeId
        this.barsrouteId = route._id
        this.barsroute = route
        return route
      })
      .catch(this.handleError)
  }

  deletePlace(placeId, barsrouteId) {
    return this.http.put(`${BASEURL}/profile/delete/place`, {placeId, barsrouteId}, this.options)
      .map(res => res.json())
      .catch(this.handleError)
  }

  deleteRoute(barsrouteId) {
    return this.http.put(`${BASEURL}/profile/delete/route`, {barsrouteId}, this.options)
      .map(res => res.json())
      .catch(this.handleError)
  }

  searchRoutes(city, schedule, routegenre, pricerange) {
    return this.http.post(`${BASEURL}/`, {city, schedule, routegenre, pricerange}, this.options)
      .map(res => {
        return this.allRoutes = res.json()
      })
      .catch(this.handleError)
  }

  getRoute(id) {
    return this.http.get(`${BASEURL}/routes/${id}`, this.options)
    .map(res => res.json())
    .catch(this.handleError)
  }

}
