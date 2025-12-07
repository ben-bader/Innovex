"use client";
import Button from "@/src/UI/Button";
import Input from "@/src/UI/Input";
import SecondaryButton from "@/src/UI/SecondaryButton";
import { LogOut } from "lucide-react";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ReactFormState } from "react-dom/client";



export default function Profile() {
  const { data: session, status,update } = useSession();
  const router = useRouter();
    const [Infosmessage,setInfosMessage] = useState("");
    const [passMessage,setPassMessage] = useState("");

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  async function updateInfos(e : React.FormEvent  ){
    e.preventDefault();
    const res = await fetch("/api/user/update",{
        method : "PUT",
        headers: {"Content-type" : "application/json"},
        body : JSON.stringify({userId : session?.user?.id, name,email}),
    })
    if(!res?.ok) {setInfosMessage("Failed to update user info"); return;};
    const data = await res.json();
    console.log(data);
    update?.();
}

    const [newPassword,SetNewPassword] = useState("");
    const [confirmPassword,SetConfirmPassword] = useState("");
    
    async function updatePass(e : React.FormEvent){
        e.preventDefault();
        if(newPassword !== confirmPassword) {
        setPassMessage("Passwords do not match");
        return;
    }
        const res = await fetch("/api/user/update-password",{
            method : "PUT",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({userId : session?.user?.id,newPassword}),
        })
        if(!res?.ok) {setPassMessage("Failed to update password"); return;};
        const data = await res.json();

        console.log(data);
        update?.();

    }
    if (status === "unauthenticated") {
        router.push("/main");
        return;
}

  return (
    <div className="px-20 py-16 max-sm:px-6 flex flex-col gap-16">
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
          <button onClick={()=>signOut()} className="flex items-center gap-2 text-red-500 cursor-pointer"><LogOut /> Log out</button>
        </div>
      </div>
      <h1 className="-mb-12">Change Informations </h1>
      <div className="p-4 bg-gray-900/50 border rounded-md border-white/30 w-[60%] max-md:w-full">
        <form onSubmit={updateInfos} className=" flex flex-col gap-6">
          <label htmlFor="usename" className="flex flex-col gap-2">
            Username
            <Input  onChange={e => {setName(e.target.value)}} className="!focus:scale-100" />
          </label>
          <label htmlFor="email"  className="flex flex-col gap-2">
            Email
            <Input  onChange={e => {setEmail(e.target.value)}} className="!focus:scale-100" />
          </label>
          {Infosmessage && <p className="text-red-500">*{Infosmessage}</p>}
          <div className="flex justify-end">
            <button className="w-full text-center py-2 bg-gray-300 text-black rounded-md text-lg cursor-pointer focus:scale-[0.98] duration-300 transition-all">
              Confirm
            </button>
          </div>
        </form>
      </div>
      <h1 className="-mb-12">Change Password </h1>
      <div className="p-4 bg-gray-900/50 border rounded-md border-white/30 w-[60%] max-md:w-full">
        <form onSubmit={updatePass} className=" flex flex-col gap-6">
          <label htmlFor="password" className="flex flex-col gap-2">
            New Password
            <Input onChange={e => {SetNewPassword(e.target.value)}} className="!focus:scale-100" />
          </label>
          <label htmlFor="email" className="flex flex-col gap-2">
            Confirm password
            <Input onChange={e => {SetConfirmPassword(e.target.value)}} className="!focus:scale-100" />
          </label>
          {passMessage && <p className="text-red-500">*{passMessage}</p>}
         <div className="flex justify-end">
            <SecondaryButton text="Change Password"/>
          </div>
        </form>
      </div>
    </div>
  );
}
