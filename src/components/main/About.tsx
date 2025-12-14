"use client";

import dynamic from "next/dynamic";
import { Activity, Radio, Bell, Ticket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { people } from "@/public/data/export";
import Image from "next/image";
import { useEvents } from "../../hooks/useEvents";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const About: React.FC = () => {
  const options = {
    chart: {
      id: "events-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
      labels: { style: { colors: "transparent" } },
    },
    yaxis: { labels: { style: { colors: "#e4e4e4" } } },
    colors: ["#1414ff"],

    stroke: {
      width: 3,
    },
    tooltip: {
      theme: "dark",
    },
    markers: {
      size: 5,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
  };

  const series = [{ name: "Tech Events", data: [20, 0, 0, 35, 50, 35, 60] }];

  const { events } = useEvents();

  return (
    <section
      id="about"
      className="relative max-sm:overflow-hidden flex flex-col px-20 pt-16 max-md:px-6"
    >
      <div className="absolute pointer-events-none bg-cyan-600 rounded-full !blur-[190px] opacity-80 top-0 right-0  w-[40rem] max-md:w-[10rem] h-[40rem] -z-1" />
      <div className="absolute pointer-events-none bg-fuchsia-800 rounded-full !blur-[200px] opacity-80 bottom-[-10%] left-[-20%]  w-[40rem] max-md:w-[18rem] h-[40rem] -z-50" />
      <div className="flex items-center justify-center w-full mb-5">
        <div className="overflow-hidden flex items-center gap-2 text-lg ">
          <div className="w-0.5 h-5 bg-white/80" />{" "}
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            About
          </motion.span>
        </div>
      </div>

      <div className="text-center flex flex-col">
        <h1 className="lg:text-5xl text-4xl">
          About{" "}
          <span className="font-squid bg-clip-text text-transparent bg-gradient-to-tr from-blue-700 to-purple-400">
            innovex
          </span>{" "}
          Event Explorer
        </h1>
        <p className="text-md max-md:text-xs mt-4 text-gray-200">
          Discover and explore tech events worldwide. Find and keep track of the
          latest gatherings, <br /> conferences, workshops, and social meetups
          the world.
        </p>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-8 gap-4 grid-rows-2 max-sm:flex max-sm:flex-col py-12">
        {/* first block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="col-span-5 row-span-1 overflow-hidden flex flex-col gap-2 bg-white/5 rounded-2xl h-80 lg:px-6 px-4 lg:pt-6 pt-4 border border-white/30 backdrop-blur-3xl"
        >
          <div className="flex items-center space-x-4 ">
            <Activity className="w-10 h-10 p-2 bg-black rounded-md" />
            <h1 className="text-lg">Events anlytics</h1>
          </div>
          <h1 className="lg:text-2xl text-xl font-bold">
            Monitor trends and discover the hottest tech events in real-time
          </h1>
          <div className="flex flex-col lg:w-2xl w-lg lg:h-60 h-56 bg-white/10 rounded-tl-2xl lg:px-4 px-3 lg:py-4 py-3 backdrop-blur-3xl">
            <p className="lg:text-sm text-gray-300 mb-2">Monthly Events</p>
            <h1 className="text-2xl flex items-center -mb-5">
              60
              <span className="p-1 text-xs bg-green-300/30 text-green-400 rounded-full ml-2">
                +45%
              </span>
            </h1>
            <Chart
              options={options}
              series={series}
              type="line"
              width="90%"
              height="80%"
            />
          </div>
        </motion.div>
        {/* second block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col justify-between max-sm:justify-start gap-2 col-span-3 row-span-1 rounded-2xl h-80 backdrop-blur-3xl bg-white/5 border border-white/30 lg:p-6 p-4"
        >
          <div className="flex items-center space-x-4">
            <Radio className="w-10 h-10 p-2 bg-black rounded-md" />
            <h1 className="text-lg">Live events</h1>
          </div>
          <h1 className="text-2xl font-bold lg:-mt-8">
            Number of events happening now
          </h1>
          <div className="flex items-center w-full relative max-sm:mt-8 justify-center">
            <motion.div
              initial={false}
              whileInView={{ scale: [1, 1.2, 1], opacity: [1, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute w-[120px] aspect-square -z-50 justify-center border-3 border-pink-500 rounded-full"
            />
            <div className="flex flex-col items-center justify-center p-2 text-5xl w-[115px] aspect-square rounded-full bg-gradient-to-br  from-pink-500 to-purple-400">
              12
              <p className="text-xs">Live Events</p>
            </div>
          </div>
        </motion.div>
        {/* third block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col gap-4 col-span-4 row-span-1 bg-white/5 h-80 backdrop-blur-3xl rounded-2xl border border-white/30 lg:p-6 p-4"
        >
          <div className="flex items-center space-x-4">
            <Bell className="w-10 h-10 p-2 bg-black rounded-md" />
            <h1 className="text-lg">Smart reminders</h1>
          </div>
          <h1 className="text-2xl font-bold -my-2">Upcomming events</h1>
          <div className="flex flex-col gap-4">
            {events.map((event) =>
              event.id < 3 ? (
                <a
                  key={event.id}
                  href={`/main/events/${event.id}`}
                  className="flex items-center py-2 px-3 space-x-2 cursor-pointer rounded-md bg-white/10  backdrop-blur-3xl active:scale-[0.99]"
                >
                  <Ticket className="w-10 h-10 max-sm:hidden p-1" />
                  <span className="flex flex-col gap-1 ">
                    <h1 className="lg:text-xl text-md ">{event.name}</h1>
                    <p className="text-gray-300 text-xs -mb-1">{event.venue}</p>
                    <p className="flex items-center gap-[2px] text-gray-300 text-xs ">
                      {event.city}{" "}
                      <span className="w-[1px] h-3 bg-gray-300 mx-1" />{" "}
                      {event.date}
                    </p>
                  </span>
                </a>
              ) : (
                ""
              )
            )}
          </div>
        </motion.div>
        {/*forth block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col gap-4 col-span-4 row-span-1 h-80 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/30  lg:p-6 p-4 overflow-hidden"
        >
          <div className="flex items-center space-x-4">
            <Users className="w-10 h-10 p-2 bg-black rounded-md" />
            <h1 className="text-lg">Community</h1>
          </div>
          <h1 className="lg:text-2xl text-lg font-bold">
            Connect with innovators
          </h1>
          <div className="flex max-sm:flex-col items-center gap-4 ">
            <div className="flex">
              {people.map((prs) => (
                <Image
                  key={prs.id}
                  src={prs.img}
                  alt={`${prs.id}`}
                  width={40}
                  height={30}
                  className="first:ml-0 -ml-2 border-2 border-blue-500 rounded-full"
                />
              ))}
              <div className="-ml-2 justify-center flex items-center text-sm rounded-full border-2 border-blue-400 bg-blue-400 w-10">
                +10k
              </div>
            </div>
            <h1 className="text-xl">
              Visited{" "}
              <span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-purple-400">
                innovex
              </span>{" "}
              last month.
            </h1>
          </div>
          <div className="flex items-center">
            <Image
              src="/Images/woman_looking_up.png"
              alt="world"
              width={350}
              height={10}
              className="absolute lg:left-10 -z-10 bottom-[-0px] drop-shadow-sky-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;