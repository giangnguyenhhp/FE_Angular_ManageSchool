import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Teacher} from "../../../teacher/Models/teacher";

@Component({
  selector: 'app-teacher-of-course',
  templateUrl: './teacher-of-course.component.html',
  styleUrls: ['./teacher-of-course.component.scss']
})
export class TeacherOfCourseComponent implements OnInit {

  teachers : Teacher[]=[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
    this.teachers = this.data.teacher
    console.log(this.teachers)
  }

}
