import React from "react";
import about from "../images/abouts.jpg";

function TicHero() {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center text-white mt-14">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* Darker Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20">
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[55px] font-bold">
          Tic-Tac-Toe Pro
        </h1>
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm md:text-base">
          <span className="text-[#ee8624]">Home</span>
          <span className="text-white">&#62;</span>
          <span className="text-[#ee8624]">Portfolio</span>
          <span className="text-white">&#62;</span>
          <span className="text-gray-300">Tic-Tac-Toe Pro</span>
        </div>
      </div>
    </div>
  );
}

export default TicHero;
