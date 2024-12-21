import Link from "next/link";
import Countdown from "./countdown";
import Button from "../button";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Content = () => {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center gap-2 md:w-1/3">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl border-4 border-rosehack-white/30 bg-rosehack-green p-5 font-netron">
        <div className="flex items-center justify-center whitespace-nowrap rounded-3xl border-4 border-rosehack-white/30 bg-rosehack-green px-7 py-1.5 text-center font-netron text-lg text-rosehack-white md:whitespace-normal md:py-3 md:text-3xl">
          ROSE HACK 2025
        </div>
        <div className="flex items-center justify-center whitespace-nowrap rounded-3xl border-4 border-rosehack-white/30 bg-rosehack-green px-7 py-1 text-center font-netron text-lg text-rosehack-white md:whitespace-normal md:text-2xl">
          JANUARY 25-26
        </div>
        <Countdown />

        <div className="flex flex-col gap-4 md:w-1/2">
          <Button text="REGISTER" link="/form/participant" />
          <Button text="VOLUNTEER" link="/form/volunteer" />
          <Button text="MENTOR" link="/form/mentor" />
          <Button text="SPONSOR" link="/form/sponsor" />
        </div>
      </div>

      <div className="flex flex-row gap-3 text-rosehack-white">
        <Link
          href="https://www.instagram.com/rosehackucr/"
          className="duration-200 hover:scale-105"
        >
          <InstagramIcon className="size-9 md:size-10" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/33212536"
          className="duration-200 hover:scale-105"
        >
          <LinkedinIcon className="size-9 md:size-10" />
        </Link>
        <Link
          href="mailto:rosehackucr@gmail.com"
          className="duration-200 hover:scale-105"
        >
          <MailIcon className="size-9 md:size-10" />
        </Link>
      </div>
    </div>
  );
};

export default Content;
