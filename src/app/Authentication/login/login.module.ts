import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './Components/login-layout/login-layout.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        MatInputModule,
        ShowHidePasswordModule,
        MatCardModule
    ]
})
export class LoginModule { }
