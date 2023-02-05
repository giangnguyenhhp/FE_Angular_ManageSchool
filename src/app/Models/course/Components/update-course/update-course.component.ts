import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CourseService} from "../../Services/course.service";
import {UpdateCourseRequest} from "../../Models/UpdateCourseRequest";
import {Teacher} from "../../../teacher/Models/teacher";
import { Student } from 'src/app/Models/student/Models/Student';
import {TeacherService} from "../../../teacher/Services/teacher.service";
import {StudentService} from "../../../student/Services/student.service";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  updateCourse= new FormGroup({
    id : new FormControl(),
    name : new FormControl(),
    description : new FormControl(),
    credit:new FormControl(),
    studentIds:new FormControl(),
    teacherIds:new FormControl()
  });
  teachers: Teacher[] = [];
  student: Student[] = [];
  studentOfCourse : number[] = [];
  teacherOfCourse : number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef : MatDialogRef<UpdateCourseComponent>,
    private courseService : CourseService,
    private teacherService : TeacherService,
    private studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.ngInitData()
    this.studentService.getStudents().subscribe(res=>{
      if(res){
        this.student = res
      }
    })
    this.teacherService.getAllTeachers().subscribe(res=>{
      if(res){
        this.teachers = res
      }
    })

  }

  ngInitData(){
    this.updateCourse.patchValue(this.data)
    for (const teacherKey of this.data.teacher) {
      this.teacherOfCourse.push(teacherKey.id)
    }
    this.updateCourse.controls.teacherIds.setValue(this.teacherOfCourse)
    for (const student of this.data.students) {
      this.studentOfCourse.push(student.id)
    }
    this.updateCourse.controls.studentIds.setValue(this.studentOfCourse)
  }

  submit() {
    const request = <UpdateCourseRequest>this.updateCourse.value
    this.courseService.updateCourse(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
