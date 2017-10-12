import { Routes } from '@angular/router';

import {UserprofileComponent} from './userprofile/userprofile.component';
import {EditprofileComponent} from './editprofile/editprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {IsLoggedInService} from './services/isLoggedIn.canactivate.service';
import {MapComponent} from './map/map.component';
import {HomeComponent} from './home/home.component';
import {NewRouteComponent} from './new-route/new-route.component';
import {ShowRoutesComponent} from './show-routes/show-routes.component';
import {ShowSimpleRouteComponent} from './show-simple-route/show-simple-route.component';

export const routes: Routes = [
    { path: '',  component: HomeComponent },
    { path: 'profile/:id/routes/new',  component: NewRouteComponent },
    { path: 'profile/:id',  component: UserprofileComponent, },
    { path: 'profile/:id/edit',  component: EditprofileComponent,  },
    { path: 'login',  component: LoginformComponent, canActivate: [ IsLoggedInService ] },
    { path: 'signup',  component: SignupformComponent,  canActivate: [ IsLoggedInService ] },
    { path: 'routes', component: ShowRoutesComponent },
    { path: 'routes/:id',  component: ShowSimpleRouteComponent},
    { path: '**', redirectTo: '' },
];
