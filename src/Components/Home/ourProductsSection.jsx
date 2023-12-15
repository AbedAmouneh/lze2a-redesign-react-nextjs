import OurProducts from "../svg/ourProducts";
import Bottles from "../svg/bottles";
import Earrings from "../svg/earrings";
import Magnets from "../svg/magnets";
import Mirrors from "../svg/mirrors";
import Mugs from "../svg/mugs";
import Popsocket from "../svg/popsocket";
import Pouches from "../svg/pouches";
import ToteBags from "../svg/toteBags";
import Tumbler from "../svg/tumbler";

const items = [
  Bottles,
  Earrings,
  Magnets,
  Mirrors,
  Mugs,
  Popsocket,
  Pouches,
  ToteBags,
  Tumbler,
];

export const OurProductsSection = () => {
  return (
    <div className="flex flex-col py-14 gap-8 px-[100px] items-center justify-center bg-white">
      <OurProducts className="h-[90px]" />

      <div className="flex flex-row items-center justify-center gap-8">
        {items.map((Items, index) => (
          <Items key={index} className="h-[200px]" />
        ))}
      </div>
    </div>
  );
};
