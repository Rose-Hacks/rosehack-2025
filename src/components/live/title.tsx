import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="font-netron z-10 text-3xl font-normal text-white md:text-6xl">
      {title}
    </div>
  );
};

export default Title;
