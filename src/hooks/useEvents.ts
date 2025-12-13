"use client";
import { useEffect, useState } from "react";
// hook bach tfetchi events
//type dyal event kan9ado interface evnet
export interface Event {
  id: number;
  name: string;
  url: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  country: string;
  category: string;
  image: string;
  description: string;
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events", { cache: "no-store" });
        if (!res.ok) return [];

        const data = await res.json();
         const formattedEvents = data.map((e: Event) => ({
          ...e,
          date: new Date(e.date).toISOString().split("T")[0], // "YYYY-MM-DD"
        }));
        setEvents(formattedEvents || []);

      } catch (error) {
        console.error("Error loading events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  return { events, loading };
}
