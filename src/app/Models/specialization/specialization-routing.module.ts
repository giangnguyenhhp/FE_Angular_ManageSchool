import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpecializationLayoutComponent} from "./Components/specialization-layout/specialization-layout.component";

const routes: Routes = [
  {path:'',component:SpecializationLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecializationRoutingModule { }
