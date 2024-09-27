import React, { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export const MyContext = createContext();

export default function AppLayout() {
  const [isLightMode, setLightMode] = useState(true);
  function handleTheme() {
    setLightMode((isLightMode) => !isLightMode);
  }
  return (
    <MyContext.Provider value={{ isLightMode, setLightMode, handleTheme }}>
      <div className="flex flex-col relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
