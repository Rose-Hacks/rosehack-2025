import Image from "next/image";
import Content from "./landing/content";
import Logo from "@/public/assets/landing/RHLogo.svg";
import city1 from "@/public/assets/landing/citybg1.svg";
import city2 from "@/public/assets/landing/citybg2.svg";
import clouds from "@/public/assets/landing/clouds.svg";
import grass from "@/public/assets/landing/cityforeground.svg";
import box from "@/public/assets/landing/box_tower.svg";
import basic from "@/public/assets/landing/basic_tower.svg";
import SpaceNeedle from "@/public/assets/landing/glass_tower.svg";
import twintower1 from "@/public/assets/landing/tower.svg";
import twintower2 from "@/public/assets/landing/tower2.svg";

const Landing = () => {
  return (
<<<<<<< HEAD
    <div className="flex h-screen w-full flex-col items-center justify-center bg-rosehack-blue-100 md:h-full">
      <div className="absolute top-5 z-50 flex w-fit flex-col items-center justify-center gap-4 md:top-36 md:w-full">
        <Image src={Logo} alt="Rose Hack Logo" className="w-1/4 md:w-fit" />
        <Content />
      </div>
      <Image
        src={clouds}
        alt="clouds"
        className="absolute right-0 top-0 w-full"
      />
      <div className="relative h-full w-full">
        <div className="relative -bottom-[50%] z-0 md:-bottom-36">
          <Image
            src={city2}
            alt="clouds"
            className="absolute -inset-x-12 z-0 md:-inset-y-24"
          />
          <Image src={city1} alt="clouds" className="relative z-10" />
        </div>
        {/* <Image
          src={dome}
          alt="dome"
          className="-bottom-14 right-[5%] z-30 hidden w-1/6 md:absolute md:bottom-[10%] md:block md:w-1/3"
        /> */}
        <div className="absolute -left-[5%] top-[47.5%] flex w-full md:top-[15%]">
          <Image
            src={box}
            alt="dome"
            className="relative left-[6.5%] top-4 z-20 w-[10%] md:left-[8%] md:top-14 md:w-fit"
          />
          <Image src={SpaceNeedle} alt="dome" className="z-20 w-1/5 md:w-fit" />
          <Image
            src={basic}
            alt="dome"
            className="relative right-[6%] top-3 z-20 w-[11%] md:right-[7%] md:top-10 md:w-fit"
          />
        </div>
        <div className="absolute -right-[25%] top-[48.5%] flex gap-3 md:right-[5%] md:top-[26%] md:gap-10">
          <Image
            src={twintower1}
            alt="dome"
            className="relative top-4 z-20 w-1/6 md:top-16 md:w-fit"
          />
          <Image
            src={twintower2}
            alt="dome"
            className="relative top-2 z-20 w-1/6 md:top-0 md:w-fit"
          />
        </div>
        <Image
          src={grass}
          alt="grass"
          className="relative bottom-0 z-20 h-full w-full"
        />
      </div>
    </div>
  );
};

export default Landing;
