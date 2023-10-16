import React from "react";
import "animate.css";

function AboutUs() {
  return (
    <>
      <h1 className="text-center text-3xl m-5 p-5 text-white">ABOUT US</h1>
      <div className="flex flex-row align-center justify-center m-10 mr-5  text-white">
        <div className="w-1/2">
          
          <div className="p-5 text-xl text-justify">
            CSI-TCET is the student branch of the Computer Society of India
            (CSI) at Thakur College of Engineering and Technology (TCET),
            Mumbai. The mission of CSI is to facilitate research, knowledge
            sharing, learning and innovation, career enhancement and nurturing
            new talents. Today, CSI has members from all over the nation
            including famous industry leaders, brilliant scientists and
            dedicated academicians. CSI-TCET has more than 250 registered
            members and the chapter is growing day by day. Activities are being
            continuously planned and conducted and CSI-TCET has further gone on
            to become one of the most active student organizations at TCET.
          </div>
        </div>
        <img src="/home.jpg" className="w-3/12 h-1/3 rounded-lg ml-5" />
      </div>
    </>
  );
}

export default AboutUs;
