import Link from "next/link";
const Button = (props: { text: string; link: string }) => {
  return (
    <Link
      href={props.link}
      target="_blank"
      className="py-.5 font-netron flex items-center justify-center rounded-xl border-4 border-rosehack-white/30 bg-rosehack-yellow px-10 text-xl text-gray-800 duration-150 hover:cursor-pointer hover:border-rosehack-white/40 hover:bg-rosehack-yellow/80"
    >
      {props.text}
    </Link>
  );
};

export default Button;
