import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import service from "../images/resource/web dev.png";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FaPlus, FaMinus } from "react-icons/fa";
import about from "../images/main-slider/web.jpg";
import { FaNetworkWired, FaMicrochip } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import benifits from "../images/background/benifits.jpg";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "What is web development?",
        answer:
            "Web development refers to creating and maintaining websites and web applications. It helps businesses establish a strong online presence, improve customer engagement, and drive more leads or sales through a user-friendly digital experience.",
    },
    {
        question: "How long does it take to develop a website?",
        answer:
            "The timeline for web development depends on the complexity, features, and design requirements of the website. Simple websites may take 4-6 weeks, while more complexwebsites can take 3-6 months or longer",
    },
    {
        question: "What types of websites can you develop?",
        answer:
            "We specialize in a wide range of websites, including e-commerce platforms, corporate websites, blogs, portfolio sites, web applications, landing pages, and custom solution tailored to your specific needs",
    },
    {
        question: "How much does web development cost?",
        answer:
            "The cost of web development varies based on factors such as the website's size, functionality, design requirements, and features. We offer flexible pricing models andprovide a detailed quote after understanding your project needs.",
    },
    {
        question: "Do you offer custom web development solutions?",
        answer:
            "Yes, we offer fully customized web development solutions that align with your business goals and branding. We work closely with you to create a website tailored to your specific requirements.",
    },
    {
        question: "Will my website be mobile-friendly and SEO-optimized?",
        answer:
            "Absolutely! All websites we develop are mobile-responsive and optimized for search engines (SEO). This ensures your website functions well on any device and ranks higher in search engine results.",
    },
    {
        question: "What technologies do you use for web development?",
        answer:
            "We work with a wide range of modern technologies, including ReactJS, AngularJS, NodeJS, PHP, .NET, CodeIgniter, Laravel, and more, to build scalable, secure, and high-performing websites.",
    },
    {
        question:
            "Can you help with website maintenance and updates after development?",
        answer:
            "Yes, we offer post-development maintenance services to ensure your website stays updated, secure, and functional. We can also assist with any additional features or updates as your business evolves.",
    },
    {
        question: "Will I have control over my website content?",
        answer:
            "Yes, we build websites using content management systems (CMS) such as WordPress, Drupal, or custom-built platforms, allowing you to easily manage and update your website content without technical expertise",
    },
    {
        question: "How do you ensure the security of the website?",
        answer:
            "We follow best practices in web security, including SSL encryption, data protection, regular security audits, and implementing firewalls. We also integrate security plugins and monitor for any vulnerabilities to keep your site secure",
    },
];

const technologies = [
    "FLUTTER",
    "REACT NATIVE",
    "ANDROID DEVELOPMENT",
    "IOS DEVELOPMENT",
    "FIREBASE",
    "SQLITE",
];

const menuItems = [
    " Custom Web Development",
    " Open Source Web Development",
    " Front-end Web Development",
    " Back-end Web Development",
    " CMS Web Development",
    "Progressive Web Development",
];

function WebMain() {
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
                        Web Development
                    </h1>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-sm md:text-base">
                        <span className="text-[#ee8624]">Home</span>
                        <span className="text-white">&#62;</span>
                        <span className="text-[#ee8624]">Service</span>
                        <span className="text-white">&#62;</span>
                        <span className="text-gray-300">Web Development</span>
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
                            Web Development
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
                                        className="relative z-10  text-black duration-300 group-hover:text-white"
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
                            Web Development
                        </h1>
                        <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-7">
                            BrainArt IT Solution is a top website design and web development
                            company in India & USA delivering the best web development services to
                            craft bespoke websites, web applications, web-tools, etc. to global
                            businesses and startups with 100% project delivery
                        </p>
                        <h1 className="text-[25px] text-[#333333] font-bold mt-6">
                            Web-First Approach for Better Results

                        </h1>
                        <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] leading-7">
                            We build fast, secure, and user-friendly websites that enhance business
                            efficiency and customer engagement. Our expertise ensures seamless
                            performance across all devices and browsers.
                        </p>

                        <section className="py-10 text-[#333333] ">
                            <div className="max-w-6xl mx-auto px-">
                                <h2 className="text-[25px] font-bold mb-6 md:text-left">
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
                                        Custom Web Solutions
                                    </p>

                                    <ul className="mt-3 space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Fast & Responsive Design</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>SEO-Friendly Structure</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Secure & Scalable</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Ongoing Support & Maintenance</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700 before:content-['•'] before:text-black before:text-3xl">
                                            <span>Timely Project Delivery</span>
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

export default WebMain;
