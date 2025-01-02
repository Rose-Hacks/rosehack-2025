"use client";
import { useState, useEffect } from "react";
import data from "@/data/config";

const Digits = ({ value, text }: { value: number; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-2 last:hidden sm:last:flex">
      <div className="m-0 mb-0 flex gap-1 lg:!gap-1">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <p
              className="flex items-center justify-center rounded-lg bg-rosehack-darkgreen p-3 font-netron text-lg font-bold text-white lg:min-w-11 lg:p-3 lg:text-2xl"
              key={index}
            >
              {digit}
            </p>
          ))}
      </div>
      <p className="font-montserrat text-xs md:text-sm">{text}</p>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // const diff = data.date - new Date();
      const diff = new Date(data.date).getTime() - new Date().getTime();
      setTime({
        days:
          Math.floor(diff / (1000 * 60 * 60 * 24)) > 0
            ? Math.floor(diff / (1000 * 60 * 60 * 24))
            : 0,
        hours:
          Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : 0,
        minutes:
          Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            : 0,
        seconds:
          Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60 > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60
            : 0,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex gap-6 font-netron font-bold text-rosehack-white">
      {Object.entries(time).map(([text, value], index) => (
        <Digits key={index} text={text} value={value} />
      ))}
    </div>
  );
};

export default Countdown;
