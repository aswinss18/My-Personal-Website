import { space } from "postcss/lib/list";
import React from "react";

export default function Button({ type, onClick }) {
  if (type === "theme-day") {
    return (
      <button
        className="shadow-md
      w-11 h-6
      border-gray-950 border-2 rounded-full transition-all duration-500 ease-in-out "
        onClick={onClick}
      >
        <img
          src="public/images/Day.png"
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
          src="public/images/Night.png"
          className="
       border border-white bg-white rounded-full  ml-[1.3rem] w-4 h-4 transition-all duration-500 ease-in-out"
          alt="Day"
        />
      </button>
    );
  }
}
