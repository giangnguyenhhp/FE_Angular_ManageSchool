export interface CreateStudentRequest {
  "name": string,
  "dateOfBirth": string,
  "gender": number,
  "specializationId": number,
  "courseIds": number[]
}
