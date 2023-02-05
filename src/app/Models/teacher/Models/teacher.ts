import {Department} from "../../department/Models/Department";
import {Course} from "../../course/Models/Course";

export interface Teacher {
  "id": number,
  "name": string,
  "dateOfBirth": string,
  "gender": string,
  "department": Department,
  "course": Course[]
}
