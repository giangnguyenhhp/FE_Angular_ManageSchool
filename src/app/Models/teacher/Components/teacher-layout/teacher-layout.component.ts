import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Teacher} from "../../Models/teacher";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { TeacherService } from '../../Services/teacher.service';
import {MatDialog} from "@angular/material/dialog";
import {UpdateTeacherComponent} from "../update-teacher/update-teacher.component";
import {CreateTeacherComponent} from "../create-teacher/create-teacher.component";

@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.scss']
})
export class TeacherLayoutComponent implements OnInit {
  dataSource = new MatTableDataSource<Teacher>();
  displayedColumns: string[] = ['Id', 'Name', 'DateOfBirth', 'Gender', 'Department', 'Course', 'Update', 'Delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private teacherService: TeacherService,
    private dialog : MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getAllTeachers()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.sort.disableClear = true;
    this.dataSource.sort = this.sort;
  }

  openCreateTeacherDialog() {
    this.dialog.open(CreateTeacherComponent).afterClosed().subscribe(_=>{
      this.getAllTeachers()
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

  getAllTeachers(){
    this.teacherService.getAllTeachers().subscribe(res=>{
      if (res){
        this.dataSource.data = res
      }
      console.log(this.dataSource.data)
    })
  }

  openUpdateTeacherDialog(teacher:Teacher) {
    this.dialog.open(UpdateTeacherComponent,{data:teacher}).afterClosed().subscribe(_=>{
      this.getAllTeachers()
    })
    console.log(teacher)
  }

  deleteTeacher(id:number) {
    let result = confirm("Bạn có chắc chắn xóa không ?")
    if(result){
      this.teacherService.deleteTeacher(id).subscribe(() => {
      })
    }
  }
}
