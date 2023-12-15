export const ShopTitle = ({children}) => (
  <div className="font-proppins my-4 font-semibold flex flex-row items-center justify-center gap-[18px]">
    <div className="w-36 h-[3px] bg-black" />
    <h2 className="font-poppins text-[30px] font-semibold">
      {children}
    </h2>
    <div className="w-36 h-[3px] bg-black" />
  </div>
);
