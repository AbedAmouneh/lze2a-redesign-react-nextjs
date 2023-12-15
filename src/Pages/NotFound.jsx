import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="m-auto min-h-[90vh] min-w-screen justify-center items-center flex flex-col gap-8">
      <p className="text-4xl font-inter font-bold">Not found!</p>
      <Link
        to="/"
        className="cursor-pointer border-[4px] animated border-yellow text-white bg-yellow rounded-full px-6 py-4 text-2xl hover:bg-transparent hover:text-yellow"
      >
        Go to Home
      </Link>
    </div>
  );
};
