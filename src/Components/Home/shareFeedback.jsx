export const ShareFeedback = () => {
  return (
    <div className="bg-yellow flex flex-col items-center gap-2 justify-center w-full p-[67px]">
      <div className="font-proppins font-semibold flex flex-row items-center justify-center gap-[18px]">
        <div className="w-36 h-px bg-black" />
        <p className="font-poppins text-[30px] font-semibold">
          Share Your Own Feedback!
        </p>
        <div className="w-36 h-px bg-black" />
      </div>
      <a className="mx-auto cursor-pointer bg-white border-black text-black border-2 hover:border-transparent animated hover:bg-orange rounded-full hover:text-white px-7 py-2">
        Send Us A Message
      </a>
    </div>
  );
};
