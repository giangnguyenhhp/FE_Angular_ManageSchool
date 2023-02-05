import {Student} from "../../student/Models/Student";
import {Teacher} from "../../teacher/Models/teacher";

export interface Course {
  "id": number,
  "name": string,
  "description": string,
  "credit": number,
  "students": Student[],
  "teacher": Teacher[]
}
