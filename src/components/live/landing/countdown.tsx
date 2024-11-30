"use client";
import { useState, useEffect } from "react";
import data from "@/data/config";

const Digits = ({ value, text }: { value: number; text: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mb-0 mr-1 flex w-8 items-center justify-center font-netron text-lg font-bold md:mr-2 md:w-14 md:text-2xl">
        {String(Math.floor(value / 10))}
        {value % 10}
      </p>
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
    <div className="grid grid-cols-4 gap-10 font-netron text-rosehack-white">
      {Object.entries(time).map(([text, value], index) => (
        <Digits key={index} text={text} value={value} />
      ))}
    </div>
  );
};

export default Countdown;
