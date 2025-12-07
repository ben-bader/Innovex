"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { Event } from "@/src/hooks/useEvents";

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            key={event.id}
            className="flex flex-col justify-between rounded-xl bg-white/5 h-[24rem] backdrop-blur-3xl border border-white/20"
        >
            <div className="relative w-full h-48">

                    <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="rounded-t-xl object-cover"
                    />
            </div>
            <div className="p-4 flex flex-col gap-1">
                <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                <p className="text-gray-300 text-xs flex gap-2 items-center">
                    {event.date}
                    {event.time ? ` - ${event.time}` : ""}
                    <span className="w-[1px] h-3 bg-gray-300" />
                    {event.city ? `  ${event.city}` : ""}
                    {event.country ? `, ${event.country}` : ""}
                </p>
                {event.category && (
                    <p className="text-gray-300 text-sm">Category: {event.category}</p>
                )}
                {event.venue && (
                    <p className="text-gray-300 text-sm mb-2">Venue: {event.venue}</p>
                )}
                <div className="flex mt-2">
                    <Button text="Get Ticket ->" href={`/main/events/${event.id}`} />
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard
