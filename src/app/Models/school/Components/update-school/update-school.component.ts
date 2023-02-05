import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SchoolService} from "../../Service/school.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UpdateSchoolRequest} from "../../Models/UpdateSchoolRequest";
import {Department} from "../../../department/Models/Department";
import {DepartmentService} from "../../../department/Service/department.service";

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.scss']
})
export class UpdateSchoolComponent implements OnInit {
  UpdateSchoolForm = new FormGroup({
    id : new FormControl(),
    name : new FormControl(),
    description : new FormControl(),
    departmentIds : new FormControl(),
  });
  departments: Department[] = [];
  departmentIds : number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef : MatDialogRef<UpdateSchoolComponent>,
    private schoolService : SchoolService,
    private departmentService : DepartmentService
  ) { }

  ngOnInit(): void {
    this.ngInitData()
    this.departmentService.getAllDepartment().subscribe(res=>{
      if(res){
        this.departments = res
      }
    })
  }

  ngInitData(){
    this.UpdateSchoolForm.patchValue(this.data)
    for (const department of this.data.departments) {
      this.departmentIds.push(department.id)
    }
    this.UpdateSchoolForm.controls.departmentIds.setValue(this.departmentIds)
  }

  submit() {
    const request = <UpdateSchoolRequest>this.UpdateSchoolForm.value
    this.schoolService.updateSchool(request).subscribe(res => {
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
