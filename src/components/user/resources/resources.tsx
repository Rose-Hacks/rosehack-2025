"use client";
import { HACKPACKS } from "@/data/user/hackpacks";
import Toolbar from "../toolbar";
import Hackpack from "./hackpack";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const Resources = () => {
  const [search, setSearch] = useState(HACKPACKS);

  return (
    <>
      <Label className="pr-5 text-2xl font-bold text-rosehack-white">
        Hackpacks
      </Label>
      <Toolbar data={HACKPACKS} setSearch={setSearch} />
      <div className="mt-8 grid grid-cols-4 gap-4">
        {search.map(({ title, languages, link, description }, index) => (
          <Hackpack
            key={index}
            text={title}
            languages={languages}
            link={link}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default Resources;
