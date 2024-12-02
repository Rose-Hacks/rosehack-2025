import TrackCards from "@/data/live/tracks";
import TrackCard from "@/components/live/tracks/TrackCard";

const Tracks = () => {
  return (
    <div className="w-full bg-rosehack-blue-100">
      <h1 className="mt-8 text-center font-netron text-3xl font-bold text-rosehack-white md:mt-12 md:text-6xl">
        Tracks
      </h1>
      <div className="place-content mx-auto mb-12 mt-8 grid w-3/4 max-w-[1040px] grid-cols-1 gap-7 md:w-full md:grid-cols-2 md:gap-5">
        <TrackCard
          number={1}
          variant="dark"
          side="right"
          bgImage={TrackCards[0].bgImage}
          key={7}
          className="md:col-span-2"
        >
          {TrackCards[0].content}
        </TrackCard>
        {TrackCards.slice(1).map((track, index) => (
          <TrackCard
            number={index + 2}
            variant={index % 2 ? "dark" : "light"}
            side={Math.floor(index / 2) % 2 ? "right" : "left"}
            key={index}
            bgImage={track.bgImage}
          >
            {track.content}
          </TrackCard>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
