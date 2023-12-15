export const Showcase = () => {
  return (
    <div className="min-h-[866px] flex flex-col items-center justify-center bg-white">
      <div className="flex-1 max-w-[1380px] w-full mx-8 my-auto flex flex-col items-center justify-center text-center">
        <img src="/customizeCC.svg" className="w-full mx-auto" />
        <div className="relative w-screen overflow-hidden">
          <img
            src="/c2.svg"
            className="relative hover:left-0 transition-all duration-300 hover:z-30 left-[50vw] inset-y-0 w-screen"
          />
          <img
            src="/c1.svg"
            className="absolute hover:right-0 transition-all duration-300 hover:z-30 right-[50vw] inset-y-0 w-screen"
          />
        </div>
      </div>
    </div>
  );
};
