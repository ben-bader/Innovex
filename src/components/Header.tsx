"use client";
import { motion } from "framer-motion";
import Logo from "@/src/UI/Logo";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { navItems } from "../../public/data/export";
import { useSession } from "next-auth/react";
import ProfileMenu from "../UI/ProfileMenu";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { data: session, status } = useSession();
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex w-full px-20 py-6 max-sm:px-8 items-center justify-between space-x-4"
    >
      <div className="flex w-full justify-between items-center">
        <Logo />
        <nav className="flex max-md:hidden justify-center space-x-6 px-8 py-2 backdrop-blur-3xl rounded-full text-white/90 bg-white/5 border border-white/30">
          {navItems.map((item, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              href={item.link}
              key={index}
              className="text-sm hover:text-white"
            >
              {item.title}
            </motion.a>
          ))}
        </nav>

        <div className="flex justify-end space-x-4">
          {status === "unauthenticated" ? (
            <a href="/access">
              <button className="cursor-pointer max-sm:hidden px-4 py-2 bg-white/5 backdrop-blur-sm outline outline-white/30 text-white/80 rounded-full text-sm hover:bg-gradient-to-br hover:from-blue-700 hover:to-purple-500  hover:outline-none hover:text-white duration-300 transition">
                Access Innovex
              </button>
            </a>
          ) : (
            <div className="relative">
              <button
                id="btn"
                className="cursor-pointer rounded-full py-2 text-sm px-4 text-white/80 hover:text-white bg-white/5 backdrop-blur-3xl border border-white/30 capitalize  flex items-center justify-center "
                onClick={() => setProfileMenu(!profileMenu)}
               
              > 
              
                {session?.user?.name?.split(" ")[0]}
                <IoIosArrowDown className="ml-1 max-sm:ml-0 " />
              </button>
              
              {profileMenu && <ProfileMenu />}
            </div>
          )}
        </div>
      </div>

      {/* mobile navbar */}
      <div className="hidden max-sm:block cursor-pointer">
        {toggleMenu ? (
          <HiXMark
            size={38}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        ) : (
          <CiMenuFries
            size={38}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        )}
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="flex flex-col w-50 absolute top-20 right-5 p-4 rounded-md space-y-4 backdrop-blur-2xl border border-white/30 z-50"
          >
            {navItems.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="text-xl text-center text-white/70 hover:text-white"
              >
                {item.title}
              </a>
            ))}
            <div className="flex flex-col justify-center items-center space-y-4">
              {status === "unauthenticated" && (
                <a href="/access">
                  <button className="cursor-pointer px-4 py-2 bg-white/5 backdrop-blur-sm outline outline-white/30 text-white/80 rounded-full text-sm hover:bg-gradient-to-br hover:from-blue-700 hover:to-purple-500  hover:outline-none hover:text-white duration-300 transition">
                    Access Innovex
                  </button>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
