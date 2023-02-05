import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../Models/Student";
import {environment} from "../../../../environments/environment";
import {CreateStudentRequest} from "../Models/CreateStudentRequest";
import {UpdateStudentRequest} from "../Models/UpdateStudentRequest";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getStudents() {
    return this.httpClient.get<Student[]>(`${environment.domain}/api/Student`)
  }

  createStudent(request: CreateStudentRequest) {
    return this.httpClient.post<Student>(`${environment.domain}/api/Student`,request)

  }

  updateStudent(request: UpdateStudentRequest) {
    return this.httpClient.put<Student>(`${environment.domain}/api/Student/update/${request.id}`,request)
  }

  deleteStudent(id: number) {
    return this.httpClient.delete(`${environment.domain}/api/Student/delete/${id}`)
  }
}
