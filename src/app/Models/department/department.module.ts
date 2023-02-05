import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentLayoutComponent } from './Components/department-layout/department-layout.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateDepartmentComponent } from './Components/create-department/create-department.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { UpdateDepartmentComponent } from './Components/update-department/update-department.component';


@NgModule({
  declarations: [
    DepartmentLayoutComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class DepartmentModule { }
