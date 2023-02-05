import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Role} from 'src/app/Authentication/role/Models/Role';
import {RoleService} from 'src/app/Authentication/role/Services/role.service';
import {PasswordValidatorService} from "../../Services/password-validator.service";
import {RegisterNewUser} from "../../Models/RegisterNewUser";
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createNewUser = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(),
    roleNames: new FormControl([], [Validators.required]),
  },);

  roles: Role[] = [];

  constructor(
    private roleService: RoleService,
    private passwordValidator: PasswordValidatorService,
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getAllRoles()
    this.setValidators()

  }

  setValidators() {
    this.createNewUser.get('confirmPassword')?.setValidators(
      [Validators.required, this.passwordValidator.validateConfirmPassword(this.createNewUser.get('password'))])
  }

  validateControl(controlName: string, errorName: string) {
    return this.createNewUser.get(controlName)?.invalid
      && this.createNewUser.get(controlName)?.touched
      && this.createNewUser.get(controlName)?.hasError(errorName)
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(res => {
      if (res) {
        this.roles = res
      }
    })
  }

  submit() {
    const request = <RegisterNewUser>this.createNewUser.value
    this.userService.registerNewUserForAdmin(request).subscribe(res => {
      if (res) {
        this.dialogRef.close(true)
      }
    })
  }
}
