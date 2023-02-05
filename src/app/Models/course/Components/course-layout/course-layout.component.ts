import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Course} from "../../Models/Course";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {CourseService} from "../../Services/course.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateCourseComponent} from "../create-course/create-course.component";
import {UpdateCourseComponent} from "../update-course/update-course.component";
import {TeacherOfCourseComponent} from "../teacher-of-course/teacher-of-course.component";

@Component({
  selector: 'app-course-layout',
  templateUrl: './course-layout.component.html',
  styleUrls: ['./course-layout.component.scss']
})
export class CourseLayoutComponent implements OnInit {
  panelOpenState = false;
  dataSource = new MatTableDataSource<Course>();
  displayedColumns : string[] = ['Id','Name','Description','Credit','Teachers','Update','Delete'];
  @ViewChild(MatPaginator) paginator!:MatPaginator
  @ViewChild(MatSort) sort!:MatSort

  constructor(
    private courseService: CourseService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllCourse()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.disableClear = true;
  }

  getAllCourse(){
    this.courseService.getAllCourse().subscribe(res=>{
      if(res){
        this.dataSource.data = res
      }
    })
  }

  openCreateCourseDialog() {
    this.dialog.open(CreateCourseComponent).afterClosed().subscribe(res=>{
      if(res){
        this.getAllCourse()
      }
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
  }

  openUpdateCourseDialog(course:Course) {
    this.dialog.open(UpdateCourseComponent,{data:course}).afterClosed().subscribe(res=>{
      if(res){
        this.getAllCourse()
      }
    })
  }

  deleteCourse(id:number) {
    let result = confirm("Bạn có chắc chắn xóa không ?")
    if(result){
      this.courseService.deleteCourse(id).subscribe(res=>{
          if(res){
            this.getAllCourse()
          }
      })
    }
  }

  openViewStudent(course:Course) {
    this.dialog.open(TeacherOfCourseComponent,{data:course})
  }
}
