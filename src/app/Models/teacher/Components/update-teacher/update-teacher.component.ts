import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Course} from 'src/app/Models/course/Models/Course';
import {UpdateTeacherRequest} from "../../Models/UpdateTeacherRequest";
import {TeacherService} from "../../Services/teacher.service";
import {Department} from "../../../department/Models/Department";
import {DepartmentService} from "../../../department/Service/department.service";
import {CourseService} from "../../../course/Services/course.service";

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss']
})
export class UpdateTeacherComponent implements OnInit {
  updateTeacherForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    dateOfBirth: new FormControl(),
    departmentId: new FormControl(),
    courseIds: new FormControl(),
  });
  departments: Department[] = [];
  courses: Course[] = [];
  courseIds: number[] = [];

  constructor(
    private dialogRef: MatDialogRef<UpdateTeacherComponent>,
    private teacherService: TeacherService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departmentService: DepartmentService,
    private courseService: CourseService
  ) {
  }

  ngOnInit(): void {
    this.ngInitData()
    this.departmentService.getAllDepartment().subscribe(res => {
      if (res) {
        this.departments = res
      }
    })
    this.courseService.getAllCourse().subscribe(res => {
      if (res) {
        this.courses = res
      }
    })
  }

  ngInitData() {
    this.updateTeacherForm.patchValue(this.data)
    this.updateTeacherForm.controls.departmentId.setValue(this.data.department?.id)
    for (const courseElement of this.data.course) {
      this.courseIds.push(courseElement.id)
    }
    this.updateTeacherForm.controls.courseIds.setValue(this.courseIds)
  }

  submit() {
    const request = <UpdateTeacherRequest>this.updateTeacherForm.value
    this.teacherService.updateTeacher(request).subscribe(res => {
      if (res) {
        this.dialogRef.close(true)
      }
    })
  }
}
