"use client";
import { motion } from "framer-motion";
import { LockIcon, Globe, CodeXml, CircuitBoard, Cloud } from "lucide-react";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { IoIosCloudOutline } from "react-icons/io";
const CategoryCard = ({
  cat,
  className,
  icon,
  href,
}: {
  cat?: string;
  className?: string;
  icon?: ReactNode;
  href?: string;
}) => {
  const { data: session, status } = useSession();
  return (
    <a href={status === "authenticated" ? href : "/access"}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ once: false, amount: 0.3 }}
        className={`flex justify-center bg-white/5 backdrop-blur-xl items-center rounded-md border w-50 h-56 border-white/20 lg:relative cursor-pointer ${className}`}
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className={`rounded-xl p-2  backdrop-blur-2xl bg-white/10`}>
            {icon}
          </span>
          <h1 className="font-semibold font-squid text-center">{cat}</h1>
        </div>
      </motion.div>
    </a>
  );
};
const Categories:React.FC = () => {
  return (
    <section
      id="categories"
      className="flex flex-col gap-5 pt-16 px-20 max-sm:-mb-85 max-md:py-8 max-md:px-6 items-center justify-center"
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
          <span className="font-squid text-transparent bg-clip-text  bg-linear-to-tr from-blue-700 to-purple-400">
            category
          </span>{" "}
          you want to explore
        </h1>
        <p className="text-center -mt-8 text-gray-300">
          Step into the future and explore our categories, where innovative
          ideas and cutting-edge concepts <br /> come to life in ways you’ve
          never imagined.
        </p>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:grid-rows-2 gap-16 max-sm:gap-0 max-sm:grid-cols-1">
          <div className="relative">
            <CategoryCard
              href="/main/events/category/cybersecurity"
              cat="Cybersecurity"
              className="top-12"
              icon={<LockIcon className="w-10 h-10" />}
            />
            <div className="w-[10rem] h-[10rem] bg-blue-700 blur-[80px] relative left-8 max-md:left-0 bottom-44 max-md:top-[-50%] -z-10" />
          </div>
          <div className="relative max-sm:top-[-20%]">
            <CategoryCard
              href="/main/events/category/ai"
              cat="Artificial Intelligence"
              icon={<CircuitBoard className="w-10 h-10" />}
            />
            <div className="w-[10rem] h-[10rem] bg-fuchsia-700 blur-[80px] relative left-8 max-md:left-0 bottom-50 -z-10" />
          </div>
          <div className="relative max-sm:top-[-40%]">
            <CategoryCard
              href="/main/events/category/development"
              cat="Development"
              className="top-12"
              icon={<CodeXml className="w-10 h-10" />}
            />
            <div className="w-[10rem] h-[10rem] bg-violet-700 blur-[80px] relative  right-[-23%] bottom-44 max-md:right-0  -z-10" />
          </div>
          <div className="relative max-sm:top-[-60%]">
            <CategoryCard
              href="/main/events/category/cloud"
              cat="Cloud"
              icon={<IoIosCloudOutline className="w-10 h-10" />}
            />
            <div className="w-[10rem] h-[10rem] bg-sky-700 blur-[80px] relative right-[-33%] bottom-50 max-md:right-0  -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;