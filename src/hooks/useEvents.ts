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
        const res = await fetch("/data/events.json", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();

        setEvents(data.events || []);
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
