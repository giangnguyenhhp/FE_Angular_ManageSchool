import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecializationRoutingModule } from './specialization-routing.module';
import { SpecializationLayoutComponent } from './Components/specialization-layout/specialization-layout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateSpecializationComponent } from './Components/create-specialization/create-specialization.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { UpdateSpecializationComponent } from './Components/update-specialization/update-specialization.component';


@NgModule({
  declarations: [
    SpecializationLayoutComponent,
    CreateSpecializationComponent,
    UpdateSpecializationComponent
  ],
  imports: [
    CommonModule,
    SpecializationRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class SpecializationModule { }
