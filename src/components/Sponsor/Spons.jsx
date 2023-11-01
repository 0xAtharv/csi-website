import React from "react";
import data from "./data1";

export default function Spons() {
  const Onecards = data.map((item) => {
    return (
      <div className="mx-auto my-10 w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64">
        <img
          src={item.Sponimg}
          className="w-32 h-32 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-xl mx-auto"
        />
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-center bg-[url('/csi-website.png')] bg-fixed">
      <span className="self-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white ">SPONSORS</span>
      <section className=" flex flex-wrap gap-2 px-2 lg:gap-20 md:gap-14 md:px-28 lg:px-40 pb-8 md:pb-16 mx-auto">
        {Onecards}
      </section>
    </div>
  );
}
