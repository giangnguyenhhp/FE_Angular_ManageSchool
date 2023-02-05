import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherLayoutComponent } from './Components/teacher-layout/teacher-layout.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { UpdateTeacherComponent } from './Components/update-teacher/update-teacher.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { CreateTeacherComponent } from './Components/create-teacher/create-teacher.component';


@NgModule({
  declarations: [
    TeacherLayoutComponent,
    UpdateTeacherComponent,
    CreateTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class TeacherModule { }
