import React from "react";
import calendar from "../images/new icon/calendar.png";
import time from "../images/new icon/time-left.png";
import target from "../images/new icon/target.png";
import training from "../images/new icon/training.png";
import growth from "../images/new icon/growth.png";
import ce from "../images/new icon/celebration.png";

const benefits = [
  { img: calendar, text: "Career Growth" },
  { img: time, text: "Work-Life Balance" },
  { img: target, text: "Flexible Working Hours" },
  { img: training, text: "Fun & Engaging Culture" },
  { img: growth, text: "Innovative Projects" },
  { img: ce, text: "Inspiring Work Culture" },
  { img: ce, text: "Achievement & Recognition" },
  { img: ce, text: "Collaborative Team" },
];

function CareerBenefits() {
  return (
    <div className="container text-center" style={{ padding: "100px 0px" }}>


      <div>
        <h1 style={{ fontSize: "40px", fontWeight: "bolder" }}>Why <span style={{ color: "#ee8624" }}>Join Us?</span> </h1>
        <p style={{ fontSize: "18px", marginTop: "20px", width: "80%", margin: "auto" }}>Become part of a dynamic, innovative, and supportive team where your skills are
          valued, and your growth matters. Together, we create a meaningful impact in the
          industry. </p>
      </div>

      <div className="flex justify-center items-center bg-white" style={{ padding: "100px 0px 0px 0px" }}>

        <div className="w-full max-w-6xl px-4 flex flex-col items-center gap-10">

          {/* First two rows with 3 items each */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
            {benefits.slice(0, 6).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center mt-3">
                <div className="bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center">
                  <img src={benefit.img} alt={benefit.text} className="w-12 h-12" />
                </div>
                <p className="mt-4 font-sans font-bold text-[18px] text-[#000000]">{benefit.text}</p>
              </div>
            ))}
          </div>


          {/* Last row with 2 centered items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-auto place-items-center">
            {benefits.slice(6, 8).map((benefit, index) => (
              <div key={index} className="flex flex-col items-center mt-3">
                <div className="bg-white shadow-lg rounded-full w-24 h-24 flex items-center justify-center">
                  <img src={benefit.img} alt={benefit.text} className="w-12 h-12" />
                </div>
                <p className="mt-4 font-sans font-bold text-[18px] text-[#000000]">{benefit.text}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}

export default CareerBenefits;
