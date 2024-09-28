import React, { useContext } from "react";
import { MyContext } from "./AppLayout";

export default function Footer() {
  const { isLightMode } = useContext(MyContext);
  return (
    <div
      className={
        isLightMode
          ? "bg-white border-t-2 border-gray-300 w-[100vw]  flex flex-col"
          : "bg-gray-950   border-t-2 border-gray-100 w-[100vw]  flex flex-col"
      }
    >
      <div className="mx-auto">
        <h2
          className={
            isLightMode
              ? "text-xl font-bold text-center mt-4 text-gray-950"
              : "text-xl font-bold text-center mt-4 text-white"
          }
        >
          Socials
        </h2>{" "}
        <div className="flex   w-[65vw] sm:w-[75vw] mb-[4rem] mt-4 justify-evenly">
          {" "}
          <div className="flex">
            {isLightMode ? (
              <img
                src="public/images/linkedin-brands-solid.svg"
                className="w-8 h-8"
                alt="linkedin 
          "
              />
            ) : (
              <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                <img
                  src="public/images/linkedin-in-brands-solid.svg"
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="linkedin 
        "
                />
              </div>
            )}
          </div>
          <h3
            className={
              isLightMode
                ? "hidden  sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1"
                : "hidden sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1 text-white"
            }
          >
            Linkedin
          </h3>
          <div className="">
            {isLightMode ? (
              <img
                src="public/images/square-instagram-brands-solid.svg"
                className="w-8 h-8"
                alt="linkedin 
          "
              />
            ) : (
              <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                <img
                  src="public/images/instagram-brands-solid.svg"
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="linkedin 
        "
                />
              </div>
            )}
          </div>{" "}
          <h3
            className={
              isLightMode
                ? "hidden  sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1"
                : "hidden sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1 text-white"
            }
          >
            Instagram
          </h3>
          <div className="">
            {isLightMode ? (
              <img
                src="public/images/square-x-twitter-brands-solid.svg"
                className="w-8 h-8"
                alt="linkedin 
          "
              />
            ) : (
              <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                <img
                  src="public/images/x-twitter-brands-solid.svg"
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="linkedin 
        "
                />
              </div>
            )}
          </div>{" "}
          <h3
            className={
              isLightMode
                ? "hidden  sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1"
                : "hidden sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1 text-white"
            }
          >
            X.com
          </h3>
          <div className="">
            {isLightMode ? (
              <img
                src="public/images/square-whatsapp-brands-solid.svg"
                className="w-8 h-8"
                alt="linkedin 
          "
              />
            ) : (
              <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                <img
                  src="public/images/whatsapp-brands-solid.svg"
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="linkedin 
        "
                />
              </div>
            )}
          </div>{" "}
          <h3
            className={
              isLightMode
                ? "hidden  sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1 "
                : "hidden sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1 text-white"
            }
          >
            Whatsapp
          </h3>
        </div>
      </div>
    </div>
  );
}
