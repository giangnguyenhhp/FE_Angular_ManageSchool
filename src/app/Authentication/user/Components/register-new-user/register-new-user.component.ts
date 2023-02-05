import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordValidatorService} from "../../Services/password-validator.service";
import {RegisterNewUser} from "../../Models/RegisterNewUser";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.scss']
})
export class RegisterNewUserComponent implements OnInit {
  registerFormGroup = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    userName : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl()
  });

  constructor(
    private passwordValid : PasswordValidatorService,
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.setValidators()
  }

  setValidators(){
    this.registerFormGroup.get('confirmPassword')?.setValidators(
      [Validators.required,this.passwordValid.validateConfirmPassword(this.registerFormGroup.get('password'))]
    )
  }
  register() {
    const request = <RegisterNewUser>this.registerFormGroup.value
    this.userService.registerNewUser(request).subscribe(res=>{
      if(res){
        this.router.navigate(['/login'])
      }
    })
  }

  validateControl(controlName: string, errorName: string) {
    return this.registerFormGroup.get(controlName)?.invalid
    && this.registerFormGroup.get(controlName)?.touched
    && this.registerFormGroup.get(controlName)?.hasError(errorName)
  }
}


