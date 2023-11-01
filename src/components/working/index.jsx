import React from "react";
import "./core.css";
import { motion } from "framer-motion";
import {te} from "./tehead"

function WC() {
  const TEDetail = te.map((details) => {
    return (
      <div className="postn mx-6 my-4 flex flex-col ">
        {/* <img
          src={details.image}
          className="rounded-full w-7/12 px-2 sm:11/12"
        /> */}
        <motion.div
          // className="box"
          className="rounded-full w-7/12 px-2 items-center justify-center sm:11/12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1}}
          // animate={{  }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <img
            src={details.image}
            className="rounded-full h-[300px] w-[300px]"
          />
        </motion.div>

        <div className="font-semibold pt-5 text-xl">{details.name}</div>
      </div>
    );
  });
  return (
    
      <div className="bg-[url('/csi-website.png')] bg-fixed bg-[#020005]">
        <h1 className="text-center text-3xl m-5 p-5 text-white">
          The TE Team
        </h1>
        <div className="mt-8 mx-8 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 text-white">
          {TEDetail}
        </div>
      </div>
    
  );
}

export default WC;
