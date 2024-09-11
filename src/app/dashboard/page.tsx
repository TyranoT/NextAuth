import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import Button_view from "../user-view/button_view/button";
import Button_admin from "../user-admin/button-admin/button-adm";
import { signOut } from "next-auth/react";
import ButtonLogout from "@/components/Button_Logout";

export default async function Page() {
    const session = await getServerSession();

    if(!session) {
        redirect("/")
    }

    return (
        <>
            <div className="flex flex-row justify-between p-3">
                <div>Olá, {session?.user?.name}</div>
                <Button_admin />
                <Button_view />
                <div>Dashboard</div>
                <ButtonLogout />
            </div>
            <div>
                {
                    JSON.stringify(session.user, null, 2)
                }
            </div>
        </>
    )
}