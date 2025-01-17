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
    <div className="flex w-full flex-col gap-1 text-center text-white">
      <div className="aspect-square w-full overflow-hidden rounded-full">
        <Image src={image} alt={name} />
      </div>
      <p className="text-xl">{name}</p>
      <p className="text-lg">{position}</p>
    </div>
  );
};

export default Profile;
