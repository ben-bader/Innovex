"use client";
import Button from "../UI/Button";
import { events, people } from "@/src/data/export";
import EventCountdown from "@/src/UI/EventCountDown";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div
      id="hero"
      className="flex max-sm:flex-col items-center justify-between max-sm:justify-center px-20 pt-44 pb-20 max-sm:px-4 text-center"
    >
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px] top-0 -z-1" />
      <div className="text-start flex flex-col justify-center -mt-36">
        <span className="text-sm text-center w-30 py-1 bg-pink-500 rounded-full mb-2">
          {events[0].date}
        </span>
        <h1 className="lg:text-7xl text-5xl mb-6">
          {events[0].title}
        </h1>
        <p className="lg:text-lg text-md text-gray-300 max-w-md">{events[0].description}</p>
        <div className="flex items-center space-x-2 text-lg my-6">
          <div className="flex">
            {people.map((prs) => (
              <Image
                key={prs.id}
                src={prs.img}
                alt={`${prs.id}`}
                width={40}
                height={40}
                className="-ml-2 object-contain first:ml-0 rounded-full border-2 border-purple-500"
              />
            ))}
          </div>
          <div>+ 256 people bought tickets</div>
        </div>
        <div className="flex gap-4">
          <Button text="Buy a ticket" />
          <button className="px-6 py-3 text-lg cursor-pointer font-squid uppercase text-white/80 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 max-sm:mt-12 -mt-36">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,ease:"easeInOut"}}
        className="absolute pointer-events-none w-[300px] h-[300px] div-gradient-01 rounded-full -z-1" />
        <EventCountdown targetDate={new Date(events[0].date)} />
      </div>
    </div>
  );
}
