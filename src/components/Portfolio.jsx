import React from "react";
import ImagePortfolio from "./ImagePortfolio";
import { useContext } from "react";
import { MyContext } from "./AppLayout";

export default function Portfolio() {
  const isLightMode = useContext(MyContext);

  return (
    <div className="w-[100vw] h-fit mt-[5rem] flex flex-col items-center  ">
      <div>
        <h1 className="text-2xl font-bold">My Works</h1>
      </div>
      <div className="">
        <span className="">All</span>
        <span
          className={`font-semibold px-1 border-b-[2.5px]  transition-all duration-200 ease-in-out  transform hover:border-b-[2.5px] ${
            isLightMode ? `hover:border-gray-950` : `hover:border-white`
          } `}
        >
          Web
        </span>
        <span>App</span>
        <span>Graphic</span>
        <span>UI UX</span>
      </div>
      <div className="grid grid-cols-3 px-5 py-5  gap-4 ">
        <ImagePortfolio /> <ImagePortfolio /> <ImagePortfolio />{" "}
        <ImagePortfolio /> <ImagePortfolio /> <ImagePortfolio />{" "}
        <ImagePortfolio /> <ImagePortfolio /> <ImagePortfolio />
      </div>
    </div>
  );
}
