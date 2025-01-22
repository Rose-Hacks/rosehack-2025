import keynote from "@/public/board/yonaphoto.png";
import Title from "./title";
import Image from "next/image";

const Speaker = () => {
  return (
    <div className="justify center my-10 mb-[10vh] mt-[8vh] flex h-full w-4/5 flex-col items-center gap-2 text-left text-rosehack-white md:gap-10">
      <Title title={"KEYNOTE"} />
      <div className="flex w-full flex-col items-center justify-center gap-2 p-3 md:w-4/5 md:flex-row md:gap-10">
        <Image
          src={keynote}
          alt="Keynote Speaker"
          className="w-1/2 rounded-full object-cover md:w-1/3"
        />
        <div className="flex flex-col justify-start gap-3">
          <p className="mt-3 text-center text-lg font-bold md:text-left md:text-4xl">
            Yona Ngo
          </p>
          <p className="text-center text-sm md:text-left md:text-xl">
            Phuong, also known as Yona, is a creative technologist and software
            engineer, currently working at Adobe. She holds a master{"'"}s
            degree from Interactive Telecommunications Program (ITP) at New York
            University. She is interested in non-traditional approaches to
            coding and design that help reimagine the existing user interaction
            with the software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
