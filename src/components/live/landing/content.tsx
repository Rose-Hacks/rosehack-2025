import Link from "next/link";
import Countdown from "./countdown";
import Button from "../button";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Content = () => {
  return (
    <div className="flex w-11/12 flex-col items-center justify-center gap-2 md:w-3/5 xl:w-2/5">
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl border-4 border-rosehack-white/70 bg-rosehack-green/80 p-3 font-netron">
        <div className="whitespace-nowrap rounded-3xl px-7 text-center font-netron text-lg text-rosehack-white md:whitespace-normal md:text-3xl">
          ROSE HACK 2025
          <div className="mb-3 flex items-center justify-center whitespace-nowrap rounded-3xl px-7 text-center font-netron text-lg text-rosehack-white/80 md:whitespace-normal md:text-xl">
            JANUARY 25-26, 2025
          </div>
        </div>
        <Countdown />

        <div className="flex items-center justify-center">
          <Button text="DASHBOARD" link="/user" />
          {/* <Button text="REGISTER" link="/form/participant" />
          <Button text="VOLUNTEER" link="/form/volunteer" />
          <Button text="MENTOR" link="/form/mentor" />
          <Button text="SPONSOR" link="/form/sponsor" /> */}
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
    </div>
  );
};

export default Content;
