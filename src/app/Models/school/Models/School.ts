import {Department} from "../../department/Models/Department";

export interface School {
  "id": number,
  "name": string,
  "description": string,
  "departments": Department[]
}
