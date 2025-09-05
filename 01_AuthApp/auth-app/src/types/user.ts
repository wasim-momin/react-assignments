export interface Avatar {
  _id: string;
  url: string;
  localPath: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  loginType: string;
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  avatar: Avatar;
}
