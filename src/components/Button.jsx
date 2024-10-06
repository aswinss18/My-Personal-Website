import { space } from "postcss/lib/list";
import React, { Children, useContext } from "react";
import { MyContext } from "../App";

export default function Button({ type, onClick, children }) {
  const { isLightMode } = useContext(MyContext);

  const buttonLight = `bg-white border-2 m-1 hover:shadow-blurred
          border-gray-950 px-4 py-1.5 rounded-full text-gray-950 font-semibold transform hover:scale-105 transition-transform duration-300`;

  const buttonDark = `bg-gray-950 border-2 m-1 hover:shadow-light
          border-white px-4 py-1.5 rounded-full text-white font-semibold transform hover:scale-105 transition-transform duration-300`;

  if (type === "theme-day") {
    return (
      <button
        className="shadow-md
      w-11 h-6
      border-gray-950 border-2 rounded-full transition-all duration-500 ease-in-out "
        onClick={onClick}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2FDay.png?alt=media&token=8d884e28-5afa-48f9-9771-410c7f2630e4"
          className="
       border border-gray-950 rounded-full  ml-[0.2rem] w-4 h-4 transition-all duration-500 ease-in-out"
          alt="Day"
        />
      </button>
    );
  }
  if (type === "theme-night") {
    return (
      <button
        className="shadow-md
      w-11 h-6
      border-white border-2 bg-gray-950
      rounded-full transition-all duration-500 ease-in-out "
        onClick={onClick}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2FNight.png?alt=media&token=3d21ecb8-fde8-42d2-b9a0-ebde9059dea1"
          className="
       border border-white bg-white rounded-full  ml-[1.3rem] w-4 h-4 transition-all duration-500 ease-in-out"
          alt="Day"
        />
      </button>
    );
  }
  if (type === "primary") {
    return (
      <button className={isLightMode ? buttonDark : buttonLight} type="submit">
        {children}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button className={isLightMode ? buttonLight : buttonDark}>
        {children}
      </button>
    );
  }
}
