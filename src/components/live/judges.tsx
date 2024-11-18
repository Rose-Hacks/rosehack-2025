import Title from "./title";
import { JUDGES } from "@/data/live/judges";
import Profile from "./profile";

const Judges = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-rosehack-blue-100">
      <Title title={"JUDGES"} />
      <div className="z-20 mt-2 flex w-full flex-wrap justify-center gap-10 py-2 md:w-7/12 md:gap-6">
        {JUDGES.map((judge, index) => (
          <div key={index} className="w-1/3 md:w-1/5">
            <Profile
              name={judge.name}
              image={judge.image}
              position={judge.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Judges;
