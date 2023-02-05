import {Specialization} from "../../specialization/Models/Specialization";
import {Course} from "../../course/Models/Course";

export interface Student {
  "id": number,
  "name": string,
  "dateOfBirth": string,
  "gender": number,
  "specialization": Specialization,
  "course": Course[]
}
