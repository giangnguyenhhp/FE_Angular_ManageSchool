import {User} from "../../user/Models/User";

export interface LoginResponse {
  token: string;
  claims: string[];
  expiration: string;
  user: User
}
