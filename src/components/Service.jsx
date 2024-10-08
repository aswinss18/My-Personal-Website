import React, { useContext } from "react";
import { styleParagraph, styleSubHeading } from "./About";
import { MyContext } from "../App";

export default function Service({ data }) {
  const { isLightMode } = useContext(MyContext);

  return (
    <div
      className={`flex flex-col mb-5 w-[15rem] h-[15rem] mt-5 text-center rounded-3xl hover:border-gray-400  transform hover:scale-105 transition-all duration-200 border-4 border-transparent  ${
        isLightMode ? " bg-gray-950 text-white" : " bg-white text-gray-900"
      }`}
    >
      <div className="w-10 h-10    mt-3 mx-auto">
        {isLightMode ? (
          <img src={data.iconLight} alt="web" />
        ) : (
          <img src={data.iconDark} alt="web" />
        )}
      </div>
      <div>
        <h2 className="mt-1 font-bold text-md ">{data.service}</h2>
        <p className="text-[12px] text-gray-500">{data.number} PROJECTS</p>
        <p className="h-fit w-fit text-sm px-2 py-1 font-normal">
          {data.description}
        </p>
      </div>
    </div>
  );
}
