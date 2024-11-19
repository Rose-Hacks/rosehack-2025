import SPONSORS from "@/data/live/sponsors";

const Sponsors = () => {
  return (
    <div className="w-full bg-rosehack-blue-100 text-center">
      <h1 className="mt-10 font-netron text-3xl text-rosehack-white md:text-6xl">
        Sponsors
      </h1>
      <div className="mx-auto mb-16 mt-7 flex max-w-[1040px] flex-wrap items-center justify-center md:mb-24 md:mt-10">
        {SPONSORS &&
          SPONSORS.map(({ name, image }, i) => (
            <div
              key={i}
              className="m-3 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full md:m-5 md:h-64 md:w-64"
            >
              <img src={image.src} alt={name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sponsors;
