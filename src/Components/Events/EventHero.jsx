import React from "react";
import about from "../images/abouts.jpg";

function EventHero() {
  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[400px] flex items-center text-white mt-14">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${about})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 px-6 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold">
          Dynamic Event Management App
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mt-2 text-sm sm:text-base">
          <span className="text-[#ee8624]">Home</span>
          <span className="text-white">&#62;</span>
          <span className="text-[#ee8624]">Portfolio</span>
          <span className="text-white">&#62;</span>
          <span className="text-gray-300">Dynamic Event Management App</span>
        </nav>
      </div>
    </div>
  );
}

export default EventHero;
