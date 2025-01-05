import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-3xl font-bold text-rosehack-blue-200">Loading...</p>
      <Loader className="animate-spin text-rosehack-blue-200" />
    </div>
  );
};

export default Loading;
