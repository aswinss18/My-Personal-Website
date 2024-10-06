import React, { useContext } from "react";

import Button from "./Button";

import { MyContext } from "../App";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const { isLightMode, handleTheme, isMenuOpen, handleMenu } =
    useContext(MyContext);

  return (
    <>
      {" "}
      <div
        className={
          isLightMode
            ? "  border-b-2 fixed top-0 right-0 z-30 left-0 bg-white border-gray-300 py-5 flex justify-evenly h-[3.5rem] items-center"
            : "border-b-2 bg-gray-950 fixed top-0 z-30 right-0 left-0 border-gray-100 py-5 flex justify-evenly h-[3.5rem] items-center"
        }
      >
        <div className="sm:hidden w-6 h-6 " onClick={handleMenu}>
          {isLightMode ? (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fbars-solid.svg?alt=media&token=0ced85a1-2565-4d8b-a94c-fb9d993cf55c"
              className="w-full h-full"
              alt=""
            />
          ) : (
            <img
              src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fmenu-white.svg?alt=media&token=7117720a-b5e3-49a9-b3c4-ef7d5f7fe5da"
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
          <Link to="/">Aswin</Link>
        </div>
        <nav>
          <ul className="hidden sm:flex font-semibold  sm:space-x-10 md:space-x-20 px-5 lg:space-x-32 text-lg">
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {isLightMode ? (
          <Button type="theme-day" onClick={handleTheme} />
        ) : (
          <Button type="theme-night" onClick={handleTheme} />
        )}
      </div>
    </>
  );
}
