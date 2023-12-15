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
import { Carrousel } from "../_common/Carrousel";
import { Link } from "react-router-dom";

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
    <div className="py-14 gap-8 px-[100px] bg-white">
      <OurProducts className="h-[90px] mx-auto mb-8" />
      <Carrousel slidesPerView={4}>
        {items.map((Items, index) => (
          <Link to="/shop" key={index}>
            <Items className="h-[180px]" />
          </Link>
        ))}
      </Carrousel>
    </div>
  );
};
