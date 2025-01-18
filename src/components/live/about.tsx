const About = () => {
  return (
    <div className="relative z-50 mt-[15%] flex h-full w-full items-center justify-center sm:mt-[15%] md:-mt-[5%] md:h-screen md:justify-end lg:mb-10 lg:mr-[10%] lg:mt-[35%]">
      <div className="absolute top-0 mt-20 w-5/6 flex-col text-center text-rosehack-white md:mt-32 lg:w-1/2 lg:text-left xl:flex">
        <div className="mb-2 font-netron text-3xl md:mb-10 md:text-6xl 2xl:text-8xl">
          ABOUT US
        </div>
        <div className="mb-4 md:mb-10 md:text-2xl 2xl:text-4xl">
          Rose Hack is UC Riverside’s 24-hour hackathon, one of the few
          women-centric hackathons in California! Founded by the female leaders
          of the Association for Computing Machinery (ACM-W) and the Society of
          Women Engineers (SWE). Rose Hack is hosted by Women in Computing
          (WinC).
        </div>
        <div className="md:text-2xl 2xl:text-4xl">
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
