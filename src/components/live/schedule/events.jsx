import { useState, useEffect } from "react";
import Image from "next/image";
import line from "@/public/assets/schedule/line.svg";
import cloud from "@/public/assets/schedule/clouds.svg";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0]?.start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );

  const [currentHour, setCurrentHour] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      hour12: false,
    }),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHour(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          hour12: false,
        }),
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const currentDay = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
  });

  return (
    <div className="z-0 flex w-full flex-col items-center justify-center gap-10">
      <div className="mx-auto grid w-10/12 grid-cols-7 items-center justify-between gap-2 rounded-xl border-4 border-white bg-rosehack-blue-300 font-netron text-xs md:text-xl">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center rounded p-3 text-white duration-300 focus:outline-none ${
              selectedDay === day ? "bg-rosehack-gray" : "bg-transparent"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            <span className="hidden sm:block">{day}</span>
            <span className="block sm:hidden">{day.slice(0, 3)}</span>
          </button>
        ))}
      </div>
      {events.filter(({ day }) => day === selectedDay).length > 0 ? (
        <div className="relative my-10 mt-6 flex h-full w-11/12 flex-col gap-2 text-white duration-300 md:w-9/12">
          <div className="ml-3 grid w-11/12 grid-cols-4 text-center font-bold sm:text-sm md:text-2xl">
            <span>Time</span>
            <span>Event</span>
            <span>Type</span>
            <span>Location</span>
          </div>
          <Image
            src={cloud}
            alt="Cloud"
            className="absolute -left-[20%] -top-4 -z-10 hidden animate-jiggle-6s md:block"
          />
          {/* {console.log(events)} */}
          <div className="z-20 w-full divide-y-4 rounded-xl border-4 border-white p-2">
            {events
              .filter(({ day }) => day === selectedDay)
              .map(({ start, summary, description, location }, index) => {
                const eventHour = new Date(start).toLocaleTimeString("en-US", {
                  timeZone: "America/Los_Angeles",
                  hour: "2-digit",
                  hour12: false,
                });
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="m-2 flex w-full md:w-11/12">
                      <Image
                        src={line}
                        alt="line"
                        className="hidden md:block"
                      />
                      <div
                        className={`font-workSans grid w-full grid-cols-4 items-center justify-center rounded-xl px-2 py-3 text-xs font-semibold md:m-2 md:px-4 md:py-3 md:text-lg ${
                          selectedDay === currentDay &&
                          currentHour === eventHour
                            ? "bg-gradient-to-r from-rosehack-green-300 to-rosehack-green-400"
                            : "bg-transparent"
                        }`}
                      >
                        <p className="flex justify-start">
                          <span className="rounded-xl bg-rosehack-green-200 p-1 py-1 md:p-2">
                            {new Date(start).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "America/Los_Angeles",
                            })}
                          </span>
                        </p>
                        <p>{summary}</p>
                        <p className="flex justify-center">
                          {/* {description.split("\n")[0].substr(1)} */}
                          {description}
                        </p>
                        <p className="flex justify-center">
                          <span className="rounded-3xl bg-rosehack-green-100 p-1.5 text-center md:rounded-full md:p-3">
                            {location}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="border-t- w-9/12 border-white" />
                  </div>
                );
              })}
          </div>
          <Image
            src={cloud}
            alt="Cloud"
            className="absolute -bottom-10 -right-[20%] -z-20 hidden animate-jiggle-6s md:block"
          />
        </div>
      ) : (
        <div className="w-9/12 text-center text-xl font-bold text-rosehack-white md:w-full">
          No Events Today. <br /> Please select another day to view an event
        </div>
      )}
    </div>
  );
};

export default Events;
