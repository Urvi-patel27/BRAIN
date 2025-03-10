import React from "react";
import { useNavigate } from "react-router-dom";
import imgg1s from '../images/background/Group 3.png';
import imgg2s from '../images/background/CS2.jpg';

const CareerWhyus = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12" style={{ padding: "100px 0px" }}>
          {/* Left Side: Images */}
          <div className="relative w-full md:w-1/2 flex flex-col items-center">
            <div className="relative">
              <img src={imgg1s} alt="Meeting" className="rounded-lg grayscale" />
            </div>
            <img src={imgg2s} alt="Discussion" className="absolute bottom-0 right-10 rounded-lg border-4 border-white shadow-lg" />
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <span className="text-black-600 uppercase text-sm font-semibold d-flex gap-2 items-center"><div style={{ height: "10px", width: "10px", background: "linear-gradient(to right, #ee8624, #113a69)" }}></div>Join Our Team</span>
            <h1 className="text-4xl font-bold mt-2 text-gray-900">
              Welcome, Innovators!
              Shape Your Future with Us
            </h1>
            <p className="text-gray-600 mt-4 font-semibold">
              At BrainArt IT Solution, we believe in innovation, collaboration, and personal growth.
              Join our passionate team of professionals who are committed to making a difference
              through technology. Whether you're a seasoned expert or a fresh talent, we offer an
              environment where creativity and expertise thrive.
            </p>
            <p className="text-gray-600 mt-4">
              We're looking for creative minds and tech enthusiasts who thrive in a collaborative
              environment. If you're passionate about technology and learning, let's grow together!
            </p>

            <div className="why-choose-one__link wow fadeInUp mt-5">
              <button
                className="ostech-btn"
                onClick={() => navigate('/contact')}
              >
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerWhyus;
