import {Role} from "../../role/Models/Role";

export interface User {
  "id": string,
  "userName": string,
  "normalizedUserName": string,
  "email": string,
  "normalizedEmail": string,
  "emailConfirmed": false,
  "passwordHash": string,
  "securityStamp": string,
  "concurrencyStamp": string,
  "phoneNumber": string,
  "phoneNumberConfirmed": false,
  "twoFactorEnabled": false,
  "lockoutEnd": null,
  "lockoutEnabled": true,
  "accessFailedCount": 0,
  roles : Role[],
}
