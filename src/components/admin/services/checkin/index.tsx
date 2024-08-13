import Checkin from "./CheckIn";
import { getEvents } from "./actions";
import { ReactQuery } from "@/utils/react-query";

const Index = async () => {
  return (
    <ReactQuery query={getEvents}>
      <Checkin />
    </ReactQuery>
  );
};

export default Index;
