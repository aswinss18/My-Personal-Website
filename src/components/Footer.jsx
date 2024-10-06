import React, { useContext } from "react";
import { MyContext } from "../App";

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
      <div className="mx-auto ">
        <h2
          className={
            isLightMode
              ? "text-xl font-bold text-center mt-4 text-gray-950 lg:text-2xl lg:mt-6 "
              : "text-xl font-bold text-center mt-4 text-white lg:text-2xl lg:mt-6"
          }
        >
          Socials
        </h2>{" "}
        <div className="flex   w-[65vw] sm:w-[75vw] mb-[4rem] mt-6 justify-center gap-8 lg:gap-12 lg:text-xl lg:mt-8 ">
          {" "}
          <a
            href="https://github.com/aswinss18"
            target="_blank"
            className="flex gap-10 "
          >
            {" "}
            <div className="flex ">
              {isLightMode ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fgithub-dark.svg?alt=media&token=598417fa-ce00-4d38-a24e-bb6239c9eef7"
                  className="w-8 h-8"
                  alt="linkedin 
          "
                />
              ) : (
                <div className="   flex justify-center items-center rounded-[4px] w-[2.1rem] mt-[-3px] ">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fgithub-light.svg?alt=media&token=0739ad41-e393-467d-895e-f585e60b840b"
                    className=""
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
                  : "hidden sm:block text-md font-semibold hover:underline  ml-[-1.4rem] pt-1 "
              }
            >
              Github
            </h3>
          </a>
          <a
            href="https://www.linkedin.com/in/aswin-s-s-632405306/"
            target="_blank"
            className="flex gap-10"
          >
            {" "}
            <div className="flex ">
              {isLightMode ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Flinkedin-brands-solid.svg?alt=media&token=3bb64abe-0d7a-4ce1-9c5b-819978f70adf"
                  className="w-8 h-8"
                  alt="linkedin 
          "
                />
              ) : (
                <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Flinkedin-in-brands-solid.svg?alt=media&token=dd853b12-2134-43c7-abde-398479937c7a"
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
          </a>
          <a href="" target="_blank" className="flex gap-10">
            {" "}
            <div className="">
              {isLightMode ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fsquare-instagram-brands-solid.svg?alt=media&token=228aa848-71d2-4fed-8cd2-ba1f39dc47e5"
                  className="w-8 h-8"
                  alt="linkedin 
          "
                />
              ) : (
                <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Finstagram-brands-solid.svg?alt=media&token=3c119ecd-5cb8-4027-bfdc-fb81dd27ff55"
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
          </a>
          <a href="" target="_blank" className="flex gap-10">
            {" "}
            <div className="">
              {isLightMode ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fsquare-x-twitter-brands-solid.svg?alt=media&token=f80122f4-25a1-4681-88dc-3a3bedd7da13"
                  className="w-8 h-8"
                  alt="linkedin 
          "
                />
              ) : (
                <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fx-twitter-brands-solid.svg?alt=media&token=d7a59d87-9bbf-47e6-b42b-d3b4c5df61a8"
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
          </a>
          <a
            href="https://wa.me/9074873377"
            target="_blank"
            className="flex gap-10"
          >
            {" "}
            <div className="">
              {isLightMode ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fsquare-whatsapp-brands-solid.svg?alt=media&token=a90dd8cc-4bad-4157-ba50-34947994a996"
                  className="w-8 h-8"
                  alt="linkedin 
          "
                />
              ) : (
                <div className="bg-white   flex justify-center items-center rounded-[4px] w-8 h-8 pt-[0.15rem]">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fwhatsapp-brands-solid.svg?alt=media&token=07d65dda-a1bb-4b7a-828c-1aea8b25c3c3"
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
          </a>
        </div>
      </div>
    </div>
  );
}
