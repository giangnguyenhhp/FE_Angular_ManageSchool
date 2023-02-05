import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentLayoutComponent} from "./Components/student-layout/student-layout.component";

const routes: Routes = [
  {path: '', component:StudentLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
