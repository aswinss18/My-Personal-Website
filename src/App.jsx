import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppLayout from "./components/AppLayout";
import "./index.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const MyContext = createContext();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HeroSection /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "*", element: <HeroSection /> },
    ],
  },
]);

function App() {
  const [isLightMode, setLightMode] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [personalDetails, setPersonalDetails] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);

  function handleTheme() {
    setLightMode((isLightMode) => !isLightMode);
  }
  function handleMenu() {
    setMenuOpen((isMenuOpen) => !isMenuOpen);
  }
  useEffect(() => {
    const fetchPortfolioData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "personalDetails")); // Fetch the whole collection
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Each document's ID
          ...doc.data(), // Spread operator to get all the document's fields
        }));
        const servicesSnapshot = await getDocs(collection(db, "services"));
        const service = servicesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const portfolioSnapshot = await getDocs(collection(db, "portfolio"));
        const portfolio = portfolioSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPersonalDetails(items[0]);
        setServicesData(service); // Set the fetched data in state
        setPortfolioData(portfolio);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching  data: ", error);
        setLoading(false); // In case of error, also set loading to false
      }
    };

    fetchPortfolioData();
  }, []);

  console.log(portfolioData);

  return (
    <MyContext.Provider
      value={{
        isLightMode,
        handleTheme,
        isMenuOpen,
        handleMenu,
        loading,
        setLoading,
        personalDetails,
        servicesData,
        portfolioData,
      }}
    >
      {" "}
      <ToastContainer />
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
