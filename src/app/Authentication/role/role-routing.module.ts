import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoleLayoutComponent} from "./Components/role-layout/role-layout.component";

const routes: Routes = [
  {path:'',component:RoleLayoutComponent},
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
