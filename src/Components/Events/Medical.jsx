import React from "react";
import tic from "../images/background/frame6.jpg.png";
import MedicalLast from "../Medical/medicalLast";
import MedicalHero from "../Medical/MedicalHero";

function Medical() {
    return (
        <>
            <MedicalHero />
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
                        Rayhan Medical Complex App – Your Healthcare, Simplified

                    </h1>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        At BrainArt IT Solution, we had the privilege of developing the Rayhan Medical Complex App, a seamless digital healthcare solution designed to enhance patient convenience and accessibility. This app connects users with top-tier medical services, making appointment booking, medical records access, and telemedicine easier than ever.

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
                        About the App
                    </h1>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        The Rayhan Medical Complex App is built to provide a simple, efficient, and user-friendly healthcare experience. Whether booking an appointment, viewing lab results, or consulting with a doctor online, this app ensures that quality medical care is always within reach.
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
                            title: " Online Appointment Booking ",
                            desc: "A hassle-free system for scheduling and managing doctor visits with ease.",
                        },
                        {
                            title: "Secure Medical Records Access",
                            desc: " Patients can securely view prescriptions, lab reports, and past consultations anytime.",
                        },
                        {
                            title: "Doctor & Service Directory",
                            desc: " A complete list of specialists and medical services to help users find the right healthcare provider.",
                        },
                        {
                            title: " Real-Time Notifications",
                            desc: "Automated reminders for appointments, test results, and health updates to keep users informed.",
                        },
                        {
                            title: " Telemedicine & Online Consultations",
                            desc: "Integrated telehealth services for convenient remote doctor consultations.",
                        },
                        {
                            title: " User-Friendly Experience",
                            desc: "Designed with a clean, intuitive interface that caters to patients of all age groups.",
                        },

                    ].map((feature, index) => (
                        <div key={index} className="mt-6">
                            <h5 className="text-lg font-semibold text-black">
                                {feature.title}
                            </h5>
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
                    <h3 className="text-2xl md:text-2xl font-bold text-black">
                        Why We Built It
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        Our goal was to create a smart, patient-centric healthcare solution that makes medical services more accessible, efficient, and seamless. With the Rayhan Medical Complex App, we’ve delivered an innovative platform that transforms the way patients interact with healthcare providers.
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
                        The Rayhan Medical Complex App is a modern, reliable, and scalable healthcare solution that simplifies medical interactions for both patients and healthcare professionals. It stands as a testament to our commitment to delivering high-quality digital solutions in the healthcare sector.
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

                            Looking to Develop a Healthcare App?
                        </span>
                        At BrainArt IT Solution, we specialize in building custom healthcare applications that revolutionize patient care.
                    </h4>
                    <p className="text-gray-600 text-lg mt-4 leading-7">
                        Let’s bring your healthcare app idea to life—Contact us today!
                    </p>
                </div>
            </div>
            <MedicalLast />
        </>
    );
}

export default Medical;
