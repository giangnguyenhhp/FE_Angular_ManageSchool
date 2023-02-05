import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Teacher} from "../Models/teacher";
import {environment} from "../../../../environments/environment";
import {UpdateTeacherRequest} from "../Models/UpdateTeacherRequest";
import {CreateTeacherRequest} from "../Models/CreateTeacherRequest";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllTeachers() {
    return this.httpClient.get<Teacher[]>(`${environment.domain}/api/Teacher`)
  }

  updateTeacher(request: UpdateTeacherRequest) {
    return this.httpClient.put<Teacher>(`${environment.domain}/api/Teacher/update/${request.id}`,request)
  }

  deleteTeacher(id: number) {
    return this.httpClient.delete<Teacher>(`${environment.domain}/api/Teacher/delete/${id}`)
  }

  createTeacher(request: CreateTeacherRequest) {
    return this.httpClient.post<Teacher>(`${environment.domain}/api/Teacher`,request)
  }
}
