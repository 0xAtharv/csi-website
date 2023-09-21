import React from "react";
import "../App.css";
import "animate.css";


function FindUS() {
  const iframeStyle = {
    borderRadius:"10px",
  };
  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col m-2 w-screen animate__animated animate__fadeIn justify-center align-middle">
          <div className="flex flex-col p-1 text-white text-xl mt-10 ml-5">
             <div className="flex flex-row pt-1.5 "> <img src="public/pin.svg" className="w-12 h-12 pr-2 "/>
        <h1 className="text-4xl ">Find Us</h1></div>
       
          <div className="pt-10">
           <div className="ml-2"> <h3>Thakur college of Engineering and Technology</h3>
            
              Thakur Campus, Kandivali East, Gate No:5, Mumbai: 400101
                  </div>
                  <br/>
                  <div className="flex flex-row items-center">
                  <img src="public/mail.svg" className="w-12 h-12 pr-2 "/>
              <span className="">Email: officialcsitect@gmail.com</span>
                  </div>
                  <br/>
                  <div className="flex flex-row">
                  <img src="public/call.svg" className="w-12 h-12 pr-2 "/>
              <span className="pt-1.5">Purvashi Shah:  9552276964</span>
            </div>
                  <div className="flex flex-row">
                  <img src="public/call.svg" className="w-12 h-12 pr-2 "/>
              <span className="pt-1.5">Yogesh Shukla: 
              9820454730</span>
            </div>
          </div>
        
      </div>
      <div style={iframeStyle} className="right-0">
        <iframe
          className="p-10 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7458391065666!2d72.87203067510374!3d19.20630028202532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1694790431300!5m2!1sen!2sin"
          
                  //   style={{"border: 0,width:600,height:450"}}
                  style={{
                    border: "0",
                    width: "100%",
                      height: "450px",
                      borderRadius:"40px",
                    
                  }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default FindUS;
