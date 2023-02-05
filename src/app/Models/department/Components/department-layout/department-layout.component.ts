import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Department} from "../../Models/Department";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { DepartmentService } from '../../Service/department.service';
import {MatDialog} from "@angular/material/dialog";
import {CreateDepartmentComponent} from "../create-department/create-department.component";
import {UpdateDepartmentComponent} from "../update-department/update-department.component";

@Component({
  selector: 'app-department-layout',
  templateUrl: './department-layout.component.html',
  styleUrls: ['./department-layout.component.scss']
})
export class DepartmentLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<Department>();
  displayedColumns: string[] = ['Id', 'Name', 'Description','School', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private departmentService: DepartmentService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllDepartment()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  getAllDepartment(){
    this.departmentService.getAllDepartment().subscribe(res=>{
      if(res){
        this.dataSource.data = res
      }
      console.log(this.dataSource.data)
    })
  }

  openCreateDepartmentDialog() {
    this.dialog.open(CreateDepartmentComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllDepartment()
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

  openUpdateDepartmentDialog(department : Department) {
    this.dialog.open(UpdateDepartmentComponent,{data: department}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllDepartment()
      }
    })
  }

  deleteDepartment(id : number) {
    let result = confirm("Bạn có chắc chắn xóa không ?")
    if(result){
      this.departmentService.deleteDepartment(id).subscribe(res=>{
        if(res){
          this.getAllDepartment()
        }
      })
    }
  }
}
