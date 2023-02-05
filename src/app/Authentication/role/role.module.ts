import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleLayoutComponent } from './Components/role-layout/role-layout.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MapPermissionsDialogComponent } from './Components/map-permissions-dialog/map-permissions-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CreateRoleComponent } from './Components/create-role/create-role.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateRoleComponent } from './Components/update-role/update-role.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    RoleLayoutComponent,
    MapPermissionsDialogComponent,
    CreateRoleComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class RoleModule { }
