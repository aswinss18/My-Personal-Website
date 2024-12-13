import React from "react";

export default function SkillCard({ data }) {
  return (
    <div className=" flex flex-col  items-center  ">
      <img
        src={data?.icon}
        alt={data?.name}
        className="border-2 shadow-lg hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300 border-white rounded-xl aspect-square object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40   "
      />

      <p className="p-2 font-medium sm:text-xl md:text-2xl lg:text-3xl">
        {data?.name}
      </p>
    </div>
  );
}
