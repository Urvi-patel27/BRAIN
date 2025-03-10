import React from "react";
import Medical from "../images/background/Frame 1000005930.png";

function OneMoreStepMain() {
    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8">
            {/* Image Section */}
            <div className="w-full max-w-4xl lg:max-w-6xl mt-16 sm:mt-24 md:mt-28">
                <img
                    src={Medical}
                    alt="Medical"
                    className="w-full rounded-lg shadow-lg object-cover"
                />
            </div>

            {/* App Overview */}
            <div className="w-full max-w-4xl lg:max-w-6xl mt-20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                    One More Steps Multimedia Educations – A Next-Level Digital Solutions Platform by BrainArt IT Solution
                </h1>
                <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
                    At BrainArt IT Solution, we had the privilege of developing OMS Multimedia, a cutting-edge platform that offers premium multimedia services. Our goal was to build a seamless, high-performance digital experience that empowers businesses and individuals with professional multimedia solutions.
                </p>
            </div>

            {/* Navigation Indicators */}
            <div className="flex space-x-2 mt-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></div>
            </div>

            {/* About the App */}
            <div className="w-full max-w-4xl lg:max-w-6xl mt-14">
                <h1 className="text-2xl sm:text-3xl font-bold text-black">About One More Steps Multimedia Educations</h1>
                <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
                    One More Steps Multimedia Educations is designed to provide a full range of creative and digital services, including branding, digital marketing, graphic design, video production, and more. The platform helps businesses strengthen their digital presence with high-quality content and innovative solutions.
                </p>
            </div>

            <div className="flex space-x-2 mt-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            </div>

            {/* Key Features Section */}
            <div className="w-full max-w-4xl lg:max-w-6xl mt-14">
                <h1 className="text-2xl sm:text-3xl font-bold text-black">Key Features We Delivered</h1>

                {[
                    ["Complete Multimedia Services ", "Everything from branding and marketing to video editing and graphic design."],
                    ["User-Friendly Interface", "An intuitive design for smooth navigation and effortless service selection."],
                    ["Portfolio Showcase", "A dedicated space to highlight past work and successful projects."],
                    ["Fast & Responsive Performance", "Optimized for speed, efficiency, and a flawless experience across all devices."],
                    ["Seamless Contact & Inquiry System ", "Easy-to-use contact forms and inquiry options for quick client engagement."],
                ].map(([title, description], index) => (
                    <div key={index} className="mt-6">
                        <h5 className="text-lg sm:text-xl font-bold text-black">{title}</h5>
                        <p className="text-gray-600 text-base sm:text-lg mt-2 leading-7">{description}</p>
                    </div>
                ))}

                <div className="flex space-x-2 mt-4" style={{ justifyContent: "center" }}>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>


                {/* Why Choose Us */}
                <h1 className="text-2xl sm:text-3xl font-bold text-black mt-10">Why We Built It</h1>
                <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
                    We wanted to develop a visually appealing, functional, and scalable platform that enables OMS Multimedia to deliver its services efficiently. This platform enhances brand identity and streamlines digital marketing efforts, making it easier for businesses to stand out in the digital world.
                </p>

                <div className="flex space-x-2 mt-4" style={{ justifyContent: "center" }}>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>

                {/* Call to Action */}
                <h1 className="text-2xl sm:text-3xl font-bold text-black mt-10">The Impact</h1>
                <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
                    One More Steps Multimedia Educations now serves as a highly functional and engaging platform that helps businesses access top-tier multimedia solutions with ease. It stands as a testament to BrainArt IT Solution’s expertise in crafting powerful, client-focused digital experiences.
                </p>


                <div className="flex space-x-2 mt-4" style={{ justifyContent: "center" }}>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>

                {/* Call to Action */}
                <h1 className="text-2xl sm:text-3xl font-bold text-black mt-10">Want to Build a Custom Digital Platform?</h1>
                <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
                    At BrainArt IT Solution, we specialize in tailored web and mobile solutions designed to meet unique business needs.
                    🚀 Let’s turn your vision into reality—Contact us today!
                </p>
            </div>
        </div>
    );
}

export default OneMoreStepMain;
