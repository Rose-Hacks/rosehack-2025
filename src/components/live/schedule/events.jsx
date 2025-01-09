"use client";
import { useState } from "react";

const Events = ({ events, totalDays }) => {
  const [selectedDay, setSelectedDay] = useState(
    new Date() > new Date(events[0].start)
      ? new Date().toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        })
      : "Monday",
  );
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative flex w-full items-center justify-center font-netron">
      <div className="mx-10 grid w-fit grid-cols-1 items-center text-base md:text-xl">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`sticky flex justify-center p-2 font-semibold text-rosehack-white focus:outline-none ${
              selectedDay === day ? "text-xl md:text-3xl" : "bg-transparent"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-6 flex h-full flex-col items-center">
        {console.log(events)}
        {events
          .filter(({ day }) => day === selectedDay)
          .map(({ start, summary, description, location }, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(index)}
              className={`grid w-full grid-cols-2 items-center justify-center border-t-4 px-4 py-3 text-xs font-semibold md:w-9/12 md:text-lg ${
                selectedEvent === index
                  ? "border-rosehack-darkgreen text-rosehack-darkgreen"
                  : "border-rosehack-white text-rosehack-white"
              }`}
            >
              <div>
                <p className="flex w-full justify-start whitespace-normal text-lg md:text-3xl">
                  {summary}
                </p>
                <p className="flex justify-start opacity-70">
                  {description.split("\n")[0].substr(1)}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="">
                  {new Date(start).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "America/Los_Angeles",
                  })}
                </p>
                <p className="">{location}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
