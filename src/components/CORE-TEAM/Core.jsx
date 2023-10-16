import React from "react";
import "./core.css";
import { coreDetails } from "./team";
import { motion } from "framer-motion";

function Core() {
  const coreDetail = coreDetails.map((details) => {
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
            className="rounded-full"
          />
        </motion.div>

        <div className="font-semibold pt-5">{details.name}</div>
        <div className="underline underline-offset-4">{details.position}</div>
        <div className="social flex flex-row space-between">
          <a href={details.instagram}>
            <img src="public/icons/instagram.svg" className="w-5 h-5 m-1" />
          </a>
          <a href={details.linkedIn}>
            <img src="public/icons/linkedin.svg" className="w-5 h-5 m-1" />
          </a>
          <p>{details.detail}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="bg-[url('/csi-website.png')] bg-fixed">
        <h1 className="text-center text-3xl mt-5 p-2 text-white">OUR TEAM</h1>
        {/* <div className="flex flex-col m-10 justify-center items-center md:flex-row">
          <div className="container flex flex-col align-center items-center my-10 mx-10 w-1/2 md:w-1/4 text-white border-2 border-stone-50 rounded-lg shadow-lg hover:shadow-stone-200">
            <img
              src="public/faculty/deann.jpg"
              className="image rounded-full w-1/2 m-5"
            />
            <h3 className="text-center font-4xl font-semibold ">
              Branch Councilor
            </h3>
            <span>Dr. R.R Sedamkar</span>

            <span className="span p-5 text-xl text-justify items-center md:w-10/12">
              <br />
              CSI-TCET offers a platform for students to demonstrate technical
              skills, leadership, and teamwork. With a robust network of
              technology experts, it organizes national and international
              events, seminars, and workshops, fostering a deeper understanding
              of emerging technologies. CSI-TCET plays a pivotal role in
              directing students' dynamic energy towards realizing their inner
              potential.
              <br />
              - Dr. R.R Sedamkar <br />
              (Branch Councilor CSI and Director - IQAC)
            </span>
          </div>
          <div className="flex flex-col align-center justify-center items-center my-10 mx-10 w-1/2 md:w-1/4 text-white border-2 border-stone-50 rounded-lg md:shadow-lg hover:shadow-stone-200">
            <img
              src="public/faculty/HOD.jpg"
              className="image rounded-full w-1/2 m-5"
            />

            <h3 className="text-center font-4xl font-semibold">Branch HOD</h3>
            <span>Dr. Harshali Patil</span>

            <span className="span p-5 text-xl text-justify items-center pl-10 md:w-10/12">
              <br />
              CSI-TCET is a proactive learning platform at TCET, fostering
              holistic student development by cultivating creativity and a
              relentless pursuit of knowledge. It thrives thanks to dedicated
              students and the unwavering support of Principal Dr. B. K. Mishra
              and other faculty members. The organization facilitates a range of
              co-curricular and extra-curricular activities. Gratitude is
              extended to the faculty and student members for their inspiring
              diligence in advancing departmental initiatives.
              <br />
              - Dr. Harshali Patil <br />
              (HOD, Department of Computer Engineering, TCET)
            </span>
          </div>
        </div> */}
        {/* <div className="flex flex-col justify-center"> */}

        {/* <h1 className="text-center text-white font-4xl font-semibold m-4">FACULTY IN-CHARGE</h1> */}
        <h1 className="text-center text-3xl m-5 p-5 text-white">
          FACULTY IN-CHARGE
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col align-center justify-center items-center my-10 mx-10 w-1/2 md:w-1/4 text-white border-2 border-stone-50 rounded-lg shadow-lg hover:shadow-stone-200">
            <img
              src="public/faculty/ss.JPG"
              className="image rounded-full w-1/2 m-5"
            />
            <h3 className="text-center font-4xl font-semibold ">
              Shailesh Sangle
            </h3>
            <span>Asst Prof-Comp Dept</span>
          </div>
          <div className="flex flex-col align-center justify-center items-center my-10 mx-10 w-1/2 md:w-1/4 text-white border-2 border-stone-50 rounded-lg shadow-lg hover:shadow-stone-200">
            <img
              src="public/faculty/vs.JPG"
              className="image rounded-full w-1/2 m-5"
            />
            <h3 className="text-center font-4xl font-semibold ">Vikas Singh</h3>
            <span>Asst Prof-C omp Dept</span>
          </div>
        </div>
        <h1 className="text-center text-3xl m-5 p-5 text-white">
          The Core Team
        </h1>
        <div className="mt-8 mx-8 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 text-white">
          {coreDetail}
        </div>
      </div>
    </>
  );
}

export default Core;
