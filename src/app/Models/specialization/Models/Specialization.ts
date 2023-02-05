import {Student} from "../../student/Models/Student";

export interface Specialization {
  "id": number,
  "name": string,
  "description": string,
  "students": Student[]
}
