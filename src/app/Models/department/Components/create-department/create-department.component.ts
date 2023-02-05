import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import { DepartmentService } from '../../Service/department.service';
import {FormControl, FormGroup} from "@angular/forms";
import {CreateDepartmentRequest} from "../../Models/CreateDepartmentRequest";
import {School} from "../../../school/Models/School";
import {SchoolService} from "../../../school/Service/school.service";

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent implements OnInit {
  createNewDepartment = new FormGroup({
    name : new FormControl(),
    description : new FormControl(),
    teacherIds : new FormControl(),
    schoolId : new FormControl(),
  });
  schools: School[]=[];

  constructor(
    private dialogRef : MatDialogRef<CreateDepartmentComponent>,
    private departmentService : DepartmentService,
    private schoolService :SchoolService
  ) { }

  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe(res=>{
      this.schools = res
    })
  }

  submit() {
    const request = <CreateDepartmentRequest>this.createNewDepartment.value
    this.departmentService.createDepartment(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
