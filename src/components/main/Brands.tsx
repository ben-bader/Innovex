"use client";
import { brands } from "@/public/data/export";
import Image from "next/image";
import React from "react";

const Brands:React.FC = () => {
  return (
    <div className="relative flex items-center w-full h-20 overflow-hidden backdrop-blur-3xl bg-white/20">
      <div className="flex items-center gap-16 scroll-infinite">
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.img}
            alt={brand.name}
            width={100}
            height={30}
            className="object-contain"
          />
        ))}
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.img}
            alt={brand.name}
            width={120}
            height={30}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}
export default Brands;