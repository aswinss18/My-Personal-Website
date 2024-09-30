import React, { createContext, useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import { MyContext } from "../App";

export default function AppLayout() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div className="relative">
      {" "}
      <Menubar />
      <div
        className={`flex flex-col relative  ${
          isLightMode
            ? "bg-white text-gray-950 border-gray-300"
            : " bg-gray-950 border-gray-100 text-white"
        } `}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
