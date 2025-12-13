"use client";

import { useEvents, Event } from "@/src/hooks/useEvents";
import Button from "@/src/UI/Button";
import EventCard from "@/src/UI/EventCard";
import Loader from "@/src/UI/Loader";
import { useParams } from "next/navigation";

const CategoryPage:  React.FC = () => {
  const { category } = useParams();
  const { events, loading } = useEvents();
  const eventsCategory: Event[] | undefined = events.filter(
    (e: Event) =>
      e.category.toLowerCase() === category?.toString().toLowerCase()
  );
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div className="px-20 max-sm:px-10 py-16 flex flex-col gap-16">
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px] top-0 -z-1" />
      <div className="flex flex-col gap-8 ">
        <h1 className="text-6xl max-sm:text-4xl text-center">
          Explore the{" "}
          <span className="font-squid text-transparent bg-clip-text  bg-gradient-to-tr from-blue-700 to-purple-400">
            {category}
          </span>{" "}
          category
        </h1>
        <div className="flex justify-center">
          <Button text="Explore All Events ->" href="/main/events" />
        </div>
      </div>
      <div className="grid relative grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div className="absolute pointer-events-none w-[20rem] max-sm:w-[10rem] h-[30rem] bg-sky-500 blur-[200px] rounded-tl-[300px] right-0 top-[20%]" />
        <div className="absolute pointer-events-none w-[400px] h-[400px] rounded-full bg-fuchsia-400 blur-[200px] rounded-tl-[300px] -left-0 top-[90%]" />
        {eventsCategory.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
