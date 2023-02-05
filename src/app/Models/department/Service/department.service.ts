import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Department} from "../Models/Department";
import {environment} from "../../../../environments/environment";
import {CreateDepartmentRequest} from "../Models/CreateDepartmentRequest";
import {UpdateDepartmentRequest} from "../Models/UpdateDepartmentRequest";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllDepartment() {
    return this.httpClient.get<Department[]>(`${environment.domain}/api/department`)
  }

  createDepartment(request: CreateDepartmentRequest) {
    return this.httpClient.post<Department>(`${environment.domain}/api/department`,request)
  }

  updateDepartment(request: UpdateDepartmentRequest) {
    return this.httpClient.put<Department>(`${environment.domain}/api/department/update/${request.id}`,request)
  }

  deleteDepartment(id: number) {
    return this.httpClient.delete<Department>(`${environment.domain}/api/department/delete/${id}`)
  }
}
