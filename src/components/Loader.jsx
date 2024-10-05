import React, { useContext } from "react";
import { MyContext } from "../App";

export default function Loader() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div className="absolute bg-transparent w-[100vw] h-[100vh] backdrop-blur-3xl py-[50vh]">
      <div
        class={`loader border-t-transparent border-solid mx-auto  border-4 rounded-full w-16 h-16 animate-spin ${
          isLightMode ? ` border-gray-950` : `border-white`
        }`}
      ></div>
    </div>
  );
}
