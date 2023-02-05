import {Injectable} from '@angular/core';
import {LoginRequest} from "../Models/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {LoginResponse} from "../Models/LoginResponse";
import {User} from "../../user/Models/User";
import {Role} from "../../role/Models/Role";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user : User = new class implements User {
    accessFailedCount!: 0;
    concurrencyStamp!: string;
    email!: string;
    emailConfirmed!: false;
    id!: string;
    lockoutEnabled!: true;
    lockoutEnd!: null;
    normalizedEmail!: string;
    normalizedUserName!: string;
    passwordHash!: string;
    phoneNumber!: string;
    phoneNumberConfirmed!: false;
    roles!: Role[];
    securityStamp!: string;
    twoFactorEnabled!: false;
    userName!: string;
  }

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  login(request: LoginRequest) {
    return this.httpClient.post<LoginResponse>(`${environment.domain}/api/Authenticate/login`, request)
  }
}
