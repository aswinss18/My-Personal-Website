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
  picture1:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2FAnimation%20design.jpeg?alt=media&token=d78dc25a-5603-44fa-8512-ed6b04ad41e7",
};

const services = [
  {
    name: "Web Development",
    iconLight:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fweb-white.svg?alt=media&token=682a9575-2db8-4b51-950b-a0c741cdb7a4",
    iconDark:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fweb-black.svg?alt=media&token=350f918f-fff3-4294-9236-73944b4fc943",
    desc: `Offers responsive and user-friendly websites tailored to specific needs, ensuring optimal performance and security for an engaging user experience.`,
    no: 5,
  },

  {
    name: "App Development",
    iconLight:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fcode-white.svg?alt=media&token=5ebca20d-51ce-428b-9d49-e586b30aaa5b",
    iconDark:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fcode-black.svg?alt=media&token=a858d39f-e1d2-43e8-8215-c8115cd3dcd1",
    desc: `Builds high-quality mobile applications for Android and iOS, focusing on seamless functionality and an exceptional user experience.`,
    no: 2,
  },
  {
    name: "UI UX Design",
    iconLight:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fpen-black.svg?alt=media&token=c597b81c-123f-448f-a13b-13b6ce93c9ab",
    iconDark:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fpen-white.svg?alt=media&token=5cc48c91-08da-4824-9a30-c36322d19998",
    desc: `Designs intuitive interfaces that enhance user satisfaction, combining aesthetic appeal with functionality for a smooth navigation experience.`,
    no: 7,
  },
  {
    name: "Graphic Design",
    iconLight:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fpalette-black.svg?alt=media&token=245c313d-2b78-4f60-94e0-eb0a239489b2",
    iconDark:
      "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fpalette-white.svg?alt=media&token=eb929526-394a-4cd7-9789-22255ec1023f",
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
          <img src={aboutData.picture1} className="w-full h-full " alt="" />
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
            {services.map((item, i) => (
              <Service data={item} key={i} />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
