import React, { useContext } from "react";
import { MyContext } from "../App";

export default function Menubar() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div className="absolute z-10  w-full h-full backdrop-blur-sm ">
      <div
        className={`w-[60vw] h-[100vh] border-r-4 border-y-4 rounded-r-3xl ${
          isLightMode
            ? `bg-white border-gray-950 text-gray-950`
            : `bg-gray-950 border-white text-white`
        }`}
      >
        <h2 className="font-san font-bold text-[1.5rem]  element ml-1">
          Aswin
        </h2>
        <div></div>
      </div>
    </div>
  );
}
