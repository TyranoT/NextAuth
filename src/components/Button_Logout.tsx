"use client"

import { signOut } from "next-auth/react"

export default function ButtonLogout() {
    return (
        <button className="border p-1" onClick={() => signOut()}>Sair</button>
    )
}