"use client";
import { useEvents, Event } from "@/src/hooks/useEvents";
import Loader from "@/src/UI/Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import EventCard from "@/src/UI/EventCard";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Events() {
  const { data: session, status } = useSession();
  const { events, loading } = useEvents();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.back();
  }

  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const filtredEvents = useMemo(() => {
    return events.filter((event: Event) => {
      return (
        (category
          ? event.category.toLowerCase() === category.toLowerCase()
          : true) &&
        (country
          ? event.country.toLowerCase() === country.toLowerCase()
          : true) &&
        (city ? event.city.toLowerCase() === city.toLowerCase() : true)
      );
    });
  }, [events, category, country, city]);


  if (loading || events.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-white">
        <Loader />
      </div>
    );
  }

  return (
    <section 
      className={`min-h-screen w-full px-20 max-sm:px-10 py-12 relative `}
    >
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px]   top-0 -z-1" />
      <div
        className={`absolute pointer-events-none w-[20rem] h-[30rem] bg-sky-500 blur-[100px] rounded-tl-[300px] right-0 top-[20%] -z-1`}
      />
      <div
        className={`absolute pointer-events-none w-[400px] h-[400px] blur-[200px] bg-fuchsia-400 rounded-tl-[300px] left-0 top-[50%] -z-1`}
      />
      <h1 className="text-5xl md:text-6xl text-center mb-8 z-50">
        Upcoming{" "}
        <span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-purple-400">
          Tech
        </span>{" "}
        Events
      </h1>
      <p className="text-center text-gray-300">
        Experience the forefront of technology at our upcoming events,  where breakthroughs, bold thinking,<br /> and emerging leaders converge.
      </p>
      <div className="my-12 max-w-full max-sm:flex-col max-sm:gap-4 flex flex-1 space-x-4">
        <div className="flex  items-center gap-4">
          <h1>Category:</h1>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="focus:outline-none"
          >
            <option value="" className="bg-gray-800">All</option>
            <option value="AI" className="bg-gray-800">AI</option>
            <option value="Cloud" className="bg-gray-800">Cloud</option>
            <option value="Cybersecurity" className="bg-gray-800">Cybersecurity</option>
            <option value="Development" className="bg-gray-800">Development</option>
            <option value="Data Science" className="bg-gray-800">Data Science</option>
          </select>
        </div>
        <div className="flex items-center gap-4 max-sm:gap-2">
          <h1>Country:</h1>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="focus:outline-none"
          >
            <option value="" className="bg-gray-800">All</option>
            <option value="UK" className="bg-gray-800">UK</option>
            <option value="France" className="bg-gray-800">France</option>
            <option value="USA" className="bg-gray-800">USA</option>
            <option value="Spain" className="bg-gray-800">Spain</option>
            <option value="Australia" className="bg-gray-800">Australia</option>
            <option value="Austria" className="bg-gray-800">Austria</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <h1>City: </h1>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="focus:outline-none "
          >
            <option value="" className="bg-gray-800">All</option>
            <option value="London" className="bg-gray-800">London</option>
            <option value="Paris" className="bg-gray-800">Paris</option>
            <option value="New York" className="bg-gray-800">New York</option>
            <option value="Madrid" className="bg-gray-800">Madrid</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtredEvents.length > 0 ? (
          filtredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-center col-span-3">
            No events found matching the selected filters.
          </p>
        )}
      </div>
    </section>
  );
}
