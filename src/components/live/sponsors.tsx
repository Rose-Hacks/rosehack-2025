const Sponsors = () => {
  return (
    <div className=" text-center bg-rosehack-blue-100 w-full">
      <h1 className="font-netron text-3xl md:text-6xl mt-10 text-rosehack-white">Sponsors</h1>
      <div className=" mt-10 mb-24 mx-auto flex items-center max-w-[1040px] justify-center flex-wrap">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex rounded-full  h-24 w-24 md:h-64 md:w-64 overflow-hidden items-center justify-center m-5">
              <img
                src={`https://picsum.photos/200/300?random=${i}`}
                alt="sponsor"
                className="w-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sponsors;
