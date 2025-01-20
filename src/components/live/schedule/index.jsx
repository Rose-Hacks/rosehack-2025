"use client";
import { api } from "@/utils/api";
import Events from "./events";
import Title from "../title";
import { useEffect, useState } from "react";

const Schedule = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { items } = await api({
        url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
        method: "GET",
      });

      items.forEach((event) => {
        event.start = new Date(event.start.dateTime);
        event.end = new Date(event.end.dateTime);
        event.day = event.start.toLocaleString("en-US", {
          timeZone: "America/Los_Angeles",
          weekday: "long",
        });
      });

      setEvents(items);
    };

    getEvents();
  }, []);
  const totalDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="relative flex w-full flex-col items-center gap-10 md:gap-20">
      <Title title="SCHEDULE" />
      <Events events={events} totalDays={totalDays} />
    </div>
  );
};

export default Schedule;

// export const dynamic = "force-dynamic";
