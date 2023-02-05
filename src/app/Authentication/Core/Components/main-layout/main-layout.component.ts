import {Component, OnInit} from '@angular/core';
import {MultilevelMenuService, MultilevelNodes} from "ng-material-multilevel-menu";
import {Router} from "@angular/router";
import {LoginService} from "../../../login/Services/login.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  menuWithId!: MultilevelNodes[]
  userName : string | null  = localStorage.getItem('userName')

  constructor(
    private multilevelMenuService: MultilevelMenuService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  appItems = [
    {
      label: 'Nhân sự',
      icon: 'people',
      items: [
        {
          label: 'Học sinh',
          link: 'student/student-layout',
          icon: ''
        },
        {
          label: 'Giảng viên',
          link: 'teacher/teacher-layout',
          icon: '',
        }
      ]
    },
    {
      label: 'Hành chính',
      icon: 'grid_view',
      items: [
        {
          label: 'Trường',
          link: 'school/school-layout',
          icon: 'school'
        },
        {
          label: 'Ban nghành',
          link: 'department/department-layout',
          icon: 'work'
        },
        {
          label: 'Khóa học',
          link: 'course/course-layout',
          icon: 'collections_bookmark'
        },
        {
          label: 'Chuyên nghành',
          link: 'specialization/specialization-layout',
          icon: 'star',
        }
      ]
    },
    {
      label: 'Hệ thống',
      link: '',
      icon: 'menu',
      items: [
        {
          label: 'Nhóm Quyền',
          link: 'role/role-layout',
          icon: 'warning',
          hidden: !this.hasPermission('Admin.Access')
        },
        {
          label: 'Tài khoản người dùng',
          link: 'user/user-layout',
          icon: 'verified_user',
          hidden: !this.hasPermission('Admin.Access')
        },
      ]
    }
  ];

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: false,
    rtlLayout: false
  };

  selectedItem($event: any) {
    console.log($event)
  }

  menuIsReady(menus: MultilevelNodes[]) {
    this.menuWithId = menus
  }

  setExpandCollapseStatus(type: any) {
    this.multilevelMenuService.setMenuExapandCollpaseStatus(type);
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(["/login"]).then(r => {
    })
  }

  hasPermission(permission: string) {
    const listPermissions = localStorage.getItem('permissions')?.split(',')
    return listPermissions?.includes(permission)
  }

}
