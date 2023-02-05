import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolLayoutComponent } from './Components/school-layout/school-layout.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateSchoolComponent } from './Components/create-school/create-school.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateSchoolComponent } from './Components/update-school/update-school.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    SchoolLayoutComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent
  ],
    imports: [
        CommonModule,
        SchoolRoutingModule,
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
export class SchoolModule { }
