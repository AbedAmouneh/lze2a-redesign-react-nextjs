import YourFeedbackIcon from "../svg/yourFeedback";

export const YourFeedback = () => {
  return (
    <div className="min-h-[866px] flex flex-col items-center justify-center bg-[#F1F1F2]">
      <div className="flex-1 max-w-[1380px] w-full mx-8 my-auto flex flex-col items-center justify-center text-center">
        {/* <YourFeedbackIcon className="h-[190px] mb-10 pl-[20px] mx-auto" /> */}
        <img src="/yourFeedbackC.svg" className="w-full my-10 mx-auto" />
      </div>
    </div>
  );
};
