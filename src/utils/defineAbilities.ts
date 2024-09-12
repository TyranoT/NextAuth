'use client';

import { AbilityBuilder, createMongoAbility } from "@casl/ability";

export function defineAbilitiesFor(role: string) {
    const { can, cannot, build} = new AbilityBuilder(createMongoAbility);

    if(role === 'admin') {
        can ('manage', 'all');
    } else {
        can('read', 'Post');
    }

    cannot('delete', 'Post').because('Você não é autorizado a deletar postagens.');

    return build()
}