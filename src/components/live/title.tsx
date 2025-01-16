import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="z-10 font-netron text-3xl font-normal text-white md:text-6xl">
      {title}
    </div>
  );
};

export default Title;
