import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import service from "../images/main-slider/002-removebg-preview.png";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import about from "../images/main-slider/mobileapp.jpg";
import { FaNetworkWired, FaMicrochip } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import benifits from "../images/background/benifits.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is mobile app development?",
        answer:
            "Mobile app development is the process of creating software applications specifically designed to run on mobile devices such as smartphones and tablets. This includes both native apps and cross-platform applications",
    },
    {
        question: "What platforms do you develop apps for?",
        answer:
            "We develop apps for various platforms, including iOS, Android, and cross-platform solutions that work on both operating systems, ensuring maximum reach and compatibility.",
    },
    {
        question: "How long does it take to develop a mobile app?",
        answer:
            "The timeline for mobile app development depends on the app's complexity, features, and design. Generally, the process can take anywhere from a few weeks to several months. We provide an estimated timeline during the initial consultation.",
    },
    {
        question: "What is the cost of developing a mobile app?",
        answer:
            "The cost of mobile app development varies based on factors such as app complexity, design requirements, and features. We offer tailored quotes after discussing your specific project needs.",
    },
    {
        question: "How do I get started with my mobile app project?",
        answer:
            "Getting started is simple! Fill out our contact form or reach out to us directly to schedule a consultation. We’ll discuss your ideas and how we can help bring them to life.",
    },
    {
        question: "Will my app be available on the App Store and Google Play?",
        answer:
            "Yes, we handle the submission process to both the Apple App Store and Google Play Store, ensuring that your app meets all necessary guidelines and requirements for approval.",
    },
    {
        question: "Do you provide post-launch support and maintenance?",
        answer:
            "Absolutely! We offer post-launch support, including updates, bug fixes, and ongoing maintenance, to keep your app running smoothly and up-to-date with the latest technologies. ",
    },
    {
        question: "What technologies do you use for mobile app development?",
        answer:
            "We utilize a range of technologies and frameworks, including native development (Swift for iOS and Kotlin for Android) and cross-platform solutions (such as React Native and Flutter), depending on your project requirements",
    },
    {
        question: "Can you assist with app marketing strategies?",
        answer:
            "While our primary focus is on app development, we can provide guidance on effective marketing strategies to help promote your app and reach your target audience.",
    },
    {
        question: "Can you help with app design as well?",
        answer:
            "Yes, we offer comprehensive services that include UI/UX design to ensure your app is visually appealing and user-friendly, enhancing the overall user experience.",
    },
];

const menuItems = [
    "Native App Development",
    "Hybrid App Development",
    "Progressive Web Apps",
    "App Migrations & Integrations",
    "App Support & Maintenance",
    "Custom App Development",
];

