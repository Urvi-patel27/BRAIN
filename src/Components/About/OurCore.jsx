import React from "react";
import happy from "../images/icons/customer-service.png";
import innovation from "../images/icons/innovation.png";
import integrity from "../images/icons/integration.png";
import respect from "../images/icons/respect.png";
import check from "../images/icons/checked.png";

const values = [
  {
    title: "Honesty",
    description:
      "We believe in open communication and complete transparency with our clients and team members. Honesty is the foundation of our relationships and inspires trust in everything we do.",
    image: respect,
  },
  {
    title: "Happiness",
    description:
      "We prioritize creating a positive work environment where innovation thrives. A happy team ensures better collaboration, productivity, and exceptional results for our clients.",
    image: happy,
  },
  {
    title: "Quality",
    description:
      "Excellence is at the heart of our services. We are committed to delivering top-notch IT solutions that meet and exceed expectations, ensuring our clients' success and satisfaction.",
    image: check,
  },
  {
    title: "Innovation",
    description:
      "At BrainArt, we think outside the box to create new and smart solutions. Our fresh ideas help us stay ahead in the fast- changing digital world. ",
    image: innovation,
  },
  {
    title: "Integrity",
    description:
      "We believe in doing the right thing, always. Honesty, fairness, and accountability guide us, ensuring trust and long- term success for our clients and our company. ",
    image: integrity,
  },
];

function OurCore() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-100 text-center">
      <h2 className="text-[50px] font-bold text-[#113A69] mb-2">Our Process
      </h2>
      <div style={{
        width: "140px",
        height: '3px',
        background: 'linear-gradient(to right, rgba(238, 134, 36, 0.1), #ee8624, rgba(238, 134, 36, 0.1))', margin: 'auto'
      }}></div>
      {/* <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-1 mb-8"></div> */}

      {/* First Row - 3 Boxes */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 mt-5">
          {values.slice(0, 3).map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center space-y-4 
            transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img src={value.image} alt={value.title} className="w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
              <div className="w-8 h-0.5 bg-orange-500 mt-2"></div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 mt-6">
          {values.slice(3, 5).map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center space-y-4 
            transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img src={value.image} alt={value.title} className="w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
              <div className="w-8 h-0.5 bg-orange-500 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurCore;
