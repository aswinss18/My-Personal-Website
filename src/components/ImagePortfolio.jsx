import React, { useContext } from "react";
import { MyContext } from "../App";
export default function ImagePortfolio({ item }) {
  const { isLightMode } = useContext(MyContext);
  return (
    <div
      className={`w-[9rem] border-4 ${
        isLightMode ? `border-gray-950` : `border-white`
      } rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 w-[10rem]  h-[10rem] md:w-[10rem] lg:w-[12rem] md:h-[10rem] lg:h-[12rem] flex items-center justify-center `}
    >
      <a href={item.link} className="object-cover min-h-[10rem] w-full h-full">
        <img
          src={item.image}
          className="object-cover w-full h-full"
          alt={item.name}
        />
      </a>
    </div>
  );
}
