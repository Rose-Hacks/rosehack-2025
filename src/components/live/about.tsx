import Image from "next/image";
import trafficLight from "@/public/assets/trafficLight.svg";

const About = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center sm:mt-[15%] md:h-screen md:justify-end lg:mb-10">
      <Image
        src={trafficLight}
        alt="Traffic Light Asset"
        className="absolute left-0 top-5 w-1/3 xl:w-1/2"
      />

      <div className="mt-20 w-2/3 flex-col text-center text-rosehack-white md:mt-32 lg:w-1/2 lg:text-left xl:flex">
        <div className="mb-2 font-netron text-3xl md:mb-10 md:text-6xl 2xl:text-8xl">
          ABOUT US
        </div>
        <div className="mb-4 text-sm md:mb-10 md:text-2xl 2xl:text-4xl">
          Rose Hack is UC Riverside’s 24-hour hackathon, one of the few
          women-centric hackathons in California! Founded by the female leaders
          of the Association for Computing Machinery (ACM-W) and the Society of
          Women Engineers (SWE). Rose Hack is hosted by Women in Computing
          (WinC).
        </div>
        <div className="text-sm md:text-2xl 2xl:text-4xl">
          Rose Hack’s mission is to encourage individuals from underrepresented
          groups in STEM to gain experience, create strong networks, and build
          amazing projects through their shared passions in Science and
          Technology
        </div>
      </div>
    </div>
  );
};

export default About;
