import Image from "next/image";
import Clouds from "@/public/assets/Clouds.svg";
import Hills from "@/public/assets/hill.svg";
import LOGO from "@/public/assets/RoseHackLogo.svg";
import { Instagram } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-rosehack-100 relative mt-[20vh] flex h-full flex-col items-center justify-end md:h-screen">
      <div className="relative w-full">
        <Image
          src={Clouds}
          alt="clouds"
          className="absolute top-[-55%] -z-10 h-full w-full"
        />

        <Image src={Hills} alt="hills" className="h-full w-full" />
      </div>
      <div className="absolute flex w-full justify-between items-end md:items-center px-2 md:px-10 my-1 md:my-4">
        <div className="flex">
          <Image src={LOGO} alt="RoseHack Logo" className="w-1/5 h-1/5 md:w-full md:h-full"/>
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-3xl">ROSEHACK 2025</p>
            <p className="text-xs md:text-xl whitespace-nowrap font-light"> Made with 💜 by the RoseHack team at UCR</p>
          </div>
        </div>
          <div className="flex flex-col md:flex-row h-full gap-2 md:gap-4">
          <Instagram className="md:w-14 md:h-14" />
          <Instagram className="md:w-14 md:h-14" />
          <Instagram className="md:w-14 md:h-14" />
          </div>
      </div>
    </div>
  );
};

export default Footer;
