"use client";

import { motion } from "framer-motion";
import Button from "@/src/UI/Button";

import { useEvents } from "../../hooks/useEvents";
import Loader from "@/src/UI/Loader";
import { useSession } from "next-auth/react";
import EventCard from "@/src/UI/EventCard";

export default function Events() {
  const { data: session, status } = useSession();
  const { events, loading } = useEvents();

  return (
    <section
      id="events"
      className="flex flex-col relative items-center justify-center gap-10 lg:py-16 px-20 max-sm:px-6 max-sm:py-8"
    >
      <div className="w-96 h-96 bg-purple-500 blur-[180px] absolute right-0 top-56 -z-10" />
      <div className="w-[20rem] h-[30rem] bg-gradient-to-b from-teal-400 to-blue-500 blur-[180px] absolute left-0 bottom-0 -z-10" />
      <div className="overflow-hidden flex items-center gap-2 text-lg">
        <div className="w-0.5 h-5 bg-white/80" />
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Events
        </motion.span>
      </div>

      <h1 className="text-5xl md:text-6xl text-center mb-6">
        Upcoming{" "}
        <span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-purple-400">
          Tech
        </span>{" "}
        Events
      </h1>
      <div className="text-center text-gray-300 -mt-8 mb-8">
        <p>
          {" "}
          Explore the next wave of technology through our upcoming events where
          breakthroughs,
          <br /> bold ideas, and future leaders converge.
        </p>
        <div className="w-full flex justify-center mt-4">
          <Button
            href={status === "authenticated" ? "/main/events" : "/access"}
            text="All Events ->"
          />
        </div>
      </div>

      {events.length === 0 ? (
        <p className="text-gray-400">No events found or loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {events.map(
            (event) =>
              event.id <= 6 && <EventCard key={event.id} event={event} />
          )}
        </div>
      )}
    </section>
  );
}
