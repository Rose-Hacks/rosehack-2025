import React from "react";
import Image, { StaticImageData } from "next/image";
const Profile = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: StaticImageData | string;
}) => {
  return (
    <div className="-center flex w-full flex-col items-center gap-1 text-center text-white">
      <Image
        src={image}
        alt="Evan and his roommates"
        className="h-full w-full rounded-full object-cover shadow-sm"
      />
      <p className="text-xl">{name}</p>
      <p className="text-lg">{position}</p>
    </div>
  );
};

export default Profile;
