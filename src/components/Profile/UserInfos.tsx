"use client";

import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const UserInfos:React.FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="absolute pointer-events-none w-125 h-125 hero-gradient rounded-tl-[300px] -left-125 top-0 -z-1" />
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
            onClick={() => {
              signOut({ callbackUrl: "/main" });
              
            }}
            className="flex items-center gap-2 text-red-500 cursor-pointer"
          >
            <LogOut /> Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfos;
