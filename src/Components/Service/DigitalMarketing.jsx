import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import service from "../images/main-slider/digital1.jpg";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import about from "../images/background/digital.jpg";
import { FaNetworkWired, FaMicrochip } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import benifits from "../images/background/benifits.jpg";
import { motion } from "framer-motion";


const faqs = [
    {
        question: "What is digital marketing?",
        answer:
            "Digital marketing is the promotion of brands, products, or services using online channels like social media, search engines, email, and websites to reach and engage a targeted audience",
    },
    {
        question: "How can digital marketing help my business?",
        answer:
            "It increases brand visibility, attracts potential customers, boosts engagement, and drives conversions, helping your business grow online.",
    },
    {
        question: "What digital marketing services do you offer?",
        answer:
            "We offer SEO, social media marketing, PPC advertising, content marketing, email marketing, and more to create a customized strategy for your business.",
    },
    {
        question: "How long does it take to see results?",
        answer:
            "Results vary based on the strategy used. SEO may take a few months, while PPC and social media ads can deliver quicker results.",
    },
    {
        question: "Do you offer social media management?",
        answer:
            "Yes! We handle everything from content creation and posting to audience engagement and ad management across platforms like Facebook, Instagram, LinkedIn, and more.",
    },
    {
        question: "What is SEO, and why is it important?",
        answer:
            "SEO (Search Engine Optimization) improves your website’s visibility on search engines, helping you rank higher and attract more organic traffic.",
    },
    {
        question: "Can you help with paid advertising?",
        answer:
            "Yes! We create and manage PPC (Pay-Per-Click) campaigns on Google Ads, Facebook Ads, and other platforms to maximize your return on investment",
    },
    {
        question: "How do you measure the success of a digital marketing campaign?",
        answer:
            "We track key performance indicators (KPIs) like website traffic, lead conversions, engagement rates, and ROI using advanced analytics tools.",
    },
    {
        question: "Do you offer content creation services?",
        answer:
            "Absolutely! We create high-quality blogs, social media posts, email campaigns, and website content to enhance your online presence.",
    },
    {
        question: "How can I get started with your digital marketing services?",
        answer:
            "Simply contact us, and we’ll schedule a consultation to discuss your goals and create a tailored digital marketing strategy for your business.",
    },
];

// const technologies = [
//   "FLUTTER",
//   "REACT NATIVE",
//   "ANDROID DEVELOPMENT",
//   "IOS DEVELOPMENT",
//   "FIREBASE",
//   "SQLITE",
// ];

const menuItems = [
    "User-Centric Digital Strategy",
    "SEO & Content Marketing",
    "Social Media Marketing (SMM)",
    "Performance-Driven Paid Advertising",
    "Email Marketing & Automation",
    "Analytics & Data-Driven Insights",
];

function DigitalMarketing() {
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
                        Digital Marketing
                    </h1>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-sm md:text-base">
                        <span className="text-[#ee8624]">Home</span>
                        <span className="text-white">&#62;</span>
                        <span className="text-[#ee8624]">Service</span>
                        <span className="text-white">&#62;</span>
                        <span className="text-gray-300">Digital Marketing</span>
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
                            Digital Marketing
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
                            Digital Marketing
                        </h1>
                        <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-7">
                            We provide digital marketing that helps businesses for better operational
                            efficiency and engagement. Hire a certified Digital marketing Expert from
                            BrainArt IT Solution who delivers excellence in all digital marketing
                            services.

                        </p>
                        <h1 className="text-[25px] text-[#333333] font-bold mt-6">
                            Result-Driven Digital Marketing            </h1>
                        <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-7">
                            We create powerful digital strategies that boost your brand visibility, drive engagement,
                            and increase conversions. From SEO to social media, we ensure your business reaches
                            the right audience and grows online.
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
                                                Comprehensive IT management and support solutions.
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
                                        We craft result-driven digital marketing strategies to enhance brand visibility and
                                        maximize growth.
                                    </p>

                                    <ul className="mt-3 space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Targeted Audience Reach</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Increased Engagement & Conversions</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Data-Driven Strategies
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>SEO & Social Media Optimization
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Cost-Effective Marketing Solutions</span>
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

export default DigitalMarketing;
