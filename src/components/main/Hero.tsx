"use client";
import Button from "@/src/UI/Button";
import { people } from "@/public/Data/export";
import EventCountdown from "@/src/UI/EventCountDown";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEvents } from "../../hooks/useEvents";
import Loader from "@/src/UI/Loader";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const { events, loading } = useEvents();
  if (loading || events.length === 0) {
    return <Loader />;
  }
  return (
    <section
      id="hero"
      className="flex max-sm:flex-col items-center justify-between max-sm:justify-center px-20 pt-50 pb-20 max-sm:px-6 text-center"
    >
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px] top-0 -z-1" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-start flex w-full flex-col justify-center -mt-36"
      >
        <span className="text-sm text-center w-30 py-1 bg-pink-500 rounded-full mb-2">
          {events[0].date}
        </span>
        <h1 className="lg:text-7xl text-5xl mb-6">{events[0].name}</h1>
        <p className="lg:text-lg text-sm text-gray-300 max-w-md">
          {events[0].description}
        </p>
        <div className="flex items-center space-x-2 text-lg my-4">
          <div className="flex">
            {people.map((prs) => (
              <Image
                key={prs.id}
                src={prs.img}
                alt={`${prs.id}`}
                width={35}
                height={40}
                className="-ml-2 object-contain first:ml-0 rounded-full border-2 border-purple-500"
              />
            ))}
          </div>
          <p className="text-sm">+256 people bought tickets</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            text="Buy Ticket ->"
            href={
              status === "authenticated"
                ? `/main/events/${events[0].id}`
                : "/access"
            }
          />
          <button className="px-4 max-md:px-3 py-3 text-lg max-md:text-md cursor-pointer text-white/80 hover:text-white transition">
            Learn More
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="flex items-center justify-center gap-6 max-sm:mt-12 -mt-56"
      >
        <div className="absolute pointer-events-none w-[300px] h-[300px] div-gradient-01 rounded-full -z-1" />
        <EventCountdown targetDate={new Date(events[0].date)} />
      </motion.div>
    </section>
  );
}
