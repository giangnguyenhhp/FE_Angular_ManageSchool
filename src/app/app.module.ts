import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Authentication/Core/Components/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MultilevelMenuService, NgMaterialMultilevelMenuModule} from "ng-material-multilevel-menu";
import {MatDialogModule} from "@angular/material/dialog";
import {LoginInterceptor} from "./Authentication/Core/Interceptor/login.interceptor";
import {JwtModule} from "@auth0/angular-jwt";
import {NgxPermissionsModule} from "ngx-permissions";
import { UnauthorizedComponent } from './Authentication/Core/Components/unauthorized/unauthorized.component';

//function is used to get jwt token from local storage
export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    NgMaterialMultilevelMenuModule,
    MatDialogModule,
    NgxPermissionsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : LoginInterceptor,
      multi: true
    },
    MultilevelMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
