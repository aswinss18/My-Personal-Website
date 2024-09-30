import React from "react";
import ImagePortfolio from "./ImagePortfolio";
import { useContext } from "react";

import Button from "./Button";
import { MyContext } from "../App";

const portfolioData = [
  {
    name: "Disney",
    type: "Web",
    image: "public/images/Disney.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Fast React Pizza",
    type: "Web",
    image: "public/images/Pizza.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Snapshot",
    type: "Web",
    image: "public/images/Snapshot.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Calculator",
    type: "Web",
    image: "public/images/Calculator.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "React Quiz",
    type: "Web",
    image: "public/images/React.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Pig Game",
    type: "Web",
    image: "public/images/Dice.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Muc",
    type: "App",
    image: "public/images/Muc.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Finger",
    type: "App",
    image: "public/images/Finger.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
  {
    name: "Clock",
    type: "Web",
    image: "public/images/Clock.jpeg",
    link: "https://disneyplus-clone-11764.web.app/home",
    priority: 1,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia unde temporibus consequuntur nesciunt pariatur optio esse facilis sequi distinctio.",
  },
];

export default function Portfolio() {
  const { isLightMode } = useContext(MyContext);
  const styleSpan = `font-semibold  transition-all duration-300 ease-in-out px-2 md:py-1 md:pl-4 md:pr-10 md:text-lg
           ${
             isLightMode
               ? `hover:bg-gray-950  hover:text-white `
               : `hover:bg-white hover:text-gray-950`
           } `;
  return (
    <div className="w-[100vw] h-[100vh]  flex flex-col items-center  relative mb-16">
      <h1 className="text-2xl font-bold mt-[5rem] absolute  ">My Works</h1>{" "}
      <div className="flex flex-col items-center  md:items-start md:absolute  mt-[6rem]">
        <div
          className={`${
            isLightMode ? `border-gray-950` : `border-white`
          } mt-12 flex   md:flex-col  border-4 rounded-3xl overflow-hidden md:absolute md:left-[-8rem] md:ml-2 cursor-pointer`}
        >
          <span className={styleSpan}>All</span>
          <span className={styleSpan}>Web</span>
          <span className={styleSpan}>App</span>
          <span className={styleSpan}>UI UX</span>
          <span className={styleSpan}>Graphic</span>
        </div>

        <div className="grid grid-cols-3 px-5 py-5  gap-4 mt-6 cursor-pointer ">
          {portfolioData.map((item, i) => (
            <ImagePortfolio key={i} item={item} />
          ))}
        </div>
        <div className="md:absolute md:top-[15.5rem] md:left-[-116px]  ">
          {isLightMode ? (
            <Button type="primary">Load more</Button>
          ) : (
            <Button type="secondary">Load more</Button>
          )}
        </div>
      </div>
    </div>
  );
}
