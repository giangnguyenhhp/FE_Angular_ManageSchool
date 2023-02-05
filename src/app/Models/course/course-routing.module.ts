import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseLayoutComponent} from "./Components/course-layout/course-layout.component";

const routes: Routes = [
  {path:'',component:CourseLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
