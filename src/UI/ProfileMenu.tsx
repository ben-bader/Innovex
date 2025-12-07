"use client";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function ProfileMenu() {
  const { data: session } = useSession();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="flex flex-col absolute overflow-hidden z-10 right-3 top-10 items-center justify-center gap-4 p-4 rounded-md bg-gray-900/50 backdrop-blur-3xl border border-white/10 "
    >
      {/* <div className="w-24 aspect-square bg-blue-500 blur-3xl rounded-full right-0 bottom-0 -z-40 absolute"/>
      <div className="w-24 aspect-square bg-fuchsia-500 blur-3xl rounded-full left-0 top-0 -z-40 absolute"/> */}
      <a href="/main/profile">
        <span className="w-10 text-2xl aspect-square z-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-semibold">
          {session?.user?.name?.slice(0, 1).toUpperCase()}
        </span>
      </a>
      <h1 className="text-xl uppercase font-bold">{session?.user?.name}</h1>
      <p className="text-sm text-white/80 -mt-4">{session?.user?.email}</p>
      <a href="/main/profile" className="text-white/70 hover:text-white -mb-3 mt-4">
        Manage profile
      </a>
      <button
        onClick={() => signOut()}
        className="flex items-center text-red-500 cursor-pointer"
      >
        <LogOut className="p-1" /> Log out
      </button>
    </motion.div>
  );
}
