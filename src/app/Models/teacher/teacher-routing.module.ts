import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherLayoutComponent} from "./Components/teacher-layout/teacher-layout.component";

const routes: Routes = [
  {path:'',component:TeacherLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
