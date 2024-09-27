import React, { createContext, useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export const MyContext = createContext();

export default function AppLayout() {
  const [isLightMode, setLightMode] = useState(true);
  function handleTheme() {
    setLightMode((isLightMode) => !isLightMode);
  }
  return (
    <MyContext.Provider value={{ isLightMode, setLightMode, handleTheme }}>
      <div>
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
