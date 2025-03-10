import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../HomeFirst/HeroSection1.css";
import roundImage from "../images/background/frame-hero-2-1.png";

// Import background images
import bgImage1 from "../images/background/slider-1-1.jpg";
import bgImage2 from "../images/background/slider-1-2.jpg";

const images = [bgImage1, bgImage2];

const Herosection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [animateText, setAnimateText] = useState(false);
    const [animateButton, setAnimateButton] = useState(false);

    // Automatic image change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setAnimateText(true);
            setAnimateButton(true);

            setTimeout(() => {
                setAnimateText(false);
                setAnimateButton(false);
            }, 1000); // Reset animations after 1 sec
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setAnimateText(true);
        setAnimateButton(true);

        setTimeout(() => {
            setAnimateText(false);
            setAnimateButton(false);
        }, 1000);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        setAnimateText(true);
        setAnimateButton(true);

        setTimeout(() => {
            setAnimateText(false);
            setAnimateButton(false);
        }, 1000);
    };

    return (
        <div className="HeroSection-Start h-screen flex items-center justify-center relative">
            <section className="banner-section-two h-screen w-full justify-center relative">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        src={images[currentImage]}
                        alt="Background"
                        className="w-full h-full object-cover transition-all duration-700"
                    />
                </div>

                {/* Content Div */}
                <div className="container relative z-10">
                    <div className="main-div-r-t-s flex flex-col md:flex-row items-center justify-between">
                        {/* Rotating Image */}
                        <div className="roundImageRotateDiv">
                            <img src={roundImage} alt="Hero" className="Rondded" />
                        </div>

                        {/* Text & Buttons with Animation */}
                        <div className="taxxxessss">
                            <span
                                key={currentImage}
                                className={`sub-title text-lg ${animateText ? "animate-fadeIn" : ""}`}
                                style={{ color: '#ee8624', fontWeight: "600", letterSpacing: "2PX" }}
                            >
                                IT SOFTWARE SOLUTION
                            </span>
                            <h1
                                key={`title-${currentImage}`}
                                className={`title font-bold text-white leading-tight ${animateText ? "animate-slideUp" : ""}`}
                            >
                                IT SOFTWARE <br /> TECH & SOLUTIONS
                            </h1>
                            <div className={`flex flex-col sm:flex-row gap-4 mt-6 bts-hpage ${animateButton ? "animate-zoomIn" : ""}`}>
                                <Link to="/about" className="ostech-btn bg-blue-500 text-white px-6 py-3   hover:bg-blue-600 transition " style={{ justifySelf: "center" }} >
                                    Discover More
                                </Link>
                                <Link to="/services" className="ostech-btn bg-green-500 text-white px-6 py-3   hover:bg-green-600 transition " style={{ justifySelf: "center" }} >
                                    Take Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="sbd-1 flex gap-2">
                    {/* Forward Button with Square Transparent Box Effect */}
                    <div className={`p-2 w-8 h-8 flex items-center justify-center ${currentImage === 0 ? "bg-white/30 backdrop-blur-md shadow-md" : ""}`}>
                        <button
                            onClick={nextImage}
                            className={`w-5 h-5  ${currentImage === 0 ? "bg-[#ee8624]" : "bg-gray-200"} `}
                        >
                        </button>
                    </div>

                    {/* Backward Button with Square Transparent Box Effect */}
                    <div className={`p-2 w-8 h-8 flex items-center justify-center ${currentImage === 1 ? "bg-white/30 backdrop-blur-md shadow-md" : ""}`}>
                        <button
                            onClick={prevImage}
                            className={`w-6 h-5 ${currentImage === 1 ? "bg-[#ee8624]" : "bg-gray-200"}`}
                        >
                        </button>
                    </div>
                </div>




            </section >
        </div >
    );
};

export default Herosection;
