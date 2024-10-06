import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import { MyContext } from "../App";
import Loader from "./Loader";

export default function AppLayout() {
  const { isLightMode, isMenuOpen, handleMenu, loading } =
    useContext(MyContext);

  return (
    <div className="relative select-none">
      {" "}
      {isMenuOpen && <Menubar />}
      <div
        className={`flex flex-col relative  ${
          isLightMode
            ? "bg-white text-gray-950 border-gray-300"
            : " bg-gray-950 border-gray-100 text-white"
        } `}
      >
        <Header />
        {loading && <Loader />}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
