import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";
import { SpecializationService } from '../../Services/specialization.service';
import {CreateSpecializationRequest} from "../../Models/CreateSpecializationRequest";
import {Student} from "../../../student/Models/Student";
import {StudentService} from "../../../student/Services/student.service";

@Component({
  selector: 'app-create-specialization',
  templateUrl: './create-specialization.component.html',
  styleUrls: ['./create-specialization.component.scss']
})
export class CreateSpecializationComponent implements OnInit {
  createNewSpecializationForm = new FormGroup({
    name : new FormControl(),
    description : new FormControl(),
    studentIds : new FormControl(),
  });
  students: Student[] = [];

  constructor(
    private dialogRef: MatDialogRef<CreateSpecializationComponent>,
    private specializationService: SpecializationService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(res=>{
      if(res){
        this.students = res
      }
    })
  }

  submit() {
    const request = <CreateSpecializationRequest>this.createNewSpecializationForm.value;
    this.specializationService.createSpecialization(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
