import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

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
        <img
          src="/public/images/Avatar.jpeg"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div
        className="flex flex-col items-center sm:items-start
      
      
      p-4  mx-[1rem] space-y-2 sm:mx-[4rem] md:w-[50vw] md:h-[100vh] md:px-0 md:mt-[10rem] lg:ml-[7rem] lg:mt-[12rem] lg:space-y-5 "
      >
        <div>
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl ">
            I'm Aswin S S
          </h1>
        </div>
        <div>
          <h3 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl ">
            I'm a <span className="font-bold">UI Developer </span>
          </h3>
        </div>
        <div>
          <p className="font-normal sm:text-xl mb-4 md:text-2xl w-[70vw] sm:w-[50vw]  text-center sm:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem
            non in ex vero obcaecati cum ducimus esse accusamus itaque! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Officia enim
          </p>
        </div>{" "}
        <div className="lg:space-x-3 ">
          <a
            href="https://drive.google.com/file/d/1MwZR__HBZ4M4JeArr5I7bniCb5SXYvFq/view?usp=drivesdk"
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
