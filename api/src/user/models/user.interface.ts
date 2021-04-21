export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  CHIEFEDITOR = 'chief',
  EDITOR = 'editor',
  USER = 'user',
}