"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 360 360"
      >
        <g
          stroke="oklch(70.7% 0.165 254.624)"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <line x1="120" y1="0" x2="120" y2="360" />
          <line x1="240" y1="0" x2="240" y2="360" />

          <line x1="0" y1="120" x2="360" y2="120" />
          <line x1="0" y1="240" x2="360" y2="240" />
        </g>

        <g
          stroke="oklch(71.4% 0.203 305.504)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="20" y1="20" x2="100" y2="100" />
          <line x1="100" y1="20" x2="20" y2="100" />

          <line x1="140" y1="140" x2="220" y2="220" />
          <line x1="220" y1="140" x2="140" y2="220" />
        </g>

        <g
          stroke="oklch(70.7% 0.165 254.624)"
          fill="oklch(70.7% 0.165 254.624)"
          strokeWidth="10"
        >
          <circle cx="60" cy="180" r="44" />

          <circle cx="300" cy="300" r="44" />
        </g>
      </svg>

      <h1 className="font-squid text-2xl text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-purple-400">innovex</h1>
    </div>
  );
};
export default Logo;
