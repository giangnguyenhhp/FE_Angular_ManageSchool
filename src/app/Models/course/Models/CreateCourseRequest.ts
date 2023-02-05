export interface CreateCourseRequest {
  "name": string,
  "description": string,
  "credit": number,
  "studentIds": number[],
  "teacherId": number[]
}
