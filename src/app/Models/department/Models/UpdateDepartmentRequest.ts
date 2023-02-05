export interface UpdateDepartmentRequest {
  "id" : number
  "name": string,
  "description": string,
  "teacherIds": number[],
  "schoolId": number
}
