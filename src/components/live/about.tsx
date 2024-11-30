import Image from "next/image";
import aboutus from "@/public/assets/aboutus.svg";
import aboutusFlower from "@/public/assets/aboutusFlower.svg";

const About = () => {
  return (
    <div className="relative flex w-full items-center justify-center md:justify-between">
      <Image
        src={aboutus}
        alt="About Us Image"
        className="hidden translate-y-[30%] md:block"
      />
      <div className="flex w-full justify-end">
        <Image src={aboutusFlower} alt="About Us with Flowers Image" />
      </div>
      <div className="absolute flex w-[90%] flex-col text-center text-rosehack-white md:right-[10%] md:top-[10%] md:w-1/2 md:text-left">
        <div className="font-netron text-5xl md:text-8xl">ABOUT US</div>
        <div className="mb-10 text-2xl md:text-3xl">
          Rose Hack is UC Riverside’s 24-hour hackathon, one of the few
          women-centric hackathons in California! Founded by the female leaders
          of the Association for Computing Machinery (ACM-W) and the Society of
          Women Engineers (SWE).
        </div>
        <div className="text-2xl md:text-3xl">
          Rose Hack’s mission is to encourage individuals from underrepresented
          groups in STEM to gain experience, create strong networks, and build
          amazing projects through their shared passions in Science and Techno
        </div>
      </div>
    </div>
  );
};

export default About;
