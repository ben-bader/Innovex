"use client";

import { useEvents, Event } from "@/src/hooks/useEvents";
import { useFavorites } from "@/src/hooks/useFavorites";
import EventCard from "@/src/UI/EventCard";

export default function FavoritesPage() {
  const { events, loading: eventsLoading } = useEvents();
  const { favorites, loading: favLoading } = useFavorites();

  if (eventsLoading || favLoading) return <p className="text-center  mt-10 text-gray-400">Loading Favorite Events...</p>;


  const favoriteEvents: Event[] = events.filter((event) =>
    favorites.includes(event.id)
  );

  if (favoriteEvents.length === 0)
    return <p className="text-center mt-10 text-gray-400">No favorite events yet.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favoriteEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
