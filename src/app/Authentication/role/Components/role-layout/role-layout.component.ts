import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Role} from "../../Models/Role";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {RoleService} from "../../Services/role.service";
import {MatDialog} from "@angular/material/dialog";
import {MapPermissionsDialogComponent} from "../map-permissions-dialog/map-permissions-dialog.component";
import {CreateRoleComponent} from "../create-role/create-role.component";
import {UpdateRoleComponent} from "../update-role/update-role.component";

@Component({
  selector: 'app-role-layout',
  templateUrl: './role-layout.component.html',
  styleUrls: ['./role-layout.component.scss']
})
export class RoleLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<Role>();
  displayedColumns: string[] = ['Id', 'Name', 'NormalizedName', 'ConcurrencyStamp', 'Update','MapPermissions', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private roleService: RoleService,
    private dialog : MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllRoles()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  getAllRoles(){
    this.roleService.getAllRoles().subscribe(res=>{
      if(res){
        this.dataSource.data = res;
      }
    })

  }

  openCreateRoleDialog() {
    this.dialog.open(CreateRoleComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllRoles()
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

  openUpdateRoleDialog(role:Role) {
    this.dialog.open(UpdateRoleComponent,{data:role}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllRoles()
      }
    })
  }

  deleteRole(id:any) {
  let result = confirm("Bạn có chắc chắn xóa không ?")
    if (result){
      this.roleService.deleteRole(id).subscribe(res=>{
        if(res){
          this.getAllRoles()
        }
      })
    }
  }

  openMapPermissionDialog(role:Role) {
    this.dialog.open(MapPermissionsDialogComponent,{data:role}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllRoles()
      }
    })
  }
}
