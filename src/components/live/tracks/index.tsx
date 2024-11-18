import TrackCards from "@/data/live/tracks";
import TrackCard from "@/components/live/tracks/TrackCard";

const Tracks = () => {
  return (
    <div className="w-full bg-rosehack-blue-100">
      <h1 className="md:mt-12 mt-8 text-center font-netron text-3xl font-bold text-rosehack-white md:text-6xl">
        Tracks
      </h1>
      <div className="place-content mx-auto mb-12 mt-8 grid max-w-[1040px] md:w-full w-3/4  md:grid-cols-2 grid-cols-1 md:gap-5 gap-7">
        {TrackCards.map((track, index) => (
          <TrackCard
            number={index + 1}
            variant={index % 2 ? "dark" : "light"}
            side={Math.floor(index / 2) % 2 ? "right" : "left"}
          >
            {track}
          </TrackCard>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
