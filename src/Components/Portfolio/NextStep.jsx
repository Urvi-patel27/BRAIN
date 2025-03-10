import React from "react";
import tic from "../images/background/frame7.jpg.png";
import NextHero from "../Nextt/NextHero";
import NextLast from "../Nextt/NextLast";
import NextLast2 from "../Nextt/NextLast2";

function NextStep() {
    return (
        <>
            <NextHero />
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
                    <h1 className="text-3xl md:text-4xl font-bold text-black">NextStep Freelancing – A Powerful Freelancing Platform by BrainArt IT Solution
                    </h1>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        At BrainArt IT Solution, we had the privilege of developing NextStep Freelancing, a dynamic platform designed to empower freelancers and professionals in their career journey. Our mission was to create a seamless, user-friendly experience that provides freelancers with the insights, resources, and tools needed to thrive in today’s competitive market.
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
                        About the Platform</h1>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        NextStep Freelancing is built to support individuals in launching and scaling their freelancing careers. From mastering industry best practices to connecting with clients, the platform offers a comprehensive suite of features to help freelancers succeed.

                    </p>
                </div>
                <div className="flex space-x-2 mt-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>
                {/* {/ Key Features /} */}
                <div className="max-w-6xl w-full mt-14">
                    <h1 className="text-3xl md:text-4xl font-bold text-black">Key Features We Delivered</h1>

                    {[
                        { title: " Freelancing Guides & Resources", desc: " A knowledge base with expert insights on client acquisition, pricing strategies, and business growth." },
                        { title: "Skill Development Hub", desc: "Access to curated courses and learning materials for professional skill enhancement." },
                        { title: " Job & Client Matching", desc: " A streamlined system that connects freelancers with potential clients and job opportunities." },
                        { title: "Community & Networking ", desc: "Interactive forums and networking spaces for collaboration and professional growth." },
                        { title: " User-Friendly & Responsive Design ", desc: "Optimized for smooth navigation across all devices, ensuring a seamless user experience." },

                    ].map((feature, index) => (
                        <div key={index} className="mt-6">
                            <h5 className="text-lg font-semibold text-black">{feature.title}</h5>
                            <p className="text-gray-600 text-base leading-7">{feature.desc}</p>
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
                    <h3 className="text-2xl md:text-2xl font-bold text-black">Why We Built It</h3>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        Our vision was to develop a scalable, high-performance, and engaging platform that empowers freelancers to achieve their professional goals. With NextStep Freelancing, we have delivered a powerful, intuitive, and future-ready solution for independent professionals.
                    </p>
                </div>
                <div className="flex space-x-2 mt-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                </div>

                {/* {/ Why Choose Us /} */}
                <div className="max-w-6xl w-full mt-14">
                    <h3 className="text-2xl md:text-2xl font-bold text-black">The Impact</h3>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        NextStep Freelancing has transformed the way freelancers learn, connect, and grow. It stands as a testament to BrainArt IT Solution’s expertise in crafting innovative digital solutions tailored to client needs.
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
                            Looking to Build a Custom Web Platform?</span>
                        At BrainArt IT Solution, we specialize in developing custom web and mobile solutions that bring your vision to life.
                    </h4>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        Let’s build something amazing together—contact us today!
                    </p>
                </div>
            </div>
            <NextLast2 />
            <NextLast />
        </>
    );
}

export default NextStep;
