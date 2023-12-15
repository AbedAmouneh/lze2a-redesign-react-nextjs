import { Carrousel } from "../_common/Carrousel";
import CustomizeYourOwn from "../svg/customizeYourOwn";

const items = [
  {
    name: "Alf",
    price: "$8.00",
    url: "/Customized1.svg",
  },
  {
    name: "Evil Eye",
    price: "$8.00",
    url: "/Customized5.svg",
  },
  {
    name: "Chiclets",
    price: "$8.00",
    url: "/Customized2.svg",
  },
  {
    name: "Hob",
    price: "$8.00",
    url: "/Customized3.svg",
  },
  {
    name: "Lemon",
    price: "$8.00",
    url: "/Customized6.svg",
  },
  {
    name: "Bonjus",
    price: "$8.00",
    url: "/Customized4.svg",
  },
];

export const NewCollection = () => {
  return (
    <div className="min-h-[866px] pt-11 bg-[#F1F2F2]">
      <img className="mx-auto mb-8 h-[180px]" src="/newCollection.svg" />
      <div className="max-w-[1280px] mx-auto">
        <Carrousel spaceBetween={80} slidesPerView={3}>
          {items.map((item) => (
            <div
              className="flex flex-col items-center justify-center w-full"
              key={item.name}
            >
              <img className="w-full p-[40px] pb-0" src={item.url} />
              <p className="font-medium text-[25px]">{item.name}</p>
              <div className="rounded h-[4px] bg-black w-[120px] my-4" />
              <p className="font-bold text-[35px] text-orange">{item.price}</p>
            </div>
          ))}
        </Carrousel>
      </div>
      <div className="flex w-full mt-5 items-center justify-center">
        <a className="mx-auto cursor-pointer bg-black border-black text-white border-2 hover:border-transparent animated hover:bg-orange rounded-full hover:text-white px-7 py-2">
          Browse Items
        </a>
      </div>
    </div>
  );
};
