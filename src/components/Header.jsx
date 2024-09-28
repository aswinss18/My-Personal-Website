import React, { useContext } from "react";
import NavLink from "./NavLink";
import Button from "./Button";
import { MyContext } from "./AppLayout";
import { Link } from "react-router-dom";
export default function Header() {
  const { isLightMode, handleTheme } = useContext(MyContext);
  return (
    <div
      className={
        isLightMode
          ? "  border-b-2 fixed top-0 right-0 z-10 left-0 bg-white border-gray-300 py-5 flex justify-evenly h-[3.5rem] items-center"
          : "border-b-2 bg-gray-950 fixed top-0 z-10 right-0 left-0 border-gray-100 py-5 flex justify-evenly h-[3.5rem] items-center"
      }
    >
      <div className="sm:hidden w-6 h-6">
        {isLightMode ? (
          <img
            src="/public/images/bars-solid.svg"
            className="w-full h-full"
            alt=""
          />
        ) : (
          <img
            src="/public/images/menu-white.svg"
            className="w-full h-full"
            alt=""
          />
        )}
      </div>

      <div
        className={
          isLightMode
            ? "text-gray-950 font-san font-bold text-[1rem] sm:text-2xl element ml-1 "
            : "text-white font-san font-bold text-[1rem] sm:text-2xl element ml-1"
        }
      >
        Aswin
      </div>
      <div className="sm:flex hidden md:space-x-28 sm:text-xl text-[0.85rem] text-gray-950">
        <Link to="/">
          {" "}
          <NavLink theme={isLightMode}>Home</NavLink>
        </Link>{" "}
        <Link to="/about">
          {" "}
          <NavLink theme={isLightMode}>About</NavLink>
        </Link>{" "}
        <Link to="/portfolio">
          {" "}
          <NavLink theme={isLightMode}>Portfolio</NavLink>
        </Link>{" "}
        <Link to="/contact">
          {" "}
          <NavLink theme={isLightMode}>Contact</NavLink>
        </Link>
      </div>
      {isLightMode ? (
        <Button type="theme-day" onClick={handleTheme} />
      ) : (
        <Button type="theme-night" onClick={handleTheme} />
      )}
    </div>
  );
}
