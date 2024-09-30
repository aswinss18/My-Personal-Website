import React, { useContext } from "react";
import { MyContext } from "./AppLayout";

export default function ImagePortfolio() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div
      className={`w-[9rem] border-4 ${
        isLightMode ? `border-gray-950` : `border-white`
      } rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 md:w-[10rem] lg:w-[12rem]`}
    >
      <img src="/public/images/Avatar.jpeg" alt="" />
    </div>
  );
}
