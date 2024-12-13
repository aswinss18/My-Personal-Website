import React, { useContext } from "react";
import Button from "./Button";

import Service from "./Service";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
import Skills from "./Skills";

export const styleMainHeading = `text-lg font-bold md:text-xl lg:text-2xl mt-2.5`;
export const styleParagraph = `mt-2 px-2 md:px-0 md:text-lg lg:text-xl`;
export const styleSubHeading = `mt-2 text-sm font-semibold md:text-lg lg:text-xl`;

const aboutData = {
  story: `Hello! I’m Aswin, a passionate developer dedicated to turning ideas into innovative web and mobile solutions. My love for technology and design ignited my journey into development, where I craft exceptional user experiences.
   
    As a self-taught developer, I thrive on creativity, building solutions that captivate users and solve real-world problems. With a focus on front-end technologies like React and Figma, I aim to bring designs to life and create seamless interactions. 
    
  `,
  subtitle: ` A story of hardwork and perseverance.`,
  picture1:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2FAnimation%20design.jpeg?alt=media&token=d78dc25a-5603-44fa-8512-ed6b04ad41e7",
};

export default function About() {
  const { isLightMode, personalDetails, servicesData } = useContext(MyContext);
  servicesData.sort((a, b) => b.number - a.number);
  return (
    <div>
      <div
        className={`${
          isLightMode
            ? "text-gray-950 bg-white border-gray-300"
            : "bg-gray-950 text-white border-white"
        } sm:min-w-[100vw] sm:min-h-[85vh] min-h-[80vh] text-gray-950 md:flex md:items-center border-b-2 py-10`}
      >
        <div
          className={`mt-[12vh] rounded-3xl border-[0.35rem] ${
            isLightMode ? "border-gray-950" : "border-white "
          } overflow-hidden  w-[12rem] h-[12rem] mx-auto md:ml-[7vw]  md:w-[18rem] md:h-[15rem] lg:mb-10 lg:w-[24rem] lg:h-[20rem]`}
        >
          <img src={personalDetails.photo1} className="w-full h-full " alt="" />
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
            <Link to="/contact">
              <Button type="primary">HIRE ME</Button>
            </Link>

            <a
              href="https://drive.google.com/drive/folders/1MoqJ4_q5dUn-GTh-_2ixm-xSbhiuqj3l"
              target="_blank"
            >
              <Button type="secondary">Resume</Button>
            </a>
          </div>
        </div>
      </div>
      <Skills />

      <div className="flex flex-col items-center mt-5 mb-10">
        <h1 className={styleMainHeading}>Services</h1>
        <div>
          <span className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-5 flex-wrap w-[90vw]">
            {servicesData.map((item, i) => (
              <Service data={item} key={i} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
