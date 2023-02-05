import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { TeacherService } from '../../Services/teacher.service';
import {MatDialogRef} from "@angular/material/dialog";
import {CreateTeacherRequest} from "../../Models/CreateTeacherRequest";

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {
  createNewTeacherForm= new FormGroup({
    name: new FormControl(),
    gender: new FormControl(),
    dateOfBirth: new FormControl(),
    departmentId: new FormControl(),
    courseIds: new FormControl()
  })

  constructor(
    private teacherService: TeacherService,
    private dialogRef: MatDialogRef<CreateTeacherComponent>
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const request = <CreateTeacherRequest>this.createNewTeacherForm.value
    this.teacherService.createTeacher(request).subscribe(res => {
      if (res){
        this.dialogRef.close(true)
      }
    })
  }
}
