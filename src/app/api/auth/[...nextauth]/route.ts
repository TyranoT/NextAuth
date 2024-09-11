import { randomBytes, randomUUID } from "crypto";
import { User } from "next-auth";
import NextAuth  from "next-auth/next";
import  CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider ({
            credentials: {
                email: {label: "E-mail", type: "email"},
                senha: {label: "Senha", type: "password"},
            },
            async authorize(credentials, req) {
                if(!credentials) {
                    return null;
                }

                const user: User = {
                    id: "1",
                    name: "Diego",
                    email: credentials.email,
                    role: "default",
                }

                if (credentials) {
                    return user;
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: "/Login_Custo.tsx"
    },
    session: {
        strategy: "jwt",
    },
    secret: "aIO+fxjo+hALxyErMHLbta3KEkBKTHfUvoXZ/Q04uS0=",
    callbacks: {
        async jwt({token, user}) {

            if(user) {
                token.email = user.email as string;
                token.role = user.role;
                if(token.email === "diego@gmail.com") {
                    token.role = "admin"
                } else {
                    token.role = "default"
                }
            }

            return token
        },
        async session({session, token}) {
            session.user.email = token.email
            session.user.role = token.role

            return session;
        }
    }
})

export { handler as GET, handler as POST }