import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ item }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${item.src})` }}>
      <div className="slide-texts container mx-auto flex flex-col items-start justify-center h-full sm:gap-5 gap-2 text-violet-50 px-10">
        <h1 className="md:text-6xl text-3xl uppercase font-bold space-font w-4/5 ">
          {item.headline}
        </h1>
        <p className="sm:w-3/5 w-full sm:text-lg text-sm ">{item.body}</p>
        <Link className="slide-btn uppercase border border-violet-50 sm:py-4 px-5 py-2 hover:text-orange-50 hover:bg-orange-700 hover:border-orange-700 duration-300 font-medium mt-5 flex justify-center items-center ">
          {item.cta}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
