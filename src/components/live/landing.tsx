import Image from "next/image";
import Link from "next/link";
import Content from "./landing/content";
import Logo from "@/public/assets/logo.svg";
import clouds from "@/public/assets/landing/clouds.svg";
import foreground from "@/public/assets/aboutTopGrass.svg";

const Landing = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-rosehack-blue-100">
      <Link
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
        className="z-1 absolute right-3 top-0 z-50 w-12 cursor-pointer md:w-28 lg:right-10"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          className="w-full cursor-pointer"
          width={100}
          height={100}
        />
      </Link>
      <div className="absolute top-5 z-50 flex w-fit flex-col items-center justify-center gap-4 md:top-36 md:w-full">
        <Image src={Logo} alt="Rose Hack Logo" className="w-1/4 md:w-fit" />
        <Content />
      </div>
      <Image
        src={clouds}
        alt="clouds"
        className="absolute right-0 top-0 w-full"
      />
      <Image
        src={foreground}
        alt="foreground"
        className="absolute top-[65vh] z-20 w-full sm:top-12 md:top-[50vh] lg:top-32"
      />
    </div>
  );
};

export default Landing;
