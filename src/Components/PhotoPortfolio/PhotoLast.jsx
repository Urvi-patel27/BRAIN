import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/games/31.png";
import img2 from "../images/games/32.png";
import img3 from "../images/games/33.png";
import img4 from "../images/games/34.png";
import img5 from "../images/games/35.png";
import img6 from "../images/games/36.png";
import img7 from "../images/games/37.png";
import img8 from "../images/games/38.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const PhotoLast = () => {
  return (
    <div className="w-full  px-4">
      <div className="flex overflow-x-auto gap-6 p-4 scroll-auto snap-x snap-mandatory scrollbar-hide scroll-pl-4 slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            loading="lazy"
            aria-hidden="true"
            className=" h-[400px] object-cover rounded-lg flex-shrink-0 snap-center"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoLast;
