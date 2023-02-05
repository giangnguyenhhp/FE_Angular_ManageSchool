import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../../student/Models/Student";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SpecializationService} from "../../Services/specialization.service";
import {UpdateSpecializationRequest} from "../../Models/UpdateSpecializationRequest";
import {StudentService} from "../../../student/Services/student.service";

@Component({
  selector: 'app-update-specialization',
  templateUrl: './update-specialization.component.html',
  styleUrls: ['./update-specialization.component.scss']
})
export class UpdateSpecializationComponent implements OnInit {
  updateSpecializationForm= new FormGroup({
    id:new FormControl(),
    name : new FormControl(),
    description : new FormControl(),
    studentIds : new FormControl(),
  });

  students: Student[] = [];
  studentIds : number[] = []
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private specializationService : SpecializationService,
    private dialogRef : MatDialogRef<UpdateSpecializationComponent>,
    private studentService : StudentService
  ) { }

  ngOnInit(): void {
    this.ngInitData()
    this.studentService.getStudents().subscribe(res=>{
      if (res){
        this.students = res
      }
    })
  }

  ngInitData(): void {
    this.updateSpecializationForm.patchValue(this.data)
    console.log(this.data)
    for (const student of this.data.students) {
      this.studentIds.push(student.id)
    }
    console.log(this.studentIds)
    this.updateSpecializationForm.controls.studentIds.setValue(this.studentIds)
  }

  submit() {
    const request = <UpdateSpecializationRequest>this.updateSpecializationForm.value
    this.specializationService.updateSpecialization(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
