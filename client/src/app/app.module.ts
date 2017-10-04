import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { SignupformComponent } from './signupform/signupform.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {routes} from './routes';
import { LoginformComponent } from './loginform/loginform.component';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { VerotronikComponent } from './shared/verotronik/verotronik.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    LoginformComponent,
    UserprofileComponent,
    EditprofileComponent,
    VerotronikComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
