export const Showcase = () => {
  return (
    <div className="min-h-[866px] flex flex-col items-center justify-center bg-white">
      <div className="flex-1 max-w-[1380px] w-full mx-8 my-auto flex flex-col items-center justify-center text-center">
        {/* <ProductShowcase className="h-[182px] mb-10 pl-[20px] mx-auto" /> */}
        <img src="/customizeCC.svg" className="w-full mx-auto" />
        <div className="relative w-screen h-[800px]">
        <img src="/c2.svg" className="absolute hover:left-0 transition-all duration-300 hover:z-30 left-[50vw] inset-y-0 w-screen" />
        <img src="/c1.svg" className="absolute hover:right-0 transition-all duration-300 hover:z-30 right-[50vw] inset-y-0 w-screen" />
        {/* <img src="/c2.svg" className="absolute mx-16 inset-0 w-screen" /> */}
        </div>
      </div>
    </div>
  );
};
