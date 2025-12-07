"use client";
import { brands } from "@/src/data/export";
import { div } from "motion/react-m";
import Image from "next/image";

export default function Brands() {
  return (
    <div className="relative flex items-center w-full h-20 overflow-hidden bg-white/70">
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
