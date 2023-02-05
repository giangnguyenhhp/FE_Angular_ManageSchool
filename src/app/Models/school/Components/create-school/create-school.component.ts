import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import { SchoolService } from '../../Service/school.service';
import {CreateSchoolRequest} from "../../Models/CreateSchoolRequest";

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.scss']
})
export class CreateSchoolComponent implements OnInit {
  createNewSchoolForm = new FormGroup({
    name : new FormControl(),
    description : new FormControl(),
    departmentIds : new FormControl(),
  });

  constructor(
    private dialogRef : MatDialogRef<CreateSchoolComponent>,
    private schoolService :SchoolService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const request = <CreateSchoolRequest>this.createNewSchoolForm.value
    this.schoolService.createSchool(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
