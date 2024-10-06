import React, { useContext } from "react";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

export default function Menubar() {
  const { isLightMode, handleMenu } = useContext(MyContext);
  const spanStyle = `pl-8 py-2 border-b-2 transition-all duration-200  cursor-pointer ${
    isLightMode
      ? `border-gray-950 hover:text-white hover:bg-gray-950`
      : `border-white  hover:text-gray-950 hover:bg-white`
  }`;

  return (
    <div className="fixed z-50  w-full h-full backdrop-blur-sm sm:hidden ">
      <div
        className={`w-[70vw] mt-[20vh] h-[60vh] border-r-4 border-y-4 rounded-r-3xl   pt-5 ${
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
              src={
                isLightMode
                  ? `https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fx-dark.svg?alt=media&token=67a5ad58-fecf-4061-bf7d-f63b835f4f4a `
                  : `https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fx-light.svg?alt=media&token=57183cae-02b9-4793-8595-96b0c85f60c2`
              }
              className="mr-7 h-5 m"
              alt="close"
            />
          </span>
        </div>

        <div
          className={`flex mt-[20%] text-xl font-semibold  flex-col border-t-2 ${
            isLightMode ? "border-gray-950 " : "border-white"
          } `}
        >
          <Link to="/" className={spanStyle} onClick={handleMenu}>
            Home
          </Link>
          <Link to="/about" className={spanStyle} onClick={handleMenu}>
            About
          </Link>
          <Link to="/portfolio" className={spanStyle} onClick={handleMenu}>
            Portfolio
          </Link>
          <Link to="/contact" className={spanStyle} onClick={handleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
