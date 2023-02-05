export interface UpdateStudentRequest {
  "id" : number,
  "name": string,
  "dateOfBirth": string,
  "gender": number,
  "specializationId": number,
  "courseIds": number[],
}
