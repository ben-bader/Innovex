"use client";
import Button from "@/src/UI/Button";
import Input from "@/src/UI/Input";
import SecondaryButton from "@/src/UI/SecondaryButton";
import { LogOut } from "lucide-react";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";


const UserInfos = () => {
const { data: session, status, update } = useSession();
  const router = useRouter();
  return (
    <div>
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px] top-0 -z-1" />
    <div className="flex gap-7">
      <div className="w-24 aspect-square bg-white/80 rounded-full flex items-center justify-center">
        <h1 className="text-gray-950 text-[50px] font-semibold">
          {session?.user?.name?.slice(0, 1).toUpperCase()}{" "}
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">{session?.user?.name}</h1>
        <h1>{session?.user?.email}</h1>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 text-red-500 cursor-pointer"
        >
          <LogOut /> Log out
        </button>
      </div>
    </div>
    </div>
  )
}

export default UserInfos
