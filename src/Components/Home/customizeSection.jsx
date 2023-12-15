import CustomizeYourOwn from "../svg/customizeYourOwn";

export const CustomizeSection = () => {
  return (
    <div className="min-h-[866px] py-[120px] flex flex-col items-center justify-center bg-[#F1F2F2]">
      <div className="flex-1 max-w-[1380px] w-full mx-8 my-auto flex flex-col items-center justify-center text-center">
        <h1 className="uppercase font-inter text-orange font-extrabold text-[40px]">
          DIDN’T FIND WHAT YOU’RE LOOKING FOR?
        </h1>
        <CustomizeYourOwn className="h-[100px] mb-10 pl-[20px] mx-auto" />
        <div className="border-[22.5px] p-8 w-full max-w-[1380px] px-9 border-yellow ">
        <img src="/customizeC.svg" className="w-full -my-10 mx-auto" />
          <a className="cursor-pointer hover:bg-transparent hover:border-orange hover:text-black border-2 border-transparent animated bg-orange rounded-full text-white px-7 py-2">
            Customize Now!
          </a>
        </div>
      </div>
    </div>
  );
};
