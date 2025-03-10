import React from "react";
import about from "../images/main-slider/abouts.jpg";

function Careerhero() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center text-white mt-14">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* Darker Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content aligned to left */}
      <div className="relative z-10 px-4 ml-10 md:ml-20">
        <h1 className="text-[55px] md:text-5xl font-bold">Career</h1>
        <div className="flex items-center gap-2 mt-2 text-sm md:text-base">
          <span className="text-[#ee8624]">Home</span>
          <span className="text-white"><i class="fa-solid fa-angles-right"></i></span>
          <span className="text-gray-300">Career</span>
        </div>
      </div>
    </div>
  );
}

export default Careerhero;
