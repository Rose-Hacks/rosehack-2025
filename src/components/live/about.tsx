import Image from "next/image";
import aboutUs from "@/public/assets/aboutUs.svg";

const About = () => {
  return (
    <div className="relative mb-10 flex w-full flex-row items-center justify-center md:justify-between">
      <Image
        src={aboutUs}
        alt="Traffic Light Asset"
        className="w-full xl:w-3/4"
      />

      <div className="absolute right-0 top-[10%] w-2/3 flex-col text-center text-rosehack-white lg:right-[5%] lg:top-[20%] lg:w-1/2 lg:text-left xl:flex 2xl:top-[25%]">
        <div className="mb-2 font-netron text-3xl md:mb-10 md:text-6xl 2xl:text-8xl">
          ABOUT US
        </div>
        <div className="mb-4 text-sm md:mb-10 md:text-2xl 2xl:text-4xl">
          Rose Hack is UC Riverside’s 24-hour hackathon, one of the few
          women-centric hackathons in California! Founded by the female leaders
          of the Association for Computing Machinery (ACM-W) and the Society of
          Women Engineers (SWE).
        </div>
        <div className="text-sm md:text-2xl 2xl:text-4xl">
          Rose Hack’s mission is to encourage individuals from underrepresented
          groups in STEM to gain experience, create strong networks, and build
          amazing projects through their shared passions in Science and Techno
        </div>
      </div>
    </div>
  );
};

export default About;
