export interface UpdateTeacherRequest {
  "id": number,
  "name": string,
  "gender": string,
  "dateOfBirth": string,
  "departmentId": number,
  "courseIds": number[],
}
