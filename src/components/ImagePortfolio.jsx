import React, { useContext } from "react";
import { MyContext } from "../App";
export default function ImagePortfolio({ item }) {
  const { isLightMode } = useContext(MyContext);
  return (
    <div
      className={`w-[9rem] border-4 ${
        isLightMode ? `border-gray-950` : `border-white`
      } rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 md:w-[10rem] lg:w-[12rem] flex items-center justify-center `}
    >
      <img src={item.image} className="object-cover w-full h-full" alt="" />
    </div>
  );
}
