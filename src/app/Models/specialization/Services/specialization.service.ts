import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Specialization} from "../Models/Specialization";
import {environment} from "../../../../environments/environment";
import {CreateSpecializationRequest} from "../Models/CreateSpecializationRequest";
import {UpdateSpecializationRequest} from "../Models/UpdateSpecializationRequest";

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllSpecialization() {
    return this.httpClient.get<Specialization[]>(`${environment.domain}/api/specialization`)
  }

  createSpecialization(request: CreateSpecializationRequest) {
    return this.httpClient.post<Specialization>(`${environment.domain}/api/specialization`,request)

  }

  updateSpecialization(request: UpdateSpecializationRequest) {
    return this.httpClient.put<Specialization>(`${environment.domain}/api/specialization/update/${request.id}`,request)
  }

  deleteSpecialization(id: number) {
    return this.httpClient.delete<Specialization>(`${environment.domain}/api/specialization/delete/${id}`)
  }
}
