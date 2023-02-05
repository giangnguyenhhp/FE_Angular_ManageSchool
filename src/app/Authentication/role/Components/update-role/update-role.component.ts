import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoleService} from '../../Services/role.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoleRequest} from "../../Models/RoleRequest";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MapPermissionsRequest} from "../../Models/MapPermissionsRequest";

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {
  updateRoleForm = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    roleClaims: new FormControl(),
  });
  listPermissions: string[] = [];
  checkedPermissions: string[] = [];


  constructor(
    private roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateRoleComponent>
  ) {
  }

  ngOnInit(): void {
    this.ngInitData()
    this.getAllPermissions()
    this.setCheckedPermissions()
  }

  ngInitData() {
    this.updateRoleForm.patchValue(this.data)
  }

  getAllPermissions() {
    this.roleService.getAllPermissions().subscribe(res => {
      if (res) {
        this.listPermissions = res;
      }
    })
  }

  setCheckedPermissions() {
    this.checkedPermissions = this.data.roleClaims ? this.data.roleClaims.map((p: any) => p.claimValue) : []
    console.log(this.checkedPermissions)
  }

  isChecked(p: string) {
    return this.checkedPermissions.includes(p);
  }

  checkPermissions(p: string, $event: MatCheckboxChange) {
    if ($event.checked) {
      this.checkedPermissions.push(p)
    } else {
      this.checkedPermissions = this.checkedPermissions.filter(x => x !== p)
    }
    console.log(this.checkedPermissions)
  }

   submit() {
    const request = <RoleRequest>this.updateRoleForm.value
     this.roleService.updateRole(request).subscribe( (res) => {
       if (res) {
          this.dialogRef.close(true);
       }
     })

    const request2 = <MapPermissionsRequest>{
      listClaims: this.checkedPermissions,
      roleId: this.data.id
    }
     this.roleService.mapPermissions(request2).subscribe( (res) => {
       if (res) {
         this.dialogRef.close(true);
       }
     });

  }
}
