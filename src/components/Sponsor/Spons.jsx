import React from "react";
import data from "./data1";
// import Onecard from "./onecard.jsx";
import Header from "../header.jsx";

export default function Spons() {
  const Onecards = data.map((item) => {
    return (
      // <Onecard
      // {...item}

      // />
      <div className="mx-auto my-10 w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64   ">
        <img
          src={item.Sponimg}
          className="w-32 h-32 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-xl mx-auto Shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]  "
        />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <section className=" flex flex-wrap gap-2 px-2 lg:gap-20 md:gap-14 md:px-28 lg:px-40 bg-[#2E243C]  py-10 mx-auto">
        {Onecards}
      </section>
    </div>
  );
}
