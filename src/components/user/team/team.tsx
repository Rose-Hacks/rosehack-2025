import Details from "./details";
import NewTeam from "./new";
import { getSession } from "@/utils/auth";
import { fetchTeam } from "@/actions/join";
import { Label } from "@/components/ui/label";

const Team = async () => {
  const session = await getSession();

  if (!session?.user) return <></>;

  const team = session.user.team ?? "";

  const details = await fetchTeam(team);

  return (
    <div className="flex h-full flex-col gap-3 py-4">
      <Label className="pr-5 text-2xl font-bold">Team</Label>
      {team === "" ? <NewTeam /> : <Details team={details} />}
    </div>
  );
};

export default Team;
