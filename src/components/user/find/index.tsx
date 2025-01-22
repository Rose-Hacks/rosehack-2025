"use client";

import { Label } from "@/components/ui/label";
import Toolbar from "../toolbar";
import Idea from "./idea";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useState } from "react";

const ideas = [
  {
    text: "Very Cool Project Idea",
    techs: ["Web Development Stack"],
    description: "We are cooked!",
    contact: "webdiv",
  },
  {
    text: "Very Cool Project Idea",
    techs: ["Web Development Stack"],
    description: "We are cooked!",
    contact: "webdiv",
  },
  {
    text: "Very Cool Project Idea",
    techs: ["Web Development Stack"],
    description: "We are cooked!",
    contact: "webdiv",
  },
  {
    text: "Very Cool Project Idea",
    techs: ["Web Development Stack"],
    description: "We are cooked!",
    contact: "webdiv",
  },
];

const Find = () => {
  const ref = useRef(null);

  const { measureElement, getVirtualItems } = useVirtualizer({
    count: ideas.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 325,
    measureElement: (el) => {
      if (el.clientHeight > 325) return el.clientHeight;
      return 325;
    },
    lanes: 4,
    overscan: 4,
  });

  const [search, setSearch] = useState(ideas);

  console.log(search);

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col">
      <div className="pb-3 pt-4">
        <Label className="pr-5 text-2xl font-bold text-rosehack-white">
          Team
        </Label>
      </div>
      <Toolbar data={ideas} setSearch={setSearch} />
      <div className="relative h-full overflow-y-scroll">
        {ideas.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            No Teams Available
          </div>
        ) : (
          <div ref={ref}>
            {getVirtualItems().map(({ index, size, start }) => {
              if (index % 4) return null;
              const row = ideas.slice(index, index + 4);
              return (
                <div
                  key={`row: ${Math.floor(index / 4)}`}
                  className="absolute left-0 top-0 grid w-full grid-cols-4"
                  style={{
                    height: `${size}px`,
                    transform: `translateY(${start}px)`,
                  }}
                >
                  {row.map(({ text, techs, description, contact }, i) => (
                    <div
                      key={`column: ${i}`}
                      ref={measureElement}
                      data-index={index + i}
                      className="flex items-start p-2"
                    >
                      <Idea
                        text={text}
                        techs={techs}
                        description={description}
                        contact={contact}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Find;
