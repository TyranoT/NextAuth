'use client'
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function Button_view (){
    return (
        <Link href="/user-view"><button className="border p-1">User View</button></Link>
    )
}