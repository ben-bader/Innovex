"use client";

import { useEffect, useState, useCallback } from "react";
import { Event } from "./useEvents";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  // Load all favorites for the current user
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/favorites");
      if (!res.ok) return [];

      const data = await res.json();
      setFavorites(data.events.map((e: Event) => e.id));
    } catch (err) {
      console.error(err);
      setFavorites([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Toggle favorite for an event
  const toggle = useCallback(
    async (eventId: number) => {
      try {
        if (favorites.includes(eventId)) {
          // DELETE request
          await fetch(`/api/favorites/${eventId}`, { method: "DELETE" });
          setFavorites((prev) => prev.filter((id) => id !== eventId));
        } else {
          // POST request
          await fetch("/api/favorites", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventId }),
          });
          setFavorites((prev) => [...prev, eventId]);
        }
      } catch (err) {
        console.error(err);
      }
    },
    [favorites]
  );

  return { favorites, toggle, loading, reload: load };
}
