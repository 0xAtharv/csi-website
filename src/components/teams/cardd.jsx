import React from "react";

export default function Card(data) {
  return (
    <div className="mx-auto text-white md:text-lg lg:text-3xl">
      <div className="relative  ">
        <img
          src={`../images/${data.coverImg}`}
          className="w-28 h-28 sm:w-36 sm:h-36 object-cover md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-xl my-6"
        />
        
        <div className="absolute top-0 right-0 sm:py-2 sm:px-1 rounded-bl-md rounded-tr-md bg-gradient-to-tr from-neutral-900 via-[#700880] to-neutral-900">
          <a href={`${data.instalink}`}>
            <img
              src="public/images/instagram.png"
              className="w-4 md:w-6 lg:w-8 m-1 lg:my-2.5 md:my-2 my-2"
            />
          </a>
          <a href={`${data.linkdinlink}`}>
            <img
              src="../images/linkedin.png"
              className="w-4 md:w-6 lg:w-8 m-1 lg:my-2.5 md:my-2 my-2"
            />
          </a>
        </div>

        <div className="absolute left-0 bottom-0 text-xs sm:text-base rounded-b-md p-1 lg:p-2 md:p-2 w-full bg-gradient-to-r from-neutral-900 via-[#650873] to-[#6c27777b]">
          <h1 className="mx-2">{data.name}</h1>
        </div>
      </div>
    </div>
  );
}
