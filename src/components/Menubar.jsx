import React, { useContext } from "react";
import { MyContext } from "../App";

export default function Menubar() {
  const { isLightMode, handleMenu } = useContext(MyContext);
  const spanStyle = `pl-8 py-2 border-b-2 transition-all duration-200 ${
    isLightMode
      ? `border-gray-950 hover:text-white hover:bg-gray-950`
      : `border-white  hover:text-gray-950 hover:bg-white`
  }`;

  return (
    <div className="absolute z-100  w-full h-full backdrop-blur-sm sm:hidden ">
      <div
        className={`w-[70vw] mt-[20vh] h-[60vh] border-r-4 border-y-4 rounded-r-3xl  pt-5 ${
          isLightMode
            ? `bg-white border-gray-950 text-gray-950 `
            : `bg-gray-950 border-white text-white `
        }`}
      >
        <div className="flex items-center justify-between">
          {" "}
          <h2 className="font-san font-bold text-[1.5rem]  element pl-8">
            Aswin
          </h2>
          <span onClick={handleMenu}>
            <img
              src={`public/images/x-${isLightMode ? `dark` : `light`}.svg`}
              className="mr-7 h-5 m"
              alt="close"
            />
          </span>
        </div>

        <div
          className={`flex mt-[1rem] text-xl font-semibold  flex-col border-t-2 ${
            isLightMode ? "border-gray-950 " : "border-white"
          } `}
        >
          <span className={spanStyle}>Home</span>
          <span className={spanStyle}>About</span>
          <span className={spanStyle}>Portfolio</span>
          <span className={spanStyle}>Contact</span>
        </div>
      </div>
    </div>
  );
}
