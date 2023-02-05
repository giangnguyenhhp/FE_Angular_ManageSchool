import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoleService} from "../../Services/role.service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {MapPermissionsRequest} from "../../Models/MapPermissionsRequest";

@Component({
  selector: 'app-map-permissions-dialog',
  templateUrl: './map-permissions-dialog.component.html',
  styleUrls: ['./map-permissions-dialog.component.scss']
})
export class MapPermissionsDialogComponent implements OnInit {
  listPermissions: string[] = [];
  checkedPermissions: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MapPermissionsDialogComponent>,
    private roleService: RoleService
  ) {
  }

  ngOnInit(): void {
    this.getAllPermissions()
    this.setCheckedPermissions()
  }

  private getAllPermissions() {
    this.roleService.getAllPermissions().subscribe(res => {
      if (res) {
        this.listPermissions = res;
      }
    })
  }

  submit() {
    const request = <MapPermissionsRequest>{
      listClaims: this.checkedPermissions,
      roleId: this.data.id
    }
    this.roleService.mapPermissions(request).subscribe(res => {
      if (res) {
        this.dialogRef.close(true)
      }
    })
  }

  setCheckedPermissions() {
    this.checkedPermissions = this.data.roleClaims ? this.data.roleClaims.map((p: any) => p.claimValue) : []
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
}
