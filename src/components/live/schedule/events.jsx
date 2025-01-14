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

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <div className="mx-auto grid w-10/12 grid-cols-7 items-center justify-between rounded-xl border-4 border-white font-netron text-base md:text-2xl">
        {totalDays.map((day) => (
          <button
            key={day}
            className={`flex justify-center rounded p-2 text-white duration-300 focus:outline-none ${
              selectedDay === day ? "bg-gray-500" : "bg-gray-500/50"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-6 flex h-full w-9/12 flex-col gap-2 text-white">
        <div className="grid w-full grid-cols-4 justify-between text-center font-semibold sm:text-sm md:text-xl">
          <span className="">Time</span>
          <span className="">Event</span>
          <span className="">Type</span>
          <span className="">Location</span>
        </div>
        {console.log(events)}
        <div className="w-full divide-y-4 rounded-xl border-4 border-white p-2">
          {events
            .filter(({ day }) => day === selectedDay)
            .map(({ start, summary, description, location }, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="font-workSans m-3 grid w-full grid-cols-4 items-center justify-center rounded-xl bg-gradient-to-r from-rosehack-green to-rosehack-darkgreen px-4 py-3 text-lg font-semibold">
                  <p className="flex justify-center">
                    <span className="rounded-xl bg-rosehack-darkgreen p-2">
                      {new Date(start).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        timeZone: "America/Los_Angeles",
                      })}
                    </span>
                  </p>
                  <p className="flex w-full justify-center">{summary}</p>
                  <p className="flex justify-center">
                    {description.split("\n")[0].substr(1)}
                  </p>
                  <p className="flex justify-center">
                    <span className="rounded-full bg-rosehack-green p-3">
                      {location}
                    </span>
                  </p>
                </div>
                <div className="border-t- w-9/12 border-white" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
