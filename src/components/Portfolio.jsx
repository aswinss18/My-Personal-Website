import ImagePortfolio from "./ImagePortfolio"; // This component renders the portfolio item
import { useContext, useEffect, useState } from "react";
import Button from "./Button"; // Button component for Load More feature
import { MyContext } from "../App"; // Context for Light/Dark mode

export default function Portfolio() {
  const { loading, isLightMode, portfolioData } = useContext(MyContext); // State to handle loading
  const [sortedData, setSortedData] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  useEffect(() => {
    if (portfolioData && portfolioData.length > 0 && !isLoadMore) {
      // Create a copy of portfolioData, sort by priority, and slice to first 6 items
      const sortedAndSlicedData = [...portfolioData]
        .sort((a, b) => a.priority - b.priority)
        .slice(0, 9); // Limit to 6 items

      setSortedData(sortedAndSlicedData); // Store in state
    }
  }, [portfolioData]);

  console.log(sortedData);

  const handleLoadMore = () => {
    setSortedData(() =>
      setSortedData([...portfolioData].sort((a, b) => a.priority - b.priority))
    );
    setIsLoadMore(!isLoadMore);
  };

  const styleSpan = `font-semibold transition-all duration-300 ease-in-out px-2 md:py-1 md:pl-4 md:pr-10 md:text-lg ${
    isLightMode
      ? `hover:bg-gray-950 hover:text-white`
      : `hover:bg-white hover:text-gray-950`
  }`;

  // If data is still loading, display a loading message

  return (
    <>
      <div className="w-[100vw] h-auto md:h-[100vh] flex flex-col items-center relative mb-16 overflow-y-scroll ">
        <h1 className="text-2xl font-bold mt-[5rem] absolute">My Works</h1>
        <div className="flex flex-col items-center md:items-start md:absolute mt-[6rem]">
          {/* Filter bar for categories */}

          {!loading && (
            <>
              {" "}
              <div
                className={`${
                  isLightMode ? `border-gray-950` : `border-white`
                } mt-12 flex md:flex-col border-4 rounded-3xl overflow-hidden md:absolute md:left-[-8rem] md:ml-2 cursor-pointer`}
              >
                <span className={styleSpan}>All</span>
                <span className={styleSpan}>Web</span>
                <span className={styleSpan}>App</span>
                <span className={styleSpan}>UI/UX</span>
                <span className={styleSpan}>Graphic</span>
              </div>
              {/* Display the portfolio items */}
              <div className="grid grid-cols-2 md:grid-cols-3 px-5 py-5 gap-4 mt-6 cursor-pointer">
                {sortedData?.map((item, i) => (
                  <ImagePortfolio key={item.id} item={item} />
                ))}
              </div>
              <div className="md:absolute md:top-[15.5rem] md:left-[-116px]">
                {!isLoadMore ? (
                  <Button type={isLightMode ? "primary" : "secondary"}>
                    <span onClick={handleLoadMore}>Load more</span>
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
