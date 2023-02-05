import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import {CreateStudentRequest} from "../../Models/CreateStudentRequest";
import {StudentService} from "../../Services/student.service";
import {Specialization} from "../../../specialization/Models/Specialization";
import {SpecializationService} from "../../../specialization/Services/specialization.service";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  createNewStudentForm = new FormGroup({
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    specializationId : new FormControl(),
    courseIds : new FormControl(),
  });
  specials: Specialization[] = [];

  constructor(
    private studentService: StudentService,
    private dialogRef: MatDialogRef<CreateStudentComponent>,
    private specializationService: SpecializationService
  ) {
  }

  ngOnInit(): void {
    this.specializationService.getAllSpecialization().subscribe(res=>{
      if(res){
        this.specials = res
      }
    })
  }

  submit() {
    const request = <CreateStudentRequest>this.createNewStudentForm.value
    this.studentService.createStudent(request).subscribe(()=>{
        this.dialogRef.close(true)
    })
  }
}
