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
    <div className="relative z-10">
      <div className="m-2 flex w-fit items-center justify-center font-netron">
        <div className="relative left-0 top-0 flex flex-col justify-start text-base md:text-2xl">
          {totalDays.map((day) => (
            <button
              key={day}
              className={`flex justify-center p-2 font-semibold text-rosehack-white focus:outline-none ${
                selectedDay === day
                  ? "sticky text-xl md:text-4xl"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="mt-6 flex h-full flex-col items-center">
          {events.length === 0 ||
          events.filter(({ day }) => day === selectedDay).length === 0 ? (
            <div className="flex h-40 w-full items-center justify-center text-rosehack-white opacity-70">
              No events for this day
            </div>
          ) : (
            events
              .filter(({ day }) => day === selectedDay)
              .map(({ start, summary, description, location }, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedEvent(index)}
                  className={`grid w-full grid-cols-2 items-center justify-center border-t-4 px-4 py-3 text-xs font-semibold md:w-8/12 md:text-lg ${
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
                    <p>
                      {new Date(start).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "America/Los_Angeles",
                      })}
                    </p>
                    <p>{location}</p>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
