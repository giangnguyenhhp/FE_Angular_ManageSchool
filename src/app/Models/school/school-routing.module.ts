import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchoolLayoutComponent} from "./Components/school-layout/school-layout.component";

const routes: Routes = [
  {path:'',component:SchoolLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
