import Image from "next/image";

import city1 from "@/public/assets/landing/citybg1.svg";
import city2 from "@/public/assets/landing/citybg2.svg";
import dome from "@/public/assets/landing/dome.svg";
import clouds from "@/public/assets/landing/clouds.svg";
import grass from "@/public/assets/landing/grass.svg";
import box from "@/public/assets/landing/box_tower.svg";
import basic from "@/public/assets/landing/basic_tower.svg";
import SpaceNeedle from "@/public/assets/landing/glass_tower.svg";
import twintower1 from "@/public/assets/landing/tower.svg";
import twintower2 from "@/public/assets/landing/tower2.svg";

const Landing = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-rosehack-blue-100">
      <Image
        src={clouds}
        alt="clouds"
        className="absolute right-0 top-0 w-full"
      />
      <div className="relative h-full">
        <div className="relative -bottom-36 z-0">
          <Image
            src={city2}
            alt="clouds"
            className="absolute -inset-y-12 inset-x-0 z-0"
          />
          <Image src={city1} alt="clouds" className="relative z-10" />
        </div>

        <Image
          src={dome}
          alt="dome"
          className="absolute -bottom-14 right-[10%] z-30 w-1/6 md:bottom-[10%] md:w-1/3"
        />
        <div className="absolute left-[2%] flex md:top-[16%]">
          <Image
            src={box}
            alt="dome"
            className="relative left-[6.5%] top-4 z-30 w-[10%] md:left-[20%] md:top-14 md:w-fit"
          />
          <Image src={SpaceNeedle} alt="dome" className="z-30 w-1/5 md:w-fit" />
          <Image
            src={basic}
            alt="dome"
            className="relative right-[6%] top-3 z-30 w-[11%] md:right-[18%] md:top-10 md:w-fit"
          />
        </div>
        <div className="absolute -right-[25%] flex gap-3 md:right-[5%] md:top-[26%] md:gap-10">
          <Image
            src={twintower1}
            alt="dome"
            className="relative top-4 z-30 w-1/6 md:top-16 md:w-fit"
          />
          <Image
            src={twintower2}
            alt="dome"
            className="relative top-2 z-30 w-1/6 md:top-0 md:w-fit"
          />
        </div>
        <Image
          src={grass}
          alt="grass"
          className="relative -bottom-24 z-20 w-full md:bottom-0"
        />
      </div>
    </div>
  );
};

export default Landing;
