import React from "react";
import about from "../images/abouts.jpg";

function EductionHero() {
    return (
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] flex items-center text-white mt-14">
            {/* {/ Background Image with Overlay /} */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${about})` }}
            >
                {/* {/ Darker Black Overlay /} */}
                <div className="absolute inset-0 bg-black opacity-50 sm:opacity-70"></div>
            </div>

            {/* {/ Content aligned to left /} */}
            <div className="relative z-10 px-6 md:px-10">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold break-words">
                    One More Step Multimedia Education
                </h1>
                <div className="flex items-center gap-2 mt-2 text-sm md:text-base flex-wrap">
                    <span className="text-[#ee8624]">Home</span>
                    <span className="text-white">&#62;</span>
                    <span className="text-[#ee8624]">Portfolio</span>
                    <span className="text-white">&#62;</span>
                    <span className="text-gray-300">One More Step Multimedia Education</span>
                </div>
            </div>
        </div>
    );
}

export default EductionHero;
