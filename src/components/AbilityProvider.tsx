'use client';

import { defineAbilitiesFor } from "@/utils/defineAbilities";
import { createMongoAbility } from "@casl/ability";
import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";

const AbilityContext = createContext(createMongoAbility([]));

export function AbilityProvider({ children }: any) {
    const { data: session } = useSession();

    const ability = defineAbilitiesFor(session?.user.role || 'visitante');

    return (
        <AbilityContext.Provider value={ability}>
            {children}
        </AbilityContext.Provider>
    )
}

export function useAbility() {
    return useContext(AbilityContext);
}