import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const frontendData = Data?.filter((item) => item.type === "frontend");
  const backendData = Data?.filter((item) => item.type === "backend");
  const designData = Data?.filter((item) => item.type === "design");
  const databaseData = Data?.filter((item) => item.type === "database");

  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "skills"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Include the document ID
        ...doc.data(), // Spread the document data
      }));
      setData(items.sort((a, b) => a.order - b.order));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(frontendData);
  return (
    <div className=" border-b-2 py-10 text-center ">
      <h1 className="text-lg font-bold md:text-xl lg:text-2xl mt-2.5">
        My Tech Stack
      </h1>

      <section>
        <h3 className="text-md font-semibold my-5 sm:text-xl md:text-2xl ld:text-3xl md:my-10">
          Frontend
        </h3>
        <div className="grid grid-cols-3  gap-4 px-4 my-5 md:grid-cols-4 lg:grid-cols-6 lg:px-20 ">
          {frontendData.map((item) => (
            <SkillCard data={item} key={item.id} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-md font-semibold my-5 sm:text-xl md:text-2xl ld:text-3xl md:my-10">
          Backend
        </h3>
        <div className="grid grid-cols-2 gap-4 px-4 my-5 md:grid-cols-4 lg:grid-cols-6 lg:px-20">
          {" "}
          {backendData.map((item) => (
            <SkillCard data={item} key={item.id} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-md font-semibold my-5 sm:text-xl md:text-2xl ld:text-3xl md:my-10">
          Database
        </h3>
        <div className="grid grid-cols-2 gap-4 px-4 my-5 md:grid-cols-4 lg:grid-cols-6 lg:px-20">
          {" "}
          {databaseData.map((item) => (
            <SkillCard data={item} key={item.id} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-md font-semibold my-5 sm:text-xl md:text-2xl ld:text-3xl md:my-10">
          Design
        </h3>
        <div className="grid grid-cols-2 gap-4 px-4 my-5 md:grid-cols-4 lg:grid-cols-6 lg:px-20">
          {" "}
          {designData.map((item) => (
            <SkillCard data={item} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
