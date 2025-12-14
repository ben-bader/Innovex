"use client";

import { Ticket } from "lucide-react";
import { usePayments } from "@/src/hooks/usePayments";
import { randInt } from "three/src/math/MathUtils.js";

const Payments: React.FC = () => {
  const { events, loading, error } = usePayments();

  if (loading) return <p className="text-gray-400 text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (events.length === 0)
    return <p className="text-center mt-10">No payments found.</p>;

  return (
    <div className="flex flex-col gap-6 relative">
      <div className="w-80 h-80 bg-linear-to-bl from-blue-500 to-teal-500 absolute rounded-full right-0 top-0 blur-[180px] -z-50" />
      {events.map((event) => (
        <a
          key={randInt(0,8**100)}
          href={`/main/events/${event.id}`}
          className="flex items-center justify-between py-3 px-5 cursor-pointer rounded-md bg-white/10  backdrop-blur-3xl active:scale-[0.99]"
        >
          <span className="flex items-center gap-2">
            <Ticket className="w-10 h-10 max-sm:hidden p-1" />
            <span className="flex flex-col gap-1 ">
              <h1 className="lg:text-xl text-md ">{event.name}</h1>
              <p className="text-gray-300 text-xs -mb-1">{event.venue}</p>
              <p className="flex items-center gap-[2px] text-gray-300 text-xs ">
                {event.city} <span className="w-[1px] h-3 bg-gray-300 mx-1" />{" "}
                {new Date(event.date).toISOString().split("T")[0]}
              </p>
            </span>
          </span>
          {event.price && <p>{(event.price / 100).toFixed(2)}$</p>}
        </a>
      ))}
    </div>
  );
};
export default Payments;
