"use client";
import { motion } from "framer-motion";
import Logo from "@/src/UI/Logo";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

const navItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "#about" },
  { title: "Categories", link: "#categories" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="flex w-full px-20 py-6 max-sm:px-8 max-md:px-2 items-center justify-between space-x-4"
    >
      <Logo />
      <nav className="flex max-sm:hidden justify-center space-x-6 px-8 py-2 backdrop-blur-md rounded-full text-white/90 bg-white/5 border border-white/50">
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
      <div className="flex max-sm:hidden justify-end space-x-4">
        <a href="/Form">
          <button className="cursor-pointer px-4 py-2 text-sm text-white/80 hover:text-white transition">
            Log in
          </button>
        </a>
        <a href="/Form">
          <button className="cursor-pointer px-4 py-2 bg-white/5 backdrop-blur-sm outline outline-white/60 text-white/80 rounded-full text-sm hover:bg-gradient-to-br to-purple-500 from-blue-700 hover:outline-none hover:text-white duration-300 transition">
            Get Started
          </button>
        </a>
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
            className="flex flex-col w-50 absolute top-20 right-5 p-4 rounded-md space-y-4 backdrop-blur-2xl border border-white/50"
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
            <div className="flex flex-col justify-end space-y-1">
              <button className="cursor-pointer px-4 py-2 text-lg text-white/80 hover:text-white transition">
                Log in
              </button>
              <button className="px-4 py-2 bg-blue-500 backdrop-blur-sm outline-white/60 text-white/80 rounded-full text-md hover:bg-blue-600 hover:text-white duration-300 transition">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
