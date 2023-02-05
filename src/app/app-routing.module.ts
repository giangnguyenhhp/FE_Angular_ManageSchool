import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./Authentication/Core/Components/main-layout/main-layout.component";
import {LoginGuard} from "./Authentication/Core/Guard/login.guard";
import {NgxPermissionsGuard} from "ngx-permissions";
import {UnauthorizedComponent} from "./Authentication/Core/Components/unauthorized/unauthorized.component";
import {RegisterNewUserComponent} from "./Authentication/user/Components/register-new-user/register-new-user.component";

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    canActivate:[LoginGuard],
    children:[
      {
        path:'student',
        canActivate:[LoginGuard],
        loadChildren:() => import("./Models/student/student.module").then(m=>m.StudentModule)

      },
      {
        path:'teacher',
        canActivate:[LoginGuard],
        loadChildren:()=>import("./Models/teacher/teacher.module").then(m=>m.TeacherModule)
      },
      {
        path:'school',
        canActivate:[LoginGuard],
        loadChildren:()=>import('./Models/school/school.module').then(m=>m.SchoolModule)
      },
      {
        path:'department',
        canActivate:[LoginGuard],
        loadChildren:()=>import('./Models/department/department.module').then(m=>m.DepartmentModule)
      },
      {
        path:'course',
        canActivate:[LoginGuard],
        loadChildren:()=>import('./Models/course/course.module').then(m=>m.CourseModule)
      },
      {
        path:'specialization',
        canActivate:[LoginGuard],
        loadChildren:()=>import('./Models/specialization/specialization.module').then(m=>m.SpecializationModule)
      },
      {
        path:'role',
        canActivate:[LoginGuard,NgxPermissionsGuard],
        data : {
          permissions : {
            only : 'Admin.Access',
            redirectTo : '/unauthorized'
          }
        },
        loadChildren:()=>import('./Authentication/role/role.module').then(m=>m.RoleModule)
      },
      {
        path:'user',
        canActivate:[LoginGuard,NgxPermissionsGuard],
        data : {
          permissions: {
            only: 'Admin.Access',
            redirectTo: '/unauthorized',
          }
        },
        loadChildren:()=>import('./Authentication/user/user.module').then(m=>m.UserModule)
      }
    ]
  },
  {
    path:'login',
    loadChildren:() => import("./Authentication/login/login.module").then(m=>m.LoginModule)
  },
  {
    path:'register',
    component:RegisterNewUserComponent
  },
  {
    path:'unauthorized',
    component:UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
