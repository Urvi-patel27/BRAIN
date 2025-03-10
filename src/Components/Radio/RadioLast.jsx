import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/games/41.png";
import img2 from "../images/games/42.png";
import img3 from "../images/games/43.png";
import img4 from "../images/games/44.png";

const images = [img1, img2, img3, img4];

const RadioLast = () => {
  return (
    <div className="flex items-center justify-center  text-white overflow-x-auto">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`img-${index}`} 
            className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[410px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default RadioLast;
