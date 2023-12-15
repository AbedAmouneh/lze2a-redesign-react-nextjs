import { Carrousel } from "../_common/Carrousel";
import YourFeedbackIcon from "../svg/yourFeedback";

const items = [
  "/Review1.svg",
  "/Review2.svg",
  "/Review3.svg",
  "/Review4.svg",
  "/Review5.svg",
  "/Review6.svg",
];

export const YourFeedback = () => {
  return (
    <div className="min-h-[866px] flex bg-[#F1F1F2]">
      <div className="flex-1 max-w-[1380px] w-full px-8 m-auto text-center">
        <YourFeedbackIcon className="h-[190px] mb-[100px] pl-[20px] mx-auto" />
        <Carrousel slidesPerView={3} spaceBetween={30}>
          {items.map((url, index) => (
            <img src={url} className="w-full" key={index} />
          ))}
        </Carrousel>
      </div>
    </div>
  );
};
