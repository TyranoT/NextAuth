import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Admin_Page() {
    const session = await getServerSession()


    return (
        <div>
            <h1>
                Acesso Exclusivo do Admin
            </h1>
        </div>
    )
}