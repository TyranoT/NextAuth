"use client"

import { signIn } from "next-auth/react"

export default function LoginForm() {
    async function login (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get("email"),
            senha: formData.get("senha"),
        }

        signIn("credentials", {
            ...data,
            callbackUrl: "/dashboard"
        })
    }


    return (
        <form onSubmit={login} className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
            <h1 className="text-2xl font-bold">Login</h1>
            <input type="email" name="email" id="email" placeholder="E-amil" className="border rounded-lg p-1"/>
            <input type="password" name="senha" id="password" placeholder="Senha" className="border rounded-lg p-1"/>
            <button type="submit">Sign-In</button>
        </form>
    )
}