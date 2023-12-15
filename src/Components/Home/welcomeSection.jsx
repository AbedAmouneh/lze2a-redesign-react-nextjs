import { Link } from "react-router-dom";
import CreativeCanvas from "../svg/creativeCanvas";

export const WelcomeSection = () => {
  return (
    <div className="min-h-[866px] flex flex-row items-center justify-center bg-[#F1F2F2]">
      <div className="pl-[120px] flex-1 my-auto text-center">
        <h1 className="uppercase font-inter text-orange font-extrabold text-[40px]">
          Welcome To Lze2a
        </h1>
        <CreativeCanvas className="h-[100px] mb-4 pl-11 mx-auto" />
        <p className="mb-14 text-left text-[25px]">
          Transform the ordinary into the extraordinary with Lze2a&apos;s
          curated collection of funky stickers and accessories. Dive into a
          world where self expression knows no bounds. Discover vibrant designs,
          personalized options, and a community that celebrates creativity.
          Unleash your imagination; let&apos;s color your world together!
        </p>
        <Link to="/aboutus" className="cursor-pointer hover:bg-transparent hover:border-orange hover:text-black border-2 border-transparent animated bg-orange rounded-full text-white px-7 py-2">
          Learn More
        </Link>
      </div>
      <div className="flex-2 h-full pr-[100px] w-full">
        <img className="w-full" src="/HomeHero.png" />
      </div>
    </div>
  );
};
