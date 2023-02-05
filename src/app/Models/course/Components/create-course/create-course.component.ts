import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {CourseService} from "../../Services/course.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CreateCourseRequest} from "../../Models/CreateCourseRequest";
import {Teacher} from "../../../teacher/Models/teacher";
import {Student} from "../../../student/Models/Student";
import {StudentService} from "../../../student/Services/student.service";
import {TeacherService} from "../../../teacher/Services/teacher.service";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  createNewCourse = new FormGroup({
    name : new FormControl(),
    description : new FormControl(),
    credit:new FormControl(),
    studentIds:new FormControl(),
    teacherIds:new FormControl()
  });
  teachers: Teacher[]=[];
  students: Student[] = [];

  constructor(
    private dialogRef : MatDialogRef<CreateCourseComponent>,
    private courseService : CourseService,
    private studentService : StudentService,
    private teacherService : TeacherService
  ) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(res=>{
      if(res){
        this.teachers = res
      }
    })
    this.studentService.getStudents().subscribe(res=>{
      if(res){
        this.students = res
      }
    })
  }

  submit() {
    const request = <CreateCourseRequest>this.createNewCourse.value
    this.courseService.createCourse(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
