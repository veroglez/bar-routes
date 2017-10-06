import { Injectable } from '@angular/core'
import {Observable} from 'rxjs/Observable'
import {Http} from '@angular/http'
import 'rxjs'
import {environment} from '../../environments/environment'
import {AuthService} from './auth.service'


const BASEURL = environment.BASEURL + "/api"

@Injectable()
export class PlacesService {
  userId
  private options = {withCredentials:true}

  private handleError(e) {
    console.log("PLACE ERROR")
    return Observable.throw(e.json().message)
  }

  constructor( private http: Http, private auth:AuthService ) { }


  create(id, latitude, longitude) {
    console.log('entro al servicio')
    return this.http.post(`${BASEURL}/routes/new`, {id, latitude, longitude}, this.options)
      .map(res => res.json())
      .map(response_object => {
        console.log('response:', response_object.user)
        // this.emitUserLoginEvent(response_object.user)
      })
      .catch(this.handleError)

  }


  createRoutes(userId, routeName) {
    // this.userId = this.auth.getUser()
    console.log('entro al servicio')
    console.log(userId, routeName)
    return this.http.post(`${BASEURL}/profile/${userId}/routes/new`, {userId, routeName}, this.options)
      .map(res => res.json())
      // .map(response_object => {
      //   console.log('response:', response_object.user)
      //   // this.emitUserLoginEvent(response_object.user)
      // })
      .catch(this.handleError)

  }
}
