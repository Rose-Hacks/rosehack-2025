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
    text: "AI Chatbot for FAQs",
    techs: ["Python", "NLTK", "Flask"],
    description: "Answer common questions with AI.",
    contact: "EmmaGarcia",
  },
  {
    text: "Study Planner",
    techs: ["React", "Firebase"],
    description: "Organize study sessions effectively.",
    contact: "ChrisNelson",
  },
  {
    text: "Remote Team Collaboration App",
    techs: ["React", "Node.js"],
    description: "Tools for remote team productivity.",
    contact: "AmandaEvans",
  },
  {
    text: "Pet Care Tracker",
    techs: ["React Native", "Firebase"],
    description: "Track pet health and care needs.",
    contact: "MatthewBrooks",
  },
];

const Find = () => {
  const ref = useRef(null);
  const [search, setSearch] = useState(ideas);

  const { measureElement, getVirtualItems } = useVirtualizer({
    count: search.length,
    getScrollElement: () => ref.current,
    estimateSize: () => 100,
    measureElement: (el) => {
      if (el.clientHeight > 100) return el.clientHeight;
      return 100;
    },
    lanes: 4,
    overscan: 4,
  });

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col">
      <div className="pb-3 pt-4">
        <Label className="pr-5 text-2xl font-bold">Team</Label>
      </div>
      <Toolbar data={ideas} setSearch={setSearch} />
      <div ref={ref} className="relative h-full overflow-y-scroll">
        {search.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            No Teams Available
          </div>
        ) : (
          <div>
            {getVirtualItems().map(({ index, size, start }) => {
              if (index % 4) return null;
              const row = search.slice(index, index + 4);
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
