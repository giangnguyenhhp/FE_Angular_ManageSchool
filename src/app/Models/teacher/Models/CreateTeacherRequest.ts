export interface CreateTeacherRequest {
  "name": string,
  "gender": string,
  "dateOfBirth": string,
  "departmentId": number,
  "courseIds": number[]
}
