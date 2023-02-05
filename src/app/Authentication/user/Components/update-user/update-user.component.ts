import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../Services/user.service";
import {Role} from "../../../role/Models/Role";
import { RoleService } from 'src/app/Authentication/role/Services/role.service';
import {UpdateUser} from "../../Models/UpdateUser";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  UpdateUserFormGroup = new FormGroup({
    userName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    currentPassword: new FormControl(),
    newPassword: new FormControl(),
    roleNames: new FormControl(),
    id: new FormControl(),
  });
  roles: Role[] = [];
  userRoles : string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.InitData()
    this.getAllRoles()
  }

  private getAllRoles(){
    this.roleService.getAllRoles().subscribe(res=>{
      if(res){
        this.roles = res
      }
    })
  }

  private InitData() {
    this.UpdateUserFormGroup.patchValue(this.data)
    for (const role of this.data.roles) {
      this.userRoles.push(role.name)
    }
    this.UpdateUserFormGroup.controls.roleNames.setValue(this.userRoles)

  }

  submit() {
    const request = <UpdateUser>this.UpdateUserFormGroup.value
    this.userService.updateUser(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }

}
