import React from "react";
import tic from "../images/background/frame8.jpg.png";
import EducationLast from "../Education/EducationLast";
import EducationHero from "../Education/EducationHero";
import EducationLast2 from "../Education/EducationLast2";

function Education() {
    return (
        <>
            <EducationHero />
            <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
                {/* {/ Image Section /} */}
                <div className="w-full max-w-6xl">
                    <img
                        src={tic}
                        alt="Tic Tac Toe Game Preview"
                        className="w-full rounded-lg shadow-lg mt-20"
                    />
                </div>

                {/* {/ Project Details /} */}
                <div className="max-w-6xl mt-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-black">
                        OMS Multimedia – A Next-Level Digital Solutions Platform by BrainArt IT Solution
                    </h1>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        At BrainArt IT Solution, we had the privilege of developing OMS Multimedia, a cutting-edge platform that offers premium multimedia services. Our goal was to build a seamless, high-performance digital experience that empowers businesses and individuals with professional multimedia solutions.
                    </p>
                    <div className="flex space-x-2 mt-4 justify-center">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                </div>

                {/* {/ About the Project /} */}
                <div className="max-w-6xl mt-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-black">

                        About OMS Multimedia
                    </h1>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        OMS Multimedia is designed to provide a full range of creative and digital services, including branding, digital marketing, graphic design, video production, and more. The platform helps businesses strengthen their digital presence with high-quality content and innovative solutions.
                    </p>
                </div>
                <div className="flex space-x-2 mt-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
                {/* {/ Key Features /} */}
                <div className="max-w-6xl w-full mt-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-black">

                        Key Features We Delivered
                    </h1>

                    {[
                        {
                            title: "Complete Multimedia Services  ",
                            desc: " Everything from branding and marketing to video editing and graphic design.",
                        },
                        {
                            title: " User-Friendly Interface",
                            desc: "An intuitive design for smooth navigation and effortless service selection.",
                        },
                        {
                            title: "Portfolio Showcase",
                            desc: "A dedicated space to highlight past work and successful projects.",
                        },
                        {
                            title: "Fast & Responsive Performance ",
                            desc: "Optimized for speed, efficiency, and a flawless experience across all devices.",
                        },
                        {
                            title: "  Seamless Contact & Inquiry System",
                            desc: "Easy-to-use contact forms and inquiry options for quick client engagement.",
                        },

                    ].map((feature, index) => (
                        <div key={index} className="mt-6">
                            <h5 className="text-lg font-semibold text-black">
                                {feature.title}
                            </h5>
                            <p className="text-gray-600 text-base leading-7">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex space-x-2 mt-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>

                {/* {/ Technologies Used /} */}
                <div className="max-w-6xl w-full mt-14">
                    <h3 className="text-2xl md:text-2xl font-bold text-black">
                        Why We Built It
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        We wanted to develop a visually appealing, functional, and scalable platform that enables OMS Multimedia to deliver its services efficiently. This platform enhances brand identity and streamlines digital marketing efforts, making it easier for businesses to stand out in the digital world.
                    </p>
                </div>
                <div className="flex space-x-2 mt-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>

                {/* {/ Why Choose Us /} */}
                <div className="max-w-6xl w-full mt-14">
                    <h3 className="text-2xl md:text-2xl font-bold text-black">
                        The Impact
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        OMS Multimedia now serves as a highly functional and engaging platform that helps businesses access top-tier multimedia solutions with ease. It stands as a testament to BrainArt IT Solution’s expertise in crafting powerful, client-focused digital experiences.

                    </p>
                </div>
                <div className="flex space-x-2 mt-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
                {/* {/ Call to Action /} */}
                <div className="max-w-6xl mt-14 text-center md:text-left">
                    <h4 className="text-xl font-bold text-black">
                        <span className="text-[#113A69]">
                            Want to Build a Custom Digital Platform?
                        </span>
                        At BrainArt IT Solution, we specialize in tailored web and mobile solutions designed to meet unique business needs.
                    </h4>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        Let’s turn your vision into reality—Contact us today!
                    </p>
                </div>
            </div>
            <EducationLast2 />
            <EducationLast />
        </>
    );
}

export default Education;
