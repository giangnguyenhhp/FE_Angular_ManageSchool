import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseLayoutComponent } from './Components/course-layout/course-layout.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateCourseComponent } from './Components/create-course/create-course.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { UpdateCourseComponent } from './Components/update-course/update-course.component';
import { TeacherOfCourseComponent } from './Components/teacher-of-course/teacher-of-course.component';
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [
    CourseLayoutComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    TeacherOfCourseComponent
  ],
    imports: [
        CommonModule,
        CourseRoutingModule,
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
        MatExpansionModule
    ]
})
export class CourseModule { }
