import React, { useContext } from "react";
import { MyContext } from "../App";

export default function SmallLoader() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div
      className={`loader border-t-transparent border-solid mx-auto  border-4 rounded-full w-16 h-16 animate-spin ${
        isLightMode ? ` border-gray-950` : `border-white`
      }`}
    ></div>
  );
}
