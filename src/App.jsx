import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppLayout from "./components/AppLayout";
import "./index.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { createContext, useState } from "react";

export const MyContext = createContext();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HeroSection /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/portfolio", element: <Portfolio /> },
    ],
  },
]);

function App() {
  const [isLightMode, setLightMode] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleTheme() {
    setLightMode((isLightMode) => !isLightMode);
  }
  function handleMenu() {
    setMenuOpen((isMenuOpen) => !isMenuOpen);
  }

  return (
    <MyContext.Provider
      value={{
        isLightMode,
        handleTheme,
        isMenuOpen,
        handleMenu,
        loading,
        setLoading,
      }}
    >
      {" "}
      <ToastContainer />
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
