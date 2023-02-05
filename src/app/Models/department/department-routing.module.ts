import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentLayoutComponent} from "./Components/department-layout/department-layout.component";

const routes: Routes = [
  {path:'',component:DepartmentLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
