import Profile from "./profile";
import Title from "./title";
import { TEAMS, DIRECTORS } from "@/data/live/team";

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-rosehack-blue-100">
      <Title title={"Meet the Team"} />

      <div className="flex w-full flex-wrap justify-center gap-10 md:w-3/5">
        {DIRECTORS.map((item, index) => (
          <div className="w-1/3 md:w-1/5">
            <Profile
              name={item.name}
              position={item.position}
              image={item.image}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full flex-wrap justify-center gap-10 md:w-3/5">
        {TEAMS.map((item, index) => (
          <div key={index} className="w-1/3 md:w-1/5">
            <Profile
              name={item.name}
              position={item.position}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
