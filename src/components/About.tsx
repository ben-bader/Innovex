"use client";

import dynamic from "next/dynamic";
import { Activity, Radio,Bell, Calendar ,MapPin,Users} from "lucide-react";
import { motion } from "framer-motion";
import {events,people} from "@/src/data/export";
import Image from "next/image";
import { style } from "motion/react-client";

const Chart = dynamic(() => import("react-apexcharts"),{ssr :false});

export default function About() {
  const options = {
    chart: { id: "events-chart", toolbar: false ,

      
    },
 
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
      labels: { style: { colors: "transparent" } },
    },
    yaxis: { labels: { style: { colors: "#e4e4e4" } } },
    colors: ["#0000ff"],
    stroke: {
      width: 3,
    },
    tooltip: {
      enabled: true,
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

  const series = [{ name: "Tech Events", data: [20, 0, 0, 30, 40, 30, 60] }];

  return (
    <div 
    id="about"
    className="relative max-sm:overflow-hidden flex flex-col px-20 py-16 max-md:px-8">
      <div className="absolute pointer-events-none bg-cyan-600 rounded-full !blur-[190px] opacity-80 top-0 right-0  w-[40rem] max-md:w-[10rem] h-[40rem] -z-1" />
      <div className="absolute pointer-events-none bg-fuchsia-800 rounded-full !blur-[190px] opacity-80 bottom-[-10%] left-[-20%]  w-[40rem] max-md:w-[18rem] h-[40rem] -z-50" />
      <div className="flex items-center justify-center w-full mb-5">
        <div className="overflow-hidden flex items-center gap-2 text-lg "><div className="w-0.5 h-5 bg-white/80"/>{" "}<motion.span 
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        
        >About</motion.span></div>
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
          Discover and explore tech events worldwide.{" "}Find and keep track of the
          latest gatherings, <br /> conferences, workshops, and social meetups
          the world.
        </p>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-4 gap-4 grid-rows-2 max-sm:flex max-sm:flex-col py-12">
        {/* first block */}
        <motion.div
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.8,ease:"easeInOut"}}
        viewport={{once:false,amount:0.1}}
         className="col-span-3 row-span-1 overflow-hidden flex flex-col gap-4 bg-white/5 rounded-2xl h-96 lg:px-8 px-4 lg:pt-8 pt-4 pb-0 border border-white/40 backdrop-blur-3xl">
          <div className="flex items-center space-x-4 ">
            <Activity className="w-10 h-10 p-2 bg-gray-900 rounded-md" />
            <h1 className="text-lg">Events anlytics</h1>
          </div>
          <h1 className="lg:text-2xl font-bold">
            Monitor trends and discover the hottest tech events in real-time
          </h1>
          <div className="flex flex-col lg:w-3xl w-lg h-60 bg-white/10 rounded-tl-2xl lg:px-4 px-2 lg:py-6 py-3 backdrop-blur-3xl">
            <p className="lg:text-sm text-gray-300 mb-2">Monthly Events</p>
            <h1 className="text-3xl flex items-center">
              60
              <span className="p-1 text-sm bg-green-400/10 text-green-300 rounded-full ml-2">
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
        initial={{opacity:0,x:50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.8,ease:"easeInOut"}}
        viewport={{once:false,amount:0.1}}
        className="flex flex-col gap-4 col-span-1 row-span-1 rounded-2xl h-96 backdrop-blur-3xl bg-white/5 border border-white/40 lg:px-8 px-4 lg:py-8 py-4">
          <div className="flex items-center space-x-4">
            <Radio className="w-10 h-10 p-2 bg-gray-900 rounded-md" />
            <h1 className="text-lg">Live events</h1>
          </div>
          <h1 className="lg:text-2xl font-bold">
            Number of events happening now
          </h1>
          <div className="flex items-center w-full relative justify-center">
            <motion.div
              initial={false}
              whileInView={{ scale: [ 1, 1.2,1], opacity: [1,0] }}
              transition={{
                duration:2,
                ease: "easeInOut",
                repeat: Infinity,
                
              }}
              viewport={{once:false,amount:0.1}}
              className="absolute w-[100px] aspect-square -z-50 justify-center border-3 border-pink-500 rounded-full"
            />
            <div className="flex items-center justify-center p-5 text-5xl w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-400">
              48
            </div>

          </div>
          <h1 className="text-center font-semibold text-lg">Live Event</h1>
        </motion.div>
        {/* third block */}
        <motion.div
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.8,ease:"easeInOut"}}
        viewport={{once:false,amount:0.1}}
        className="flex flex-col gap-4 col-span-2 row-span-1 bg-white/5 h-96 backdrop-blur-3xl rounded-2xl border border-white/40 lg:px-8 px-4 lg:py-8 py-4">
              <div className="flex items-center space-x-4">
                <Bell className="w-10 h-10 p-2 bg-gray-900 rounded-md"/>
                <h1 className="text-lg">Smart reminders</h1>
              </div>
              <h1 className="lg:text-2xl text-lg font-bold">Upcomming events</h1>
              <div className="flex flex-col gap-4">
                {events.map((event)=>(
                    event.id < 3 ? 
                        <div key={event.id} className="flex items-center p-2 space-x-2 rounded-md bg-white/10 border border-white/50 backdrop-blur-3xl">
                            <Calendar className="w-8 h-8"/>
                            <div className="flex flex-col">
                            <h1 className="text-lg">{event.title}</h1>
                            <p className="flex items-center text-gray-300 gap-1 text-sm" ><MapPin className="w-4"/>{event.location} </p>
                            <p className="text-gray-300">{event.date}</p>
                            </div>
                        </div>
                    : ""
                ))}
              </div>
        </motion.div>
        {/*forth block */}
        <motion.div
        initial={{opacity:0,x:50}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.8 ,ease:"easeInOut"}}
        viewport={{once:false,amount:0.1}}
        className="flex flex-col gap-4 col-span-2 row-span-1 h-96 bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/40  lg:px-8 px-4 lg:py-8 py-4 overflow-hidden">
            <div className="flex items-center space-x-4">
                <Users className="w-10 h-10 p-2 bg-gray-900 rounded-md"/>
                <h1 className="text-lg">Community</h1>
            </div>
            <h1 className="lg:text-2xl text-lg font-bold">Connect with innovators</h1>
            <div className="flex max-sm:flex-col items-center gap-4 ">
                <div className="flex">
                {people.map((prs)=>(
                    <Image key={prs.id} src={prs.img} alt={`${prs.id}`} width={40} height={30} className="first:ml-0 -ml-2 border-2 border-blue-500 rounded-full"/> 
                ))}
                <div className="-ml-2 justify-center flex items-center text-sm rounded-full border-2 border-blue-400 bg-blue-400 w-10">
                    +10k
                </div>
                </div>
                <h1 className="text-xl">
                Visited{" "}<span className="font-squid text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-purple-400">innovex</span>{" "}last month. 
                </h1>
            </div>
            <div className="flex items-center">
                <Image src="/Images/world-tech.png" alt="world" width={500} height={50} className="absolute -z-50 lg:-bottom-[60%] bottom-[-30%] left-[0%] w-[50rem] rotate-90"/>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
