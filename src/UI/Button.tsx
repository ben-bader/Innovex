"use client";

import { useSession } from "next-auth/react";


const Button  = ({href,text,className}:{href ?: string,text ?: string ,className ?: string}) =>{
  const { data : session , status}  = useSession();
  return (
    <a
      href={status == "authenticated" ? href : "/access"}
      target="_blank"
      className={`
        relative overflow-hidden rounded-full px-6 py-[6px] text-lg
        bg-black/60 backdrop-blur-3xl border border-white/30 flex items-center text-gray-100
        transition-all duration-300 hover:border-blue-400 hover:text-blue-400 cursor-pointer
        ${className}
      `}
    >
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default Button;
