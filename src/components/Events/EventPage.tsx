"use client";
import { useEvents, Event } from "@/src/hooks/useEvents";
import Button from "@/src/UI/Button";
import Loader from "@/src/UI/Loader";
import Image from "next/image";
import { useParams } from "next/navigation";
import { people } from "@/public/data/export";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const EventPage: React.FC = () => {
  const { data: session,status } = useSession();
  const router = useRouter();
   if (status === "unauthenticated") {
    router.back();
  }
  const { events, loading } = useEvents();
  const { id } = useParams();
  const event: Event | undefined = events.find(
    (e: Event) => e.id.toString() === id
  );
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div className="realtive h-screen max-sm:mb-96">
      <div className="absolute pointer-events-none w-[500px] h-[700px] hero-gradient rounded-tl-[300px] -left-[500px]   top-0 -z-1" />
      <div className="flex flex-1 max-sm:flex-col gap-10 justify-center items-center px-20 py-16 max-md:px-10">
        <div>
          <Image
            src={`${event?.image}`}
            alt={`${event?.name}`}
            width={600}
            height={150}
            className="h-90 max-sm:h-56 w-175 border border-white/10"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-sm flex justify-center items-center w-60 gap-1 text-center py-1 bg-pink-500 rounded-full">
            {event?.date} - {event?.time}{" "}
            <span className="w-px h-4 bg-white"></span>
            {event?.city}
          </span>
          <h1 className="text-6xl max-sm:text-5xl">{event?.name}</h1>
          <p className="text-lg text-gray-300">{event?.description}</p>

          <div className="flex items-center space-x-2 text-lg">
            <div className="flex">
              {people.map((prs) => (
                <Image
                  key={prs.id}
                  src={prs.img}
                  alt={`${prs.id}`}
                  width={40}
                  height={40}
                  className="-ml-2 object-contain first:ml-0 rounded-full border-2 border-purple-500"
                />
              ))}
            </div>
            <p className="max-sm:text-sm">+ 256 people bought tickets</p>
          </div>
          <div>
            {event?.price &&
                <p>Ticket Price:  {`${(event?.price / 100).toFixed(2)}`}$</p>
            }
          </div>
          <div className="flex">
            <Button text="Buy a Ticket" href={`/checkout/${event?.id}`} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
