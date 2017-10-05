import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';


const BASEURL = environment.BASEURL + "/api";

@Injectable()
export class PlacesService {
  private options = {withCredentials:true};

  private handleError(e) {
    console.log("PLACE ERROR");
    return Observable.throw(e.json().message);
  }

  constructor( private http: Http ) { }


  create(id, latitude, longitude) {
    console.log('entro al servicio')
    return this.http.post(`${BASEURL}/routes/new`, {id, latitude, longitude}, this.options)
      .map(res => res.json())
      .map(response_object => {
        console.log('response:', response_object.user)
        // this.emitUserLoginEvent(response_object.user)
      })
      .catch(this.handleError);

  }
}
