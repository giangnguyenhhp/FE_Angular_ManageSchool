import {Component} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {NgxPermissionsService} from "ngx-permissions";
import { LoginService } from './Authentication/login/Services/login.service';
import {User} from "./Authentication/user/Models/User";

const method = require('/src/assets/js/index.js')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ManageSchool';
  user!:User
  constructor(
    private jwtHelper: JwtHelperService,
    private ngxService: NgxPermissionsService
  ) {
  }

  ngOnInit() {
    this.isAuthenticated()
  }

  isAuthenticated() {
    let token = localStorage.getItem('token')
    if (this.jwtHelper.isTokenExpired(token)) {
      localStorage.clear()
    }
    let permissions = localStorage.getItem('permissions')?.split(',')
    if (permissions) {
      this.ngxService.loadPermissions(permissions)
    }
  }
}
