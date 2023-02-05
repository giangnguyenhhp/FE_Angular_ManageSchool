import {Component, Inject, OnInit} from '@angular/core';
import {StudentService} from "../../Services/student.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {UpdateStudentRequest} from "../../Models/UpdateStudentRequest";
import {Specialization} from "../../../specialization/Models/Specialization";
import {Course} from "../../../course/Models/Course";
import {SpecializationService} from "../../../specialization/Services/specialization.service";
import {CourseService} from "../../../course/Services/course.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  updateStudentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    specializationId: new FormControl(),
    courseIds: new FormControl(),
  });
  specializations: Specialization[] = [];
  courses: Course[] = [];
  specializationId = 0;
  courseIds : number[] = [];

  constructor(
    private specializationService: SpecializationService,
    private courseService: CourseService,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateStudentComponent>
  ) {
  }

  ngOnInit(): void {
    this.initData()
    this.specializationService.getAllSpecialization().subscribe(res=>{
      if(res){
        this.specializations = res
      }
    })
    this.courseService.getAllCourse().subscribe(res=>{
      if(res){
        this.courses = res
      }
    })
  }

  private initData(): void {
    this.updateStudentForm.patchValue(this.data)
    this.updateStudentForm.controls.specializationId.setValue(this.data.specialization.id)
    for (const courseElement of this.data.course) {
      this.courseIds.push(courseElement.id)
    }
    this.updateStudentForm.controls.courseIds.setValue(this.courseIds)
  }

  submit() {
    const request = <UpdateStudentRequest>this.updateStudentForm.value
    this.studentService.updateStudent(request).subscribe(res => {
      if (res) {
        this.dialogRef.close(true)
      }
    })
  }
}
