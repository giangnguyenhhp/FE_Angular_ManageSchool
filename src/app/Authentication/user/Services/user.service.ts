import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/User";
import {environment} from "../../../../environments/environment";
import {RegisterNewUser} from "../Models/RegisterNewUser";
import {UpdateUser} from "../Models/UpdateUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  getAllUsers() {
    return this.httpClient.get<User[]>(`${environment.domain}/api/User`)
  }

  registerNewUserForAdmin(request: RegisterNewUser) {
    return this.httpClient.post<User>(`${environment.domain}/api/User/register-user-for-admin`,request)
  }

  deleteUser(id: any) {
    return this.httpClient.delete(`${environment.domain}/api/User/delete/${id}`)
  }

  updateUser(request: UpdateUser) {
    return this.httpClient.put<User>(`${environment.domain}/api/User/update-user/${request.id}`,request)
  }

  registerNewUser(request: RegisterNewUser) {
    return this.httpClient.post<User>(`${environment.domain}/api/User/register-user`,request)
  }
}
