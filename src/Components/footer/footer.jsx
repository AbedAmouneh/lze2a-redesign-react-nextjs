import { LinkGroup } from "./linkGroup";

export const Footer = () => {
  return (
    <div className="py-16 px-20 bg-[#F1F1F2]">
      <div className="flex flex-row items-center justify-center gap-20">
        <div className="flex flex-col items-start justify-between">
          <LinkGroup
            title="Support"
            subtitles={["Contact Us", "My Account", "Terms and Conditions"]}
          />
          <LinkGroup title="Services" subtitles={["Customize", "Whishlist"]} />
        </div>
        <LinkGroup
          title="Shop"
          subtitles={[
            "Earrings",
            "Bottles",
            "Tumbler Pouches",
            "Tote Bags",
            "Pop Socket",
            "Magnets",
            "Mirror",
            "Stainless Mug",
          ]}
        />
        <div>
          <LinkGroup
            title="Keep In Touch"
            subtitles={["info@lze2a.com", "+961 78 946 423"]}
          />
          <LinkGroup
            title="Open Hours"
            subtitles={["Monday - Saturday 9am - 6pm"]}
          />
          <div>
            <a className="block text-[29px] font-bold text-black mb-2">
              Follow Us
            </a>
            <div className="flex flex-row items-center gap-5">
              <img
                className="cursor-pointer hover:opacity-70 transition-all duration-200 h-14 w-14"
                src="/Instagram.svg"
              />
              <img
                className="cursor-pointer hover:opacity-70 transition-all duration-200 h-14 w-14"
                src="/TikTok.svg"
              />
              <img
                className="cursor-pointer hover:opacity-70 transition-all duration-200 h-14 w-14"
                src="/Facebook.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1" />
        <img src="/logo.png" className="w-72 h-72" />
      </div>
      <p className="mt-10 text-[22px]">© 2023, Lze2a All rights reserved.</p>
    </div>
  );
};
