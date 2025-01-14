"use client";
import { useState } from "react";
import Image from "next/image";
import line from "@/public/assets/schedule/line.svg";
import cloud from "@/public/assets/schedule/clouds.svg";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  return (
    <div className="z-0 flex w-full flex-col items-center justify-center gap-10">
      <div className="mx-auto grid w-10/12 grid-cols-7 items-center justify-between rounded-xl border-4 border-white font-netron text-base md:text-2xl">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center rounded p-2 text-white duration-300 focus:outline-none ${
              selectedDay === day ? "bg-rosehack-gray" : "bg-rosehack-blue-300"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {events.filter(({ day }) => day === selectedDay).length > 0 ? (
        <div className="relative my-10 mt-6 flex h-full w-9/12 flex-col gap-2 text-white">
          <div className="ml-3 grid w-11/12 grid-cols-4 text-center font-bold sm:text-sm md:text-2xl">
            <span className="">Time</span>
            <span className="">Event</span>
            <span className="">Type</span>
            <span className="">Location</span>
          </div>
          <Image
            src={cloud}
            alt="Cloud"
            className="absolute -left-[20%] -top-4 -z-10"
          />
          {/* {console.log(events)} */}
          <div className="z-10 w-full divide-y-4 rounded-xl border-4 border-white p-2">
            {events
              .filter(({ day }) => day === selectedDay)
              .map(({ start, summary, description, location }, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="m-2 flex w-11/12">
                    <Image src={line} alt="line" />
                    <div className="font-workSans m-2 grid w-full grid-cols-4 items-center justify-center rounded-xl bg-gradient-to-r from-rosehack-green to-rosehack-darkgreen px-4 py-3 text-lg font-semibold">
                      <p className="flex justify-start">
                        <span className="rounded-xl bg-rosehack-green-200 p-2 py-1">
                          {new Date(start).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: "America/Los_Angeles",
                          })}
                        </span>
                      </p>
                      <p className="flex w-full justify-start">{summary}</p>
                      <p className="flex justify-center">
                        {description.split("\n")[0].substr(1)}
                      </p>
                      <p className="flex justify-center">
                        <span className="rounded-full bg-rosehack-green-100 p-3">
                          {location}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="border-t- w-9/12 border-white" />
                </div>
              ))}
          </div>
          <Image
            src={cloud}
            alt="Cloud"
            className="absolute -bottom-10 -right-[20%] -z-20"
          />
        </div>
      ) : (
        <div className="text-center text-xl font-bold text-rosehack-white">
          No Events Today. <br /> Please select another day to view an event
        </div>
      )}
    </div>
  );
};

export default Events;
