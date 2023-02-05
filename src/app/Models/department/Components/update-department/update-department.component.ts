import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { DepartmentService } from '../../Service/department.service';
import {FormControl, FormGroup} from "@angular/forms";
import {UpdateDepartmentRequest} from "../../Models/UpdateDepartmentRequest";
import { Teacher } from 'src/app/Models/teacher/Models/teacher';
import {School} from "../../../school/Models/School";
import { SchoolService } from 'src/app/Models/school/Service/school.service';
import {TeacherService} from "../../../teacher/Services/teacher.service";

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  updateDepartment = new FormGroup({
    id: new FormControl(),
    name : new FormControl(),
    description : new FormControl(),
    teacherIds : new FormControl(),
    schoolId : new FormControl(),
  });
  schoolId = 0;
  teacherIds : number[] = [];
  teachers: Teacher[] = [];
  schools: School[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    private dialogRef: MatDialogRef<UpdateDepartmentComponent>,
    private departmentService: DepartmentService,
    private teacherService: TeacherService,
    private schoolService:SchoolService
  ) { }

  ngOnInit(): void {
    this.ngInitData()
    this.teacherService.getAllTeachers().subscribe(r=>{
      this.teachers = r
    })
    this.schoolService.getAllSchools().subscribe(r=>{
      if(r){
        this.schools = r
      }
    })
  }

  ngInitData(){
    this.updateDepartment.patchValue(this.data)
    this.updateDepartment.controls.schoolId.setValue(this.data.school.id)
    for (const teacher of this.data.teachers) {
      this.teacherIds.push(teacher.id)
    }
    this.updateDepartment.controls.teacherIds.setValue(this.teacherIds)
  }

  submit() {
    const request = <UpdateDepartmentRequest>this.updateDepartment.value
    this.departmentService.updateDepartment(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
