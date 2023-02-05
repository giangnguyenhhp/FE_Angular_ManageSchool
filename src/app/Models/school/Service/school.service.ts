import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../Models/School";
import {environment} from "../../../../environments/environment";
import {CreateSchoolRequest} from "../Models/CreateSchoolRequest";
import {UpdateSchoolRequest} from "../Models/UpdateSchoolRequest";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllSchools() {
    return this.httpClient.get<School[]>(`${environment.urlAddress}/api/School`)
  }

  createSchool(request: CreateSchoolRequest) {
    return this.httpClient.post<School>(`${environment.urlAddress}/api/School`,request)
  }

  updateSchool(request: UpdateSchoolRequest) {
    return this.httpClient.put<School>(`${environment.urlAddress}/api/School/update/${request.id}`,request)
  }

  deleteSchool(id: number) {
    return this.httpClient.delete<School>(`${environment.urlAddress}/api/School/delete/${id}`)
  }
}
