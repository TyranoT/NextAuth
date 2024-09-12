'use client';

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import Button_view from "../user-view/button_view/button";
import Button_admin from "../user-admin/button-admin/button-adm";
import ButtonLogout from "@/components/Button_Logout";
import { Can } from "@casl/react";
import { useAbility } from "@/components/AbilityProvider";
import { useSession } from "next-auth/react";

export default function Page() {
    const {data: session} = useSession();
    const ability = useAbility();

    if(!session) {
        redirect("/")
    }

    return (
        <>
            <div className="flex flex-row justify-between p-3">
                <div>Olá, {session?.user.name}</div>
                <Button_admin />
                <Button_view />
                <div>Dashboard</div>
                <ButtonLogout />
            </div>
            <div>
                <Can I="read" a="Post" ability={ability}>
                    <p>
                        Você pode visualizar esta página!
                    </p>
                </Can>
                <Can I="delete" a="Post" ability={ability}>
                    <button>
                        Deletar
                    </button>
                </Can>
            </div>
        </>
    )
}