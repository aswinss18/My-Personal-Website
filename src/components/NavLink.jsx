import React from "react";

export default function NavLink({ children, theme }) {
  return (
    <div
      className={
        theme
          ? "font-semibold border-transparent border-b-[2.5px] px-2 text-gray-950 transition-all duration-200 ease-in-out  transform hover:border-b-[2.5px] hover:border-gray-950 "
          : "font-semibold border-transparent border-b-[2.5px] px-2 text-white transition-all duration-200 ease-in-out  transform hover:border-b-[2.5px] hover:border-white "
      }
    >
      {children}
    </div>
  );
}
