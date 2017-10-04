import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserprofileComponent } from './userprofile/userprofile.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:object;
  title = 'app';
  constructor(public auth:AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  };

  ngOnInit() {
  }

}
