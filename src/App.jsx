import "./App.css";
import { data } from "./Components/Data";
import Card from "./Components/card";

export default function About(){
  return(
    <>
      <h2 className="text-white text-2xl text-center py-4 md:text-3xl md:mb-12 lg:text-4xl ">About Us</h2>
      <div className="px-4 my-4 lg:w-[100vw] lg:flex lg:justify-between lg:px-20 lg:my-20">
        <div className="mb-4 lg:w-96">
          <img src="./images/dean.jpg" className="rounded-xl md:w-[100vw] md:h-96 " />
        </div>
        <div className="mt-8 lg:w-[60vw]">
          <h2 className="text-orange-500 text-xl text-center mb-4 md:text-3xl lg:text-4xl lg:-mt-8 lg:mb-8">Message - Branch Councilor</h2>
          <p className="text-white mb-4 md:text-xl lg:text-2xl">CSI-TCET is a platform which gives students an opportunity to showcase their technical skills, leadership qualities, team work, etc. CSI-TCET has a strong network with experts in various fields of technology. With the guidance of them, CSI-TCET conducts various national and international events, seminars and workshops which help students to understand various aspects of emerging technology. CSI-TCET helps to channelise the dynamic energy of students to harness their inner potential.</p>
          <p className="text-white md:text-xl lg:text-2xl">- Dr. R.R Sedamkar</p>
          <p className="text-white lg:my-4 lg:text-xl">(Branch Councilor CSI and Director - IQAC)</p>
        </div>
      </div>

      <div className="px-4 my-4 mt-12 w-[100vw] lg:px-20">
        <div className="mb-4 lg:float-right lg:w-96">
          <img src="./images/HOD.jpg" className="rounded-xl h-52 w-96 md:w-[100vw] md:h-80 lg:h-96 object-fit" />
        </div>
        <div className="mt-8 lg:w-[60vw]">
          <h2 className="text-orange-500 text-xl text-center mb-4 md:text-3xl">Message - Branch HOD</h2>
          <p className="text-white mb-4 md:text-xl">CSI-TCET is the platform which helps the students in their holistic development by implementing proactive learning solutions. It helps students develop a creative mindset and instills in them the zeal to never stop learning and never to give up. CSI-TCET is one of the most active student organizations at TCET, and it is possible only because of the continuous efforts of the students and immense support of the Principal Dr. B. K. Mishra Sir and the other faculty members.The members of CSI-TCET attempt to carry this baton of learning by providing multiple co-curricular and extra-curricular activities. For this, I would like to thank and congratulate the faculty and student members of CSI-TCET for conducting and helping most of the department's activities. Their diligence has always been a source of inspiration for the department.</p>
          <p className="text-white md:text-xl">- Dr.  Harshali Patil</p>
          <p className="text-white">(HOD, Department of Computer Engineering, TCET)</p>
        </div>
      </div>

      <h2 className="text-orange-500 text-xl text-center mb-4 md:mt-20 md:text-3xl lg:text-4xl lg:mb-16">
      Incharge Faculty
      </h2>

      <div className=" lg:flex lg:justify-evenly">
        <div className="flex flex-col items-center">
          <div className="w-52  rounded-full mx-20 my-8 p-1 bg-violet-400">
            <img src="./images/ss.JPG" className="w-52 h-52 rounded-full object-cover"/>
          </div>
          <h2 className="text-white text-lg md:text-xl">Shailesh Sangle</h2>
          <p className="text-white text-sm ">Assistant Professor</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-52 rounded-full mx-20 my-8 p-1 bg-violet-400">
            <img src="./images/vs.JPG" className="w-52 h-52 rounded-full object-cover"/>
          </div>
          <h2 className="text-white text-lg md:text-xl">Vikas Singh</h2>
          <p className="text-white text-sm ">Assistant Professor</p>
        </div>

      </div>

      <h2 className="text-orange-500 text-2xl text-center my-8 md:mt-20 md:text-3xl">
        Meet Our Core Team
      </h2>
      <h3 className="text-orange-500 text-sm text-center mb-4">This is The CSI-TCET Core Team</h3>
      <div className="my-8 px-2 py-2 mx-3 bg-white rounded-tl-lg rounded-br-lg lg:mx-32 lg:p-5">
        <img src="./images/core.JPG" className="lg:w-[100%] object-fit"/>
      </div>

      <div className="lg:px-28 flex flex-shrink-0 flex-wrap">
        { 
          data.map((d) =>(
            <Card data = {d}/>
          ))
        }
      </div>
    </>
  )
}

