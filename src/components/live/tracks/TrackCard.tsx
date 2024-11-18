
import Placeholder from "@/public/assets/image 60.svg";

type TrackCardProps = {
  number?: number;
  side: "left" | "right";
  variant: "dark" | "light";
  children?: React.ReactNode;
};

const TrackCard = (props: TrackCardProps) => {
  const variant =
    props.variant === "light"
      ? "text-rosehack-blue-100 bg-rosehack-white"
      : "text-rosehack-white bg-rosehack-blue-200";

  const frontSide = props.side === "left" ? "justify-start" : "justify-end";
  const backSide = props.side === "left" ? "text-left" : "text-right";

  return (
    <button className="group h-[200px] [perspective:1000px]">
      {props.number && (
        <div className="h-full transition-all duration-500 [transform-style:preserve-3d] group-focus:[transform:rotateY(180deg)] group-hover:[transform:rotateY(180deg)]">
          <div
            className={`flex h-full items-end ${variant} ${frontSide} w-full overflow-hidden rounded-3xl font-netron [backface-visibility:hidden]`}
          >
            <span className="md:mx-8 mx-5 md:translate-y-[75px] translate-y-[60px] md:text-[10em] text-[8em]">
              {"0" + props.number.toString()}
            </span>
          </div>

          <div className="absolute inset-0 h-full w-full rounded-3xl bg-rosehack-white   [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className={`h-full flex ${props.side === "right" ? "" : "flex-row-reverse"} items-center ${backSide} mx-8`}>
              <img
                src={Placeholder.src}
                alt="Track Icon"
                className="w-24 h-24"
              />
              <p className="text-rosehack-blue-100 md:text-md text-sm">
                {props.children}
              </p>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default TrackCard;
