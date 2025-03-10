import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/Medical/mc1.png";
import img2 from "../images/Medical/mc2.png";
import img3 from "../images/Medical/mc3.png";
import img4 from "../images/Medical/mc4.png";
import img5 from "../images/Medical/mc5.png";
import img6 from "../images/Medical/mc6.png";
import img7 from "../images/Medical/mc7.png";
import img8 from "../images/Medical/mc8.png";
import img9 from "../images/Medical/mc9.png";
import img10 from "../images/Medical/mc10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const MedicalLast = () => {
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-x-auto">
        <div className="container">
            <div className="flex space-x-4 p-4 justify-center slider">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`img-${index}`}
                        className=" justify-center h-[410px] object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
        // </div>
    );
};

export default MedicalLast;
