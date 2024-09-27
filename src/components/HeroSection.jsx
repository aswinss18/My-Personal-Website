import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "./AppLayout";

export default function HeroSection() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div
      className={
        +isLightMode
          ? "flex bg-white text-gray-950 h-[75vh] "
          : "flex bg-gray-950 text-white h-[75vh]"
      }
    >
      <div className="px-3 py-6 sm:px-12 sm:py-16 w-full  ml-8 sm:ml-16  flex flex-col justify-center my-auto space-y-3 h-[80vh]">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            I'm Aswin S S
          </h1>
        </div>
        <div>
          <h3 className="text-md sm:text-xl md:text-2xl font-semibold">
            I'm a <span className="font-bold">UI Developer </span>
          </h3>
        </div>
        <div>
          <p className="text-sm sm:text-xl md:text-2xl mb-5 md:pr-36">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem
            non in ex vero obcaecati cum ducimus esse accusamus itaque!
          </p>
        </div>
        <div className="space-x-2 flex ">
          <Button type="primary">Resume</Button>
          <Button type="secondary">Portfolio</Button>
        </div>
      </div>
      <div className="my-auto mr-12 sm:mr-24 md:mr-40 rounded-3xl   overflow-hidden ">
        <img
          src="/public/images/Avatar.jpeg"
          className="w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}
