import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/Portfolio-Page/01.png";
import img2 from "../images/Portfolio-Page/02.png";
import img3 from "../images/Portfolio-Page/03.png";
import img4 from "../images/Portfolio-Page/04.png";
import img5 from "../images/Portfolio-Page/05.png";
import img6 from "../images/Portfolio-Page/05 (1).png";
import img7 from "../images/Portfolio-Page/06.png";
import img8 from "../images/Portfolio-Page/07.png";
import img9 from "../images/Portfolio-Page/08.png";
import "../Events/eventlast.css";

const images = [img1, img2, img3, img4, img5,
    img6,
    img7,
    img8,
    img9];

const EducationLast2 = () => {
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

export default EducationLast2;
