import Profile from "./profile";
import Title from "./title";
import { TEAMS } from "@/data/live/team";

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <Title title={"Meet the Team"} />
      <div className="flex w-full flex-wrap justify-center gap-10 md:w-3/5">
        {TEAMS.map((team, index) => (
          <div className="w-1/3 md:w-1/5">
            <Profile
              name={team.name}
              position={team.position}
              image={team.image}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
