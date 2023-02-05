import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './Components/user-layout/user-layout.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateUserComponent } from './Components/create-user/create-user.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { RegisterNewUserComponent } from './Components/register-new-user/register-new-user.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ShowHidePasswordModule} from "ngx-show-hide-password";


@NgModule({
  declarations: [
    UserLayoutComponent,
    CreateUserComponent,
    UpdateUserComponent,
    RegisterNewUserComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule,
        MatToolbarModule,
        ShowHidePasswordModule
    ]
})
export class UserModule { }
