"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../UI/Button";

// TypeScript type for an event
interface Event {
  id: string;
  name: string;
  url: string;
  date: string;
  time?: string | null;
  venue?: string | null;
  city?: string | null;
  country?: string | null;
  category?: string | null;
  image?: string;
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/data.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();
        setEvents(data.events || []);
      } catch (error) {
        console.error("Error loading events:", error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:pb-16 px-20 max-sm:px-10 max-sm:py-8">
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

      {events.length === 0 ? (
        <p className="text-gray-400">No events found or loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 w-full">

          {events.map((event) => (
            <motion.div
              initial={{opacity:0,scale:0.97,y:20}}
              whileInView={{opacity:1,scale:1,y:0}}
              transition={{duration:0.5,ease:"easeInOut"}}
              key={event.id}
              className="flex flex-col justify-between rounded-md bg-white/10 h-[24rem] backdrop-blur-lg border border-gray-400"
            >
              <div className="relative w-full h-48">
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="rounded-t-xl object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p className="text-gray-300 text-xs flex gap-2 items-center">
                  {event.date}
                  {event.time ? ` - ${event.time}` : ""}
                  <span className="w-[1px] h-3 bg-gray-400"/>
                  {event.city ? `  ${event.city}` : ""}
                  {event.country ? `, ${event.country}` : ""}
                </p>
                {event.category && (
                  <p className="text-gray-400 text-sm">Category: {event.category}</p>
                )}
                {event.venue && (
                  <p className="text-gray-400 text-sm">Venue: {event.venue}</p>
                )}

                  <Button text="Get Ticket" href={event.url}/>
             
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