function MobileApp() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [hovered, setHovered] = useState(null);

    return (
        <>
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center text-white mt-14">
                <div
                    className="absolute inset-0 bg-cover bg-center md:bg-top"
                    style={{ backgroundImage: `url(${about})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <div className="relative z-10 px-6 sm:px-10 md:px-20 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        App development
                    </h1>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-sm md:text-base">
                        <span className="text-[#ee8624]">Home</span>
                        <span className="text-white">&#62;</span>
                        <span className="text-[#ee8624]">Service</span>
                        <span className="text-white">&#62;</span>
                        <span className="text-gray-300">Mobile App Development
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px mt-14">
                <div className="w-full max-w-6xl bg-white flex flex-col md:flex-row items-start ">
                    <div className="w-full max-w-[350px] flex-shrink-0 bg-[#EE8624] p-3 h-full md:h-auto">
                        <div className="relative">
                            <div className="bg-black text-white font-bold text-lg p-3">
                                All Service
                            </div>
                            <div className="absolute left-4 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
                        </div>

                        <div className="bg-black text-white font-semibold p-3 mt-3 w-full flex items-center justify-between">
                            Mobile App Development
                            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-r-[10px] border-r-transparent"></div>
                        </div>

                        <div className="mt-3 space-y-2">
                            {menuItems.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative flex items-center justify-between px-4 py-3 border border-white cursor-pointer
        transition-all duration-300 shadow-sm overflow-hidden group bg-white hover:border-black"
                                >
                                    {/* {/ Background transition /} */}
                                    <div className="absolute inset-0 bg-black transition-all duration-300 scale-x-0 origin-left group-hover:scale-x-100"></div>

                                    {/* {/ Text fix: Use z-index to keep it visible /} */}
                                    <span className="relative z-10  transition-colors duration-300 group-hover:text-white">
                                        {service}
                                    </span>

                                    {/* {/ Icon fix /} */}
                                    <ChevronRight
                                        size={18}
                                        className="relative z-10  duration-300 text-black group-hover:text-white"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-3/4 p-4 md:p-8 flex flex-col items-start h-full">
                        <img
                            src={service}
                            alt="Services"
                            className="w-full max-w-6xl h-auto mb-8 "
                        />
                        <h1 className="text-3xl md:text-[30px] font-bold text-[#333333]">
                            Mobile App Development
                        </h1>
                        <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-7">
                            We create mobile apps that help businesses work more efficiently and
                            connect better with their customers. Our skilled developers at BrainArt IT
                            Solution specialize in building high-quality Android, iOS, and cross-platform
                            apps to meet your needs.
                        </p>
                        <h1 className="text-[25px] text-[#333333] font-bold mt-6">
                            Mobile-First Approach for Better Results
                        </h1>
                        <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-7">
                            We create smooth and efficient mobile experiences that improve operations
                            and keep customers happy. Our expertise ensures your app works seamlessly
                            across all platforms.
                        </p>

                        <section className="py-10 text-[#333333] ">
                            <div className="max-w-6xl mx-auto px-">
                                <h2 className="text-[25px] font-bold mb-6  md:text-left">
                                    Why Choose BrainArt IT Solution?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex bg-white shadow-md overflow-hidden">
                                        <div className="bg-[#EE8624] p-6 min-h-full flex items-center justify-center w-24">
                                            <FaNetworkWired className="text-white text-3xl" />
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <h3 className="font-bold text-lg">
                                                Managed Tech Services
                                            </h3>
                                            <p className="text-gray-600">
                                                – Comprehensive IT management and support solutions
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex bg-white shadow-md overflow-hidden">
                                        <div className="bg-[#EE8624] p-6 min-h-full flex items-center justify-center w-24">
                                            <FaMicrochip className="text-white text-3xl" />
                                        </div>
                                        <div className="p-6 flex-grow">
                                            <h3 className="font-bold text-lg">
                                                IT Consulting Solutions
                                            </h3>
                                            <p className="text-gray-600">
                                                Strategic consulting to enhance your business technology
                                                infrastructure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-10 bg-white text-black">
                            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                                <div>
                                    <img
                                        src={benifits}
                                        alt="Benefits"
                                        className="rounded-lg shadow-md"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold">Our Few Benefits</h2>
                                    <p className="text-gray-600 mt-2">
                                        We create powerful, user-friendly mobile apps for seamless
                                        performance and better engagement.
                                    </p>

                                    <ul className="mt-3 space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Cross-Platform Compatibility</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span> Smooth Performance</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span> Ongoing Support</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span> On-time Delivery</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span> Cost Efficient</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <div className="flex justify-center items-center min-h-screen px-4">
                            <div className="w-full md:w-[700px] max-w-full">
                                <h2 className="text-xl md:text-3xl font-bold mb-8">
                                    Frequently Asked Questions (FAQs)
                                </h2>
                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border overflow-hidden w-full ">
                                            <button
                                                className={`flex justify-between items-center w-full px-5 py-4 text-[15px] md:text-[16px] text-left transition-all duration-300 ${openIndex === index
                                                    ? "bg-[#EE8624] text-white"
                                                    : "bg-white text-black"
                                                    }`}
                                                onClick={() => toggleFAQ(index)}
                                            >
                                                <span className="flex-1">{faq.question}</span>
                                                <span
                                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                                        }`}
                                                >
                                                    {openIndex === index ? (
                                                        <FaMinus size={16} />
                                                    ) : (
                                                        <FaPlus size={16} />
                                                    )}
                                                </span>
                                            </button>
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={
                                                    openIndex === index
                                                        ? { height: "auto", opacity: 1 }
                                                        : { height: 0, opacity: 0 }
                                                }
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 py-5 text-[14px] md:text-[15px] text-gray-800">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileApp;
