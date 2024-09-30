import React, { useContext } from "react";
import Button from "./Button";

import Service from "./Service";
import { MyContext } from "../App";

export const styleMainHeading = `text-lg font-bold md:text-xl lg:text-2xl mt-2.5`;
export const styleParagraph = `mt-2 px-2 md:px-0 md:text-lg lg:text-xl`;
export const styleSubHeading = `mt-2 text-sm font-semibold md:text-lg lg:text-xl`;

const services = [
  {
    name: "Web Development",
    iconLight: "public/images/web-white.svg",
    iconDark: "public/images/web-black.svg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
    iure explicabo reprehenderit dolore obcaecati expedita harum beatae,
    laudantium veniam`,
    no: 5,
  },

  {
    name: "App Development",
    iconLight: "public/images/code-white.svg",
    iconDark: "public/images/code-black.svg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
    iure explicabo reprehenderit dolore obcaecati expedita harum beatae,
    laudantium veniam`,
    no: 2,
  },
  {
    name: "UI UX Design",
    iconLight: "public/images/pen-black.svg",
    iconDark: "public/images/pen-white.svg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
    iure explicabo reprehenderit dolore obcaecati expedita harum beatae,
    laudantium veniam`,
    no: 7,
  },
  {
    name: "Graphic Design",
    iconLight: "public/images/palette-black.svg",
    iconDark: "public/images/palette-white.svg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat
    iure explicabo reprehenderit dolore obcaecati expedita harum beatae,
    laudantium veniam`,
    no: 7,
  },
];

export default function About() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div>
      <div
        className={`${
          isLightMode
            ? "text-gray-950 bg-white border-gray-300"
            : "bg-gray-950 text-white border-white"
        } sm:w-[100vw] sm:h-[85vh] h-[70vh]  text-gray-950 md:flex md:items-center border-b-2 `}
      >
        <div
          className={`mt-[12vh] rounded-3xl border-[0.35rem] ${
            isLightMode ? "border-gray-950" : "border-white "
          } overflow-hidden  w-[12rem] h-[12rem] mx-auto md:ml-[7vw]  md:w-[18rem] md:h-[15rem] lg:mb-10 lg:w-[24rem] lg:h-[20rem]`}
        >
          <img
            src="public/images/Animation design.jpeg"
            className="w-full h-full "
            alt=""
          />
        </div>
        <div className="text-center mt-5 md:w-[60vw] md:text-left  md:mr-[20vw] md:pl-[2.5rem] lg:pl-[3.5rem] ">
          <div>
            <h2 className="text-sm font-semibold md:text-lg lg:text-xl">
              LET ME INTRODUCE MYSELF
            </h2>
            <h1 className={styleMainHeading}>About me</h1>
          </div>
          <div>
            <h2 className={styleSubHeading}>
              A story of hardwork and perseverance.
            </h2>
            <p className={styleParagraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus dolores quisquam dolor, commodi architecto suscipit
              nobis tempore iste autem at est esse mollitia, inventore nulla
              magni corporis? Commodi, saepe dolorum?
            </p>
          </div>

          <div className="mt-2 md:space-x-4 lg:pt-6">
            <Button type="primary">HIRE ME</Button>
            <Button type="secondary">RESUME</Button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center mt-5 mb-10">
        <h1 className={styleMainHeading}>Services</h1>
        <div>
          <span className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-5 flex-wrap w-[90vw]">
            {services.map((item) => (
              <Service data={item} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
