
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public userService: UserService,
    public storeService:StorageService,
    public authService:AuthService) {}

    state(){
        if (this.authService.isAuthenticated()) {
          this.authService.logOut();
        }
   }
}

