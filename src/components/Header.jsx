import React, { useState } from "react";
import NavLink from "./NavLink";
import Button from "./Button";
export default function Header() {
  const [isLightMode, setLightMode] = useState(true);

  function handleTheme() {
    setLightMode((isLightMode) => !isLightMode);
  }

  return (
    <div
      className={
        isLightMode
          ? "  border-b-2 border-blue-50 py-5 flex justify-around h-[3.5rem] items-center"
          : "border-b-2 bg-gray-950 border-gray-50 py-5 flex justify-around h-[3.5rem] items-center"
      }
    >
      <div
        className={
          isLightMode
            ? "text-gray-950 font-san font-bold text-[1rem] sm:text-2xl element "
            : "text-white font-san font-bold text-[1rem] sm:text-2xl element "
        }
      >
        Aswin
      </div>
      <div className="flex space-x-[0.05rem] md:space-x-28 sm:text-xl text-[0.85rem] text-gray-950">
        <NavLink theme={isLightMode}>Home</NavLink>
        <NavLink theme={isLightMode}>About</NavLink>
        <NavLink theme={isLightMode}>Portfolio</NavLink>
        <NavLink theme={isLightMode}>Contact</NavLink>
      </div>
      {isLightMode ? (
        <Button type="theme-day" onClick={handleTheme} />
      ) : (
        <Button type="theme-night" onClick={handleTheme} />
      )}
    </div>
  );
}
