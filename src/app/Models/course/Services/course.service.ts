import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../Models/Course";
import {environment} from "../../../../environments/environment";
import {CreateCourseRequest} from "../Models/CreateCourseRequest";
import {UpdateCourseRequest} from "../Models/UpdateCourseRequest";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllCourse() {
    return this.httpClient.get<Course[]>(`${environment.domain}/api/course`)
  }

  createCourse(request: CreateCourseRequest) {
    return this.httpClient.post<Course>(`${environment.domain}/api/course`,request)

  }

  updateCourse(request: UpdateCourseRequest) {
    return this.httpClient.put<Course>(`${environment.domain}/api/course/update/${request.id}`,request)
  }

  deleteCourse(id: number) {
    return this.httpClient.delete<Course>(`${environment.domain}/api/course/delete/${id}`)
  }
}
