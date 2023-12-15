import CustomizeYourOwn from "../svg/customizeYourOwn";

export const NewCollection = () => {
  return (
    <div className="min-h-[866px] flex flex-col items-center justify-center bg-[#F1F2F2]">
      <img className="w-full mx-auto max-w-7xl mb-8" src="/newCollection.svg"/>
      <a className="mx-auto cursor-pointer bg-black border-black text-white border-2 hover:border-transparent animated hover:bg-orange rounded-full hover:text-white px-7 py-2">
        Browse Items
      </a>
    </div>
  );
};
