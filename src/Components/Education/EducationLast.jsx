import React from "react";
import "tailwindcss/tailwind.css";
import img8 from "../images/Education/112.png";
import img1 from "../images/Education/1112.png";
import img2 from "../images/Education/1113.png";
import img3 from "../images/Education/1114.png";
import img6 from "../images/Education/1116.png";
import img7 from "../images/Education/1117 1.png";

import "../Nextt/NextStep.css";

const images = [img8, img2, img6, img1, img7, img3];

const EductionLast = () => {
    return (
        <div className="container mt-20">
            <div className="slider w-[500px] h-[400px] flex">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`img-${index}`} className="image" />
                ))}
            </div>
        </div>
    );
};

export default EductionLast;
