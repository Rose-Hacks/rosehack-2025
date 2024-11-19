import { COMMITTEES } from "@/data/live/team";
import Title from "./title";

const Committees = () => {
  return (
    <div className="-mt-1 flex w-full flex-col items-center justify-center gap-4 bg-rosehack-blue-100 py-10 font-netron text-white">
      <Title title={"Committees"} />
      <div className="mt-3 flex w-full flex-row flex-wrap justify-center gap-5 text-center sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        {Object.entries(COMMITTEES).map(([committee, members], index) => (
          <div className="flex flex-col" key={index}>
            <div className="mb-1 text-lg font-semibold md:mb-3 md:text-2xl">
              {committee}
            </div>
            {members.map((member, index) => (
              <div key={index} className="text-base md:text-lg">
                {member}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
