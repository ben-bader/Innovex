import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface user extends DefaultUser {
    id: string;
  }

  interface Session extends DefaultSession {
    user : User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}
