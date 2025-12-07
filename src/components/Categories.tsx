"use client";
import { motion } from "framer-motion";
import { LockIcon, Globe, Atom, CircuitBoard } from "lucide-react";
import { ReactNode } from "react";

const CategoryCard = ({
  cat,
  pos,
  icon,
}: {
  cat?: string;
  pos?: string;

  icon?: ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{once:false,amount:0.1}}
      className={`flex justify-center items-center rounded-md border w-50 h-56 border-white/40 lg:relative cursor-pointer hover:scale-105 duration-300 transition`}
      style={{
        top: pos ? `${pos}rem` : "0rem",
      }}
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <span
          className={`rounded-xl p-2  backdrop-blur-2xl bg-white/20 border border-white/20`}
        >
          {icon}
        </span>
        <h1 className="font-semibold font-squid text-center">{cat}</h1>
      </div>
    </motion.div>
  );
};

export default function Categories() {
  return (
    <div
    
      id="categories"
      className="flex flex-col gap-5 lg:pb-16 px-20 max-sm:py-8 max-sm:px-10 items-center justify-center"
    >
      <div className="overflow-hidden flex items-center gap-2 text-lg ">
        <div className="w-0.5 h-5 bg-white/80" />{" "}
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Categories
        </motion.span>
      </div>

      <div className="flex flex-col gap-16 items-center justify-center">
        <h1 className="text-6xl max-sm:text-4xl text-center">
          Choose the{" "}
          <span className="font-squid text-transparent bg-clip-text  bg-gradient-to-tr from-blue-700 to-purple-400">
            category
          </span>{" "}
          you want to explore
        </h1>
        <div className="flex max-sm:flex-col gap-16 max-sm:gap-8">
          <CategoryCard
            cat="Cyber security"
            pos="3"
            icon={<LockIcon className="w-10 h-10" />}
          />
          <CategoryCard
            cat="Artificial Intelligence"
            icon={<CircuitBoard className="w-10 h-10" />}
          />
          <CategoryCard
            cat="Web Dev"
            pos="3"
            icon={<Atom className="w-10 h-10" />}
          />
          <CategoryCard
            cat="Networking"
            icon={<Globe className="w-10 h-10" />}
          />
        </div>
      </div>
      <div className="flex max-sm:hidden relative w-full">
        <div className="w-[10rem] h-[10rem] bg-blue-500 blur-[80px] relative left-8 bottom-44  -z-10" />
        <div className="w-[10rem] h-[10rem] bg-pink-500 blur-[80px] relative left-36 bottom-50 -z-10" />
        <div className="w-[10rem] h-[10rem] bg-violet-500 blur-[80px] relative  right-[-25%] bottom-44  -z-10" />
        <div className="w-[10rem] h-[10rem] bg-cyan-500 blur-[80px] relative right-[-37%] bottom-50  -z-10" />
      </div>
    </div>
  );
}
