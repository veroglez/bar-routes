import { Routes } from '@angular/router';

// import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: 'profile/:id',  component: UserprofileComponent,  },
    { path: 'login',  component: LoginformComponent, canActivate: [ IsLoggedInService ] },
    { path: 'signup',  component: SignupformComponent,  canActivate: [ IsLoggedInService ] },
    { path: '**', redirectTo: '' }
];
