"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";


const Button  = ({href,text,className}:{href ?: string,text ?: string ,className ?: string}) =>{
  const { data : session , status}  = useSession();
  return (
    <a
      href={status == "authenticated" ? href : "/Access"}
      target="_blank"
      className={`
        relative overflow-hidden rounded-full px-6 py-[6px] text-lg
        bg-gray-900 border border-white/20 flex items-center text-gray-100
        transition-all duration-300 hover:border-blue-300 hover:text-blue-300 cursor-pointer
        ${className}
      `}
    >
      <span className="relative z-10">{text}</span>
    </a>
  );
};

export default Button;
