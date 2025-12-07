"use client";
import React from "react";
import dynamic from "next/dynamic";
import {motion}  from "framer-motion";
import { randInt } from "three/src/math/MathUtils.js";

const Countdown = dynamic(()=> import("react-countdown"),{ssr : false})

function DateCard({text, number, bg, border}: {text?: string; number?: number; bg?: string; border?: boolean;}) {
    

    // keep the existing JSX (which references the countdown) in sync

    return (
        <motion.div
        initial={{opacity : 0,y:randInt(50,100)}}
        animate={{opacity : 1,y:0}}
        transition={{duration:0.3,ease:"easeIn"}}
        className={`flex flex-col ${border ? "border border-white/50" : ""} backdrop-blur-xl py-6 px-4 w-36 shadow-2xl rounded-lg ${bg}`}
        >
        <span className="text-start font-bold text-8xl">{number}</span>
        <span className="text-start font-squid ">{text}</span>
        </motion.div>
    )
}
const renderer = ({ days, hours, minutes, seconds } : { days: number; hours: number; minutes: number; seconds: number;}) => {

    // Render countdown
    return (
      <div className="flex items-center justify-center gap-6 max-sm:mt-12">

        <div className="flex flex-col gap-6 translate-y-12">
          <DateCard text="Days" number={days} bg="bg-white/05" border/>
          <DateCard text="Minutes" number={minutes} bg="bg-white/40" />
        </div>
        <div className="flex flex-col gap-6">
          <DateCard text="Hours" number={hours} bg="bg-white/40" />
          <DateCard text="Seconds" number={seconds} bg="bg-white/40"/>
        </div>
      </div>
      
    );
  };

export default function EventCountdown({ targetDate } :{ targetDate: Date}) {
  return <Countdown date={targetDate} renderer={renderer} />;
}
