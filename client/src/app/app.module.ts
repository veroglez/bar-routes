import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { SignupformComponent } from './signupform/signupform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { LoginformComponent } from './loginform/loginform.component';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { PlacesService } from './services/places.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { VerotronikComponent } from './shared/verotronik/verotronik.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { NewRouteComponent } from './new-route/new-route.component';
import { NewRouteDataComponent } from './new-route-data/new-route-data.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    LoginformComponent,
    UserprofileComponent,
    EditprofileComponent,
    VerotronikComponent,
    MapComponent,
    NewRouteComponent,
    NewRouteDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    // ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6kQpdkVk-xQXObw1jvODNoEgIOLDfVBc',
      libraries: ["places"]
    }),
    ReactiveFormsModule
  ],
  providers: [AuthService, IsLoggedInService, PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
