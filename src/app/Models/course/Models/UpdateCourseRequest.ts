import {Student} from "../../student/Models/Student";
import {Teacher} from "../../teacher/Models/teacher";

export interface UpdateCourseRequest {
  "id":number,
  "name": string,
  "description": string,
  "credit": number,
  "studentIds": number[],
  "teacherId": number[],
  "students": Student[],
  "teacher": Teacher[]
}
