import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../Models/Role";
import {environment} from "../../../../environments/environment";
import {MapPermissionsRequest} from "../Models/MapPermissionsRequest";
import {RoleRequest} from "../Models/RoleRequest";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private httpClient : HttpClient
  ) { }


  getAllRoles() {
    return this.httpClient.get<Role[]>(`${environment.domain}/api/Role`)
  }

  getAllPermissions() {
    return this.httpClient.get<string[]>(`${environment.domain}/api/Role/permissions`)
  }

  mapPermissions(request: MapPermissionsRequest) {
    return this.httpClient.post<Role>(`${environment.domain}/api/Role/map-permission/${request.roleId}`,request)
  }

  createRole(request: RoleRequest) {
    return this.httpClient.post<Role>(`${environment.domain}/api/Role`,request)

  }

  deleteRole(id: any) {
    return this.httpClient.delete<Role>(`${environment.domain}/api/Role/delete/${id}`)
  }

  updateRole(request: RoleRequest) {
    return this.httpClient.put<Role>(`${environment.domain}/api/Role/update/${request.id}`,request)

  }
}
