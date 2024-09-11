
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            name?: ReactNode;
            role?: string;
            email?: string;
        }
    }
    interface User {
        role?: string;
        domain?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
            idToken?: string;
            email?: string;
            role?: string;
            domain?: string;
    }
}