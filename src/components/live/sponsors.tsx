import Image from "next/image";
import SPONSORS from "@/data/live/sponsors";
import Link from "next/link";
const Sponsors = () => {
  return (
    <div className="w-full bg-rosehack-blue-100 text-center">
      <h1 className="mt-10 font-netron text-3xl text-rosehack-white md:text-6xl">
        Sponsors
      </h1>
      <div className="mx-auto mb-16 mt-7 flex max-w-[1040px] flex-wrap items-center justify-center md:mb-24 md:mt-10">
        {SPONSORS &&
          SPONSORS.map((image, i) => (
            <Link
              href={image.link}
              target="_blank"
              key={i}
              className="m-3 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-[#2F6A67] duration-300 hover:scale-105 md:m-5 md:h-64 md:w-64"
            >
              <Image src={image.image} alt={image.name} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sponsors;
