import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/Portfolio-Page/g1.png";
import img2 from "../images/Portfolio-Page/g2.png";
import img3 from "../images/Portfolio-Page/g3.png";
import img4 from "../images/Portfolio-Page/g4.png";
import img5 from "../images/Portfolio-Page/g5.png";
import img6 from "../images/Portfolio-Page/g6.png";
import img7 from "../images/Portfolio-Page/g7.png";
import img8 from "../images/Portfolio-Page/g8.png";
// import img9 from "../images/Portfolio-Page/g9.png";
// import img10 from "../images/Portfolio-Page/g10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const LastImg = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide slider">
      <div className="flex space-x-4 p-4 snap-x snap-mandatory">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="w-[300px] h-[400px] object-cover rounded-lg snap-center"
          />
        ))}
      </div>
    </div>
  );
};

export default LastImg;
