import React, { useContext } from "react";
import Button from "./Button";
import { MyContext } from "./AppLayout";

const MyDetails = {
  address: `dhgasdhgsadfhliasdfhilwehj dfoijudsi`,
  phone: 9074873377,
  countrycode: 91,
  email: `aswinss0018@gmail.com`,
  iconLocationLight: "public/images/location-dark.svg",
  iconLocationDark: "public/images/location-white.svg",
  iconPhoneLight: "public/images/phone-dark.svg",
  iconPhoneDark: "public/images/phone-white.svg",
  iconMailLight: "public/images/mail-dark.svg",
  iconMailDark: "public/images/mail-white.svg",
};

export default function Contact() {
  const { isLightMode } = useContext(MyContext);
  const styleDetails = `text-sm`;

  return (
    <div className="border-2 border-red-500 w-[100vw] h-fit flex flex-col mt-[5rem] ">
      <div className="border-2 border-red-500 ">
        <h1 className="text-center py-4 text-2xl font-bold">Contact Me</h1>
        <p className="text-center px-[1rem] pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          iste non, provident quibusdam animi numquam sed ea dolor ab.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t-2  flex flex-col items-center ">
          <h2 className="text-center py-4 text-xl font-bold">Get in Touch</h2>
          <p className="text-center px-[1rem] pb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            aliquam blanditiis voluptas ipsum maxime mollitia vero nostrum sit
            provident eius.
          </p>
          <div className="px-7 flex flex-col pt-5 border-2 rounded-3xl  items-start w-[75vw] space-y-5 mb-5 pb-7">
            <div className="flex items-center space-x-5">
              <img
                src={
                  isLightMode
                    ? MyDetails.iconLocationLight
                    : MyDetails.iconLocationDark
                }
                className="w-8 h-8"
                alt=""
              />

              <div className={styleDetails}>
                <p>Address:</p>
                <p>{MyDetails.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-5">
              {" "}
              <img
                src={
                  isLightMode ? MyDetails.iconMailLight : MyDetails.iconMailDark
                }
                className="w-8 h-8"
                alt=""
              />
              <div className={styleDetails}>
                <p>Email:</p>
                <p>{MyDetails.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              {" "}
              <img
                src={
                  isLightMode
                    ? MyDetails.iconPhoneLight
                    : MyDetails.iconPhoneDark
                }
                className="w-8 h-8"
                alt=""
              />
              <div className={styleDetails}>
                <p>Phone:</p>
                <p>
                  +{MyDetails.countrycode} {MyDetails.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 mt-8 mb-10 w-[75vw] rounded-3xl flex flex-col px-5 py-5">
          <h1 className="text-center  text-xl font-bold">Drop a Message</h1>
          <form action=" " className="flex flex-col space-y-3">
            <div className="flex flex-col mt-5 ml-5 space-y-4">
              {" "}
              <input
                type="text"
                className="border-2 px-4 py-1 rounded-3xl"
                placeholder="Name"
                required
              />
              <input
                type="text"
                placeholder="Message"
                className="border-2 px-4 py-1 rounded-3xl w-[100%] h-[10rem]"
                required
              />
            </div>

            <div className="mx-auto ">
              <Button type="primary">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
