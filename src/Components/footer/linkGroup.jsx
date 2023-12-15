export const LinkGroup = ({ title, subtitles }) => {
  return (
    <div className="mb-5">
      <a className="block text-[29px] font-bold text-black mb-2">{title}</a>
      {subtitles.map((title) => (
        <a className="hover:underline transition-all duration-300 cursor-pointer block text-[18px] mb-1 font-medium" key={title}>{title}</a>
      ))}
    </div>
  );
};
