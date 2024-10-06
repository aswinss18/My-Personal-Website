import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

const heroData = {
  name: "Aswin S S",
  introduction: `UI Developer with expertise in React and Figma. I specialize in building intuitive, responsive user interfaces that offer seamless user experiences. I'm passionate about blending creativity with technology to deliver visually appealing and highly functional designs.`,
  job: "UI Developer",
  avatar: `https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2FAvatar.jpeg?alt=media&token=6519623a-0c6f-4ff4-9b5c-2227ac524f9e`,
};

export default function HeroSection() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div
      className={
        isLightMode
          ? "flex  flex-col     bg-white text-gray-950 h-[100vh] w-[100vw] md:flex-row-reverse"
          : "flex    flex-col  bg-gray-950 text-white h-[100vh] w-[100vw] md:flex-row-reverse"
      }
    >
      <div className="w-[12rem] border-[0.35rem] border-white h-[12rem] mt-[10rem] mb-[1rem] mx-auto   rounded-3xl overflow-hidden md:mt-[12rem] md:mr-[7rem] md:w-[15rem] md:h-[15rem] lg:w-[17rem] lg:h-[17rem] lg:mr-[12rem]">
        <img src={heroData.avatar} className="w-full h-full" alt="" />
      </div>
      <div
        className="flex flex-col items-center sm:items-start
      
      
      p-4  mx-[1rem] space-y-2 sm:mx-[4rem] md:w-[50vw] md:h-[100vh] md:px-0 md:mt-[10rem] lg:ml-[7rem] lg:mt-[12rem] lg:space-y-5 "
      >
        <div>
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl ">
            I'm {heroData.name}
          </h1>
        </div>
        <div>
          <h3 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl ">
            I'm a <span className="font-bold">{heroData.job} </span>
          </h3>
        </div>
        <div>
          <p className="font-normal sm:text-xl mb-4 md:text-2xl w-[70vw] sm:w-[50vw]  text-center sm:text-left">
            {heroData.introduction}
          </p>
        </div>{" "}
        <div className="lg:space-x-3 ">
          <a
            href="https://drive.google.com/drive/folders/1MoqJ4_q5dUn-GTh-_2ixm-xSbhiuqj3l"
            target="_blank"
          >
            <Button type="primary">Resume</Button>
          </a>
          <Link to="/portfolio">
            <Button type="secondary">Portfolio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
