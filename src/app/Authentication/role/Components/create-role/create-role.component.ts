import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RoleRequest} from "../../Models/RoleRequest";
import {RoleService} from '../../Services/role.service';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {
  createRoleForm = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private roleService: RoleService,
    private dialogRef: MatDialogRef<CreateRoleComponent>
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const request = <RoleRequest>this.createRoleForm.value
    this.roleService.createRole(request).subscribe(res=>{
      if(res){
        this.dialogRef.close(true)
      }
    })
  }
}
