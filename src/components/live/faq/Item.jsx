"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Item = ({ title, children }) => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button
        onClick={() => setState(!state)}
        className="flex w-full items-center justify-between whitespace-nowrap py-3 text-lg"
      >
        {title}
        <FaChevronDown className={`${state && "rotate-180"} duration-500`} />
      </button>
      <div
        className={`transition-opacity duration-500 ease-in-out ${
          state ? "opacity-100" : "opacity-0"
        }`}
      >
        {state && <div className="text-base text-black">{children}</div>}
      </div>
    </div>
  );
};

export default Item;
