import React, { useContext, useState } from "react";
import Button from "./Button";
import { MyContext } from "../App";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const MyDetails = {
  address: `Neyyattinkara, Trivandrum, Kerala`,
  phone: 9074873377,
  countrycode: 91,
  email: `aswinss0018@gmail.com`,
  description1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          iste non, provident quibusdam animi numquam sed ea dolor ab.`,
  description2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          iste non, provident quibusdam animi numquam sed ea dolor ab.`,
  iconLocationLight: "public/images/location-dark.svg",
  iconLocationDark: "public/images/location-white.svg",
  iconPhoneLight: "public/images/phone-dark.svg",
  iconPhoneDark: "public/images/phone-white.svg",
  iconMailLight: "public/images/mail-dark.svg",
  iconMailDark: "public/images/mail-white.svg",
};

export default function Contact() {
  const { isLightMode } = useContext(MyContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    try {
      await addDoc(collection(db, "messages"), {
        name,
        message,
      });
      toast.success("Message sent successfully!");
      setName("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send the message.");
      console.error(error);
    }
  };

  const styleDetails = `text-sm`;
  return (
    <div className=" w-[100vw] h-fit flex flex-col mt-[5rem] ">
      <div className="border-b-2">
        <h1 className="text-center py-4 text-2xl font-bold md:text-3xl ">
          Contact Me
        </h1>
        <p className="text-center px-[1rem] pb-10 md:px-[5rem] md:text-lg">
          {MyDetails.description1}
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center w-[100vw] md:gap-[5rem] lg:gap-[8rem] ">
        <div className=" flex flex-col items-center md:w-[30vw] my-5">
          <div className=" md:w-[40vw]">
            {" "}
            <h2 className="text-center py-4 text-xl font-bold md:text-2xl">
              Get in Touch
            </h2>
            <p className="text-center pb-5  md:px-1 md:text-lg">
              {MyDetails.description2}
            </p>
          </div>

          {/* contact card */}
          <div className="px-7 flex flex-col pt-5 border-2 rounded-3xl  items-start w-[75vw] space-y-5 mb-5 pb-7 md:w-[40vw]">
            <a href="https://maps.app.goo.gl/SSaoFB1q4Y4cUaTy8" target="_blank">
              {" "}
              <div className="flex items-center space-x-5 ">
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
            </a>

            <a href="mailTo:aswinss0018@gmail.com" target="_blank">
              {" "}
              <div className="flex items-center space-x-5">
                {" "}
                <img
                  src={
                    isLightMode
                      ? MyDetails.iconMailLight
                      : MyDetails.iconMailDark
                  }
                  className="w-8 h-8"
                  alt=""
                />
                <div className={styleDetails}>
                  <p>Email:</p>

                  <p className="hover:underline">{MyDetails.email}</p>
                </div>
              </div>
            </a>
            <a href=" https://wa.me/9074873377" target="_blank">
              {" "}
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
            </a>
          </div>
          {/* contact card */}
        </div>
        {/* Drop a message */}
        <div className="border-2 mt-8 mb-12 w-[75vw] h-auto md:h-fit rounded-3xl flex flex-col  py-5 md:w-[40vw]   items-center lg:w-[35vw] ">
          <h1 className="text-center  text-xl font-bold ">Drop a Message</h1>
          <form
            action=" "
            className="flex flex-col space-y-3 mt-4 "
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col mt-5   space-y-4 px-8 ">
              <input
                type="text"
                className="border-2 px-4 py-2 rounded-3xl cursor-pointer text-gray-950"
                placeholder="Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isSubmit}
              />
              <textarea
                type="text"
                placeholder="Message"
                className="border-2 px-4 py-2 rounded-3xl  placeholder:pt-1 md:w-[260px] w-[300px] lg:w-[370px] cursor-pointer text-gray-950"
                required
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmit}
                value={message}
              />
            </div>

            <div className="mx-auto pb-2">
              <Button type="primary">
                <button type="submit" disabled={isSubmit}>
                  Send
                </button>
              </Button>
            </div>
          </form>
        </div>
        {/* Drop a message */}
      </div>
    </div>
  );
}
