import React, { useContext } from "react";
import { MyContext } from "../App";

export default function Menubar() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div className="absolute z-10  w-full h-full backdrop-blur-sm hidden">
      <div className="w-[60vw] h-[100vh] rounded-r-3xl">
        <h2 className="font-san font-bold text-[1.5rem]  element ml-1">
          Aswin
        </h2>
        <div></div>
      </div>
    </div>
  );
}
