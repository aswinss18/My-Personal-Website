import React, { useContext } from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { MyContext } from "./AppLayout";
export default function Header() {
  const { isLightMode, handleTheme } = useContext(MyContext);
  return (
    <div
      className={
        isLightMode
          ? "  border-b-2 border-gray-300 py-5 flex justify-evenly h-[3.5rem] items-center"
          : "border-b-2 bg-gray-950  border-gray-100 py-5 flex justify-evenly h-[3.5rem] items-center"
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
      <div className="flex  md:space-x-28 sm:text-xl text-[0.85rem] text-gray-950">
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
