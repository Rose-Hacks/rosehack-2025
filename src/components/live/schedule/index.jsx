import { api } from "@/utils/api";
import Events from "./events";
import Title from "../title";
import Image from "next/image";
import vine1 from "@/public/assets/schedule/topvine.svg";
import vine2 from "@/public/assets/schedule/bottomvine.svg";
import top from "@/public/assets/schedule/top.svg";
import side from "@/public/assets/schedule/side.svg";
import bottom from "@/public/assets/schedule/bottom.svg";

const Schedule = async () => {
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
    <div className="relative flex w-full flex-col items-center">
      <Image src={top} alt="top" className="absolute" />
      <Image src={side} alt="top" className="absolute right-0" />
      <Image src={bottom} alt="top" className="absolute bottom-0" />
      <div className="absolute right-0 top-10 flex flex-col">
        <Image src={vine1} alt="vine" className="" />
        <Image src={vine2} alt="vine" className="relative bottom-48" />
      </div>
      <Title title="SCHEDULE" />
      <Events events={items} totalDays={totalDays} />
    </div>
  );
};

export default Schedule;
