import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/Next/222228 1.png";
import img2 from "../images/Next/222226.png";
import img3 from "../images/Next/222225.png";
import img4 from "../images/Next/222224 1.png";
import img5 from "../images/Next/222223 1.png";
import img6 from "../images/Next/222221 1.png";

import "./NextStep.css";

const images = [img1, img2, img4, img5, img6, img3];

const NextLast = () => {
    return (
        <div className="container mt-20 ">
            <div className="slider w-[300px] h-[400px] flex">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`img-${index}`} className="image" />
                ))}
            </div>
        </div>
    );
};

export default NextLast;
