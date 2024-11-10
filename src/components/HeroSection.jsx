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
  const { isLightMode, personalDetails } = useContext(MyContext);

  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-10  h-screen w-screen md:flex-row md:justify-around mx-2 md:mx-5 "
      }
    >
      <div className=" rounded-3xl overflow-hidden  border-[5px] w-[15rem] h-[15rem] flex items-center justify-center md:w-[20rem] md:h-[20rem] ">
        <img
          src={personalDetails.avatar}
          className="object-cover w-full h-full"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center gap-2 md:w-[60%]">
        <div>
          <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl ">
            I'm {personalDetails.name}
          </h1>
        </div>
        <div>
          <h3 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl ">
            I'm a <span className="font-bold">{personalDetails.job} </span>
          </h3>
        </div>
        <div>
          <p className="font-normal sm:text-xl mb-4 md:text-2xl  text-center sm:text-left md:text-left">
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
