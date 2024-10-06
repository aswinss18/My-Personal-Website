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
  description1: `For inquiries, project discussions, or collaboration opportunities, please use the contact form below or reach out via email or phone. I am eager to connect and explore how we can work together to achieve your goals.`,
  description2: `Let’s connect! Whether you have questions or project ideas, feel free to reach out. Your inquiries are important and will be responded to promptly.`,
  iconLocationLight:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Flocation-dark.svg?alt=media&token=1252d7d5-1e74-430a-8b6a-80b8999b3bac",
  iconLocationDark:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Flocation-white.svg?alt=media&token=15de6ee2-cf2e-4900-acbb-cba155df5a73",
  iconPhoneLight:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fphone-dark.svg?alt=media&token=af6eb735-c899-4620-b314-7dfb7038ccba",
  iconPhoneDark:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fphone-white.svg?alt=media&token=91f532c5-07be-4ebf-86c1-8420a96473fd",
  iconMailLight:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fmail-dark.svg?alt=media&token=8c1629a7-f393-4e8d-a8ca-4ae60ba0d2f9",
  iconMailDark:
    "https://firebasestorage.googleapis.com/v0/b/my-personal-website-17644.appspot.com/o/icons%20and%20avatars%2Fmail-white.svg?alt=media&token=43aaf6a6-4794-4f86-885f-9669769a269e",
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
            className="flex flex-col space-y-8 mt-4  w-[80%] "
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="border-2 focus:outline-gray-950  px-4 py-3 rounded-3xl"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              disabled={isSubmit}
            />
            <textarea
              type="text"
              placeholder="Message"
              className="border-2 focus:outline-gray-950  px-4 py-4 rounded-3xl"
              required
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmit}
              value={message}
            />

            <div className="mx-auto pb-2">
              <Button type="primary">Send</Button>
            </div>
          </form>
        </div>
        {/* Drop a message */}
      </div>
    </div>
  );
}
