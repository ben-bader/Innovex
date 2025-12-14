"use client";

import { useEffect, useState, useCallback } from "react";
import { Event } from "./useEvents";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/favorites");
      if (!res.ok) return null;

      const data = await res.json();
      setFavorites(data.events.map((e: Event) => e.id));
    } catch (err) {
      setFavorites([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

 // dir 9elb to toggle  
  const toggle = useCallback(
    async (eventId: number) => {
      try {
        if (favorites.includes(eventId)) {
          // DELETE request ila kan f database
          await fetch(`/api/favorites/${eventId}`, { method: "DELETE" });
          setFavorites((prev) => prev.filter((id) => id !== eventId));
        } else {
          // POST request ila makanch
          await fetch("/api/favorites", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ eventId }),
          });
          setFavorites((prev) => [...prev, eventId]);
        }
      } catch (err) {
        
      }
    },
    [favorites]
  );

  return { favorites, toggle, loading, reload: load };
}
