declare module 'jwt-decode' {
  export interface JwtPayload {
    name: string;
    email: string;
    role: string;
  }
}

export {};
