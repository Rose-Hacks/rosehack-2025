"use client";
import LOGO from "@/public/assets/logo.svg";
import Image from "next/image";
const InternalError = () => {
  return (
    <div className="font-poppins flex w-full flex-col items-center justify-center gap-4 text-xl font-semibold text-white lg:text-3xl">
      <Image src={LOGO} alt="Rosehack Logo" />
      <div className="w-5/6 text-center">
        We are sorry something unexpected happened
      </div>
      <div className="w-5/6 text-center">Please reload the page</div>
    </div>
  );
};

export default InternalError;
