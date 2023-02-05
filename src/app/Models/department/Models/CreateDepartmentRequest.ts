export interface CreateDepartmentRequest {
  "name": string,
  "description": string,
  "teacherIds": number[],
  "schoolId": number
}
