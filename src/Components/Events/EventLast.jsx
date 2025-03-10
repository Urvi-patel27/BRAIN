import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/Portfolio-Page/e1.png";
import img2 from "../images/Portfolio-Page/e2.png";
import img3 from "../images/Portfolio-Page/e3.png";
import img4 from "../images/Portfolio-Page/e4.png";
import img5 from "../images/Portfolio-Page/e5.png";
import img6 from "../images/Portfolio-Page/e6.png";
import img7 from "../images/Portfolio-Page/e7.png";
import img8 from "../images/Portfolio-Page/e8.png";
import img9 from "../images/Portfolio-Page/e9.png";
import "../Events/eventlast.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const EventLast = () => {
  return (

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

export default EventLast;
