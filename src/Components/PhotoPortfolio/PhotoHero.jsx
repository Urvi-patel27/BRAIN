import React from "react";
import about from "../images/abouts.jpg";

function PhotoHero() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center text-white px-4 sm:px-6 md:px-10">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* Darker Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content aligned to left */}
      <div className="relative z-10">
        <h1 className="text-[36px] sm:text-[45px] md:text-5xl font-bold leading-tight">
          Photo Recovery & Data Recovery
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mt-2 text-sm md:text-base">
          <span className="text-[#ee8624]">Home</span>
          <span className="text-gray-400">&#62;</span>
          <span className="text-[#ee8624]">Portfolio</span>
          <span className="text-gray-400">&#62;</span>
          <span className="text-gray-300">Photo Recovery & Data Recovery</span>
        </nav>
      </div>
    </div>
  );
}

export default PhotoHero;
