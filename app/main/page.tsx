"use client";
import About from "@/src/components/main/About";
import Brands from "@/src/components/main/Brands";
import Categories from "@/src/components/main/Categories";
import Hero from "@/src/components/main/Hero";
import Events from "@/src/components/main/Events";
import Contact from "@/src/components/main/Contact";


export default function Home() {
  
  return (
    <>
        <Hero />
        <About />
        <Categories />
        <Events />
        <Brands />
        <Contact/>
    </>
  );
}
