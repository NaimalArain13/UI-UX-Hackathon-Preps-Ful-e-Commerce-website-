"use client";
import { useState, useEffect } from "react";

export default function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const launchDate = new Date("January 15, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const gap = launchDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      setTimeLeft({
        days: Math.floor(gap / day),
        hours: Math.floor((gap % day) / hour),
        minutes: Math.floor((gap % hour) / minute),
        seconds: Math.floor((gap % minute) / second),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="">
       
        
        

        <div className="flex gap-6">
          <div>
            Days
            <span className="flex flex-col items-center text-Text2 font-bold text-3xl">
              {timeLeft.days}
            </span>{" "}
          </div>
          <p className="text-Secondary2 font-extrabold items-center flex">:</p>
          <div>
            Hours
            <span className="flex flex-col items-center text-Text2 font-bold text-3xl">
              {timeLeft.hours}
            </span>{" "}
          </div>
          <p className="text-Secondary2 font-extrabold items-center flex">:</p>
          <div>
            Minutes
            <span className="flex flex-col items-center text-Text2 font-bold text-3xl">
              {timeLeft.minutes}
            </span>{" "}
          </div>
          <p className="text-Secondary2 font-extrabold items-center flex">:</p>
          <div>
            Seconds
            <span className="flex flex-col items-center text-Text2 font-bold text-3xl">
              {timeLeft.seconds}
            </span>{" "}
          </div>
        </div>
       
      </div>
   
  );
}