import Link from "next/link";
const Button = (props: { text: string; link: string }) => {
  return (
    <Link
      href={props.link}
      className="py-.5 my-10 flex items-center justify-center rounded-xl border-4 border-rosehack-white/30 bg-rosehack-green px-10 font-netron text-2xl duration-150 hover:cursor-pointer hover:border-rosehack-white/40 hover:bg-rosehack-green/50"
    >
      {props.text}
    </Link>
  );
};

export default Button;