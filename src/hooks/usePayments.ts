"use client";

import { useState, useEffect } from "react";
import { Event } from "@/src/hooks/useEvents";

export function usePayments() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPayments() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/payments");
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }
        const data = await res.json();
        setEvents(data.events || []);
      } catch (err) {
        throw new Error("Error");
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  return { events, loading, error };
}
