import React, { useContext } from "react";
import Button from "./Button";

import Service from "./Service";
import { MyContext } from "../App";

export const styleMainHeading = `text-lg font-bold md:text-xl lg:text-2xl mt-2.5`;
export const styleParagraph = `mt-2 px-2 md:px-0 md:text-lg lg:text-xl`;
export const styleSubHeading = `mt-2 text-sm font-semibold md:text-lg lg:text-xl`;

const aboutData = {
  story: `Hello! I’m Aswin, a passionate developer dedicated to turning ideas into innovative web and mobile solutions. My love for technology and design ignited my journey into development, where I craft exceptional user experiences.
   
    As a self-taught developer, I thrive on creativity, building solutions that captivate users and solve real-world problems. With a focus on front-end technologies like React and Figma, I aim to bring designs to life and create seamless interactions. 
    
  `,
  subtitle: ` A story of hardwork and perseverance.`,
};

const services = [
  {
    name: "Web Development",
    iconLight: "public/images/web-white.svg",
    iconDark: "public/images/web-black.svg",
    desc: `Offers responsive and user-friendly websites tailored to specific needs, ensuring optimal performance and security for an engaging user experience.`,
    no: 5,
  },

  {
    name: "App Development",
    iconLight: "public/images/code-white.svg",
    iconDark: "public/images/code-black.svg",
    desc: `Builds high-quality mobile applications for Android and iOS, focusing on seamless functionality and an exceptional user experience.`,
    no: 2,
  },
  {
    name: "UI UX Design",
    iconLight: "public/images/pen-black.svg",
    iconDark: "public/images/pen-white.svg",
    desc: `Designs intuitive interfaces that enhance user satisfaction, combining aesthetic appeal with functionality for a smooth navigation experience.`,
    no: 7,
  },
  {
    name: "Graphic Design",
    iconLight: "public/images/palette-black.svg",
    iconDark: "public/images/palette-white.svg",
    desc: `Delivers visually compelling materials that effectively communicate a brand’s message and strengthen its visual identity.`,
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
        } sm:w-[100vw] sm:h-[85vh] h-[80vh] text-gray-950 md:flex md:items-center border-b-2 `}
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
              {aboutData.heading1}
            </h2>
            <h1 className={styleMainHeading}>About me</h1>
          </div>
          <div>
            <h2 className={styleSubHeading}>{aboutData.subtitle}</h2>
            <p className={styleParagraph}>{aboutData.story}</p>
          </div>

          <div className="mt-2 md:space-x-4 lg:pt-6">
            <Button type="primary">HIRE ME</Button>
            <Button type="secondary">RESUME</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 mb-10">
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
