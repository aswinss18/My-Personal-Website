import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "./AppLayout";

export default function About() {
  const { isLightMode } = useContext(MyContext);

  return (
    <div
      className={`${
        isLightMode ? "text-gray-950 bg-white" : "bg-gray-950 text-white"
      } w-[100vw] h-[100vh] overflow-y-scroll text-gray-950 md:flex md:items-center`}
    >
      <div className="mt-[12vh] rounded-3xl border-[0.35rem] border-white overflow-hidden  w-[12rem] h-[12rem] mx-auto md:ml-[7vw]  md:w-[15rem] md:h-[15rem] lg:mb-8 lg:w-[20rem] lg:h-[20rem]">
        <img
          src="public/images/Animation design.jpeg"
          className="w-cover h-cover"
          alt=""
        />
      </div>
      <div className="text-center mt-5 md:w-[60vw] md:text-left  md:mr-[20vw] md:pl-[2.5rem] lg:pl-[3.5rem] ">
        <div>
          <h2 className="text-sm font-semibold md:text-lg lg:text-xl">
            LET ME INTRODUCE MYSELF
          </h2>
          <h1 className="text-lg font-bold md:text-xl lg:text-2xl ">
            About me
          </h1>
        </div>
        <div>
          <h2 className="mt-2 text-sm font-semibold md:text-lg lg:text-xl">
            A story of hardwork and perseverance.
          </h2>
          <p className="mt-2 px-2 md:px-0 md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolores quisquam dolor, commodi architecto suscipit nobis tempore
            iste autem at est esse mollitia, inventore nulla magni corporis?
            Commodi, saepe dolorum?
          </p>
        </div>

        <div className="mt-2 md:space-x-4 lg:pt-6">
          <Button type="primary">HIRE ME</Button>
          <Button type="secondary">RESUME</Button>
        </div>
      </div>
    </div>
  );
}
