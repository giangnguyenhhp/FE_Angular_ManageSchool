import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from '../../Services/login.service';
import {LoginRequest} from "../../Models/LoginRequest";
import {Router} from "@angular/router";
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService} from "ngx-permissions";
import {User} from "../../../user/Models/User";

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {
  user: User | undefined
  showError: boolean = false;
  errorMessage: string = '';
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private ngxService: NgxPermissionsService
  ) {
  }

  ngOnInit(): void {
  }

  validateControl(controlName: string, errorName: string) {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
      && this.loginForm.get(controlName)?.hasError(errorName)

  }

  loginUser() {
    const request = <LoginRequest>this.loginForm.value
    this.loginService.login(request).subscribe(res => {

      localStorage.setItem('token', res.token)
      localStorage.setItem('permissions', res.claims.join(','))
      localStorage.setItem('userName', res.user.userName)

      this.loginService.user = res.user
      console.log(this.loginService.user)
      this.ngxService.loadPermissions(res.claims)

      this.router.navigate(["/"]).then(() => {
      })
    })
  }

  isLoggedIn() {
    let authToken = localStorage.getItem('token');
    return !!(authToken && !this.jwtHelper.isTokenExpired(authToken));
  }
}
