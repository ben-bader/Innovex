"use client";
import Image from "next/image";
import { events } from "@/data/events";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Upcoming Tech Events 🚀
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map(event => (
          <div
            key={event.id}
            className="backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-300 mb-1">{event.date}</p>
              <p className="text-sm text-gray-400 mb-3">{event.location}</p>
              <p className="text-gray-200 text-sm mb-4">
                {event.description}
              </p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
