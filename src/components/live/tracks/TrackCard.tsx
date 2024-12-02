import { cn } from "@/utils/tailwind";
import Image from "next/image";

type TrackCardProps = {
  number?: number;
  side: "left" | "right";
  variant: "dark" | "light";
  children?: React.ReactNode;
  key: number;
  bgImage?: string;
  className?: string;
};

const TrackCard = (props: TrackCardProps) => {
  const variant =
    props.variant === "light"
      ? "text-rosehack-blue-100 bg-rosehack-white"
      : "text-rosehack-white bg-rosehack-blue-200";

  const frontSide = props.side === "left" ? "justify-start" : "justify-end";

  return (
    <button
      key={props.key}
      className={cn(
        props.className,
        "group h-[250px] [perspective:2000px] md:h-[200px]",
      )}
    >
      {props.number && (
        <div className="h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] group-focus:[transform:rotateX(180deg)]">
          <div
            className={`relative flex h-full items-end ${variant} ${frontSide} w-full overflow-clip rounded-3xl font-netron [backface-visibility:hidden]`}
          >
            {props.bgImage && (
              <Image
                src={props.bgImage}
                alt="Track Icon"
                width={300}
                height={300}
                className="absolute w-full"
              />
            )}
            <span className="mx-5 translate-y-[60px] text-[8em] md:mx-8 md:translate-y-[75px] md:text-[10em]">
              {"0" + props.number.toString()}
            </span>
          </div>

          <div className="absolute inset-0 h-full w-full rounded-3xl bg-rosehack-white [backface-visibility:hidden] [transform:rotateX(180deg)]">
            <div
              className={`mx-8 flex h-full flex-col items-center justify-center text-center md:flex-row`}
            >
              <p className="text-2xl font-semibold text-rosehack-blue-200 md:text-3xl">
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
