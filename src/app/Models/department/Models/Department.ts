import {Teacher} from "../../teacher/Models/teacher";
import {School} from "../../school/Models/School";

export interface Department {
  "id": number,
  "name": string,
  "description": string,
  "teachers": Teacher[],
  "school": School
}
