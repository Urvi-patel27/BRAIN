import React from 'react';
import vision from "../images/icons/shared-vision.png";
import mision from "../images/icons/mission (1).png";

function OurValue() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-[50px] font-bold text-[#113A69]">Our Stories</h2>
      <div style={{
        width: "140px",
        height: '3px',
        background: 'linear-gradient(to right, rgba(238, 134, 36, 0.1), #ee8624, rgba(238, 134, 36, 0.1))', margin: 'auto'
      }}></div>
      <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-8">
        <div className="bg-white shadow-xl rounded-lg p-10">
          <div className="flex justify-center items-center mb-4">
            <img src={vision} alt="Vision" className="" />
          </div>
          <h3 className="font-bold text-[#113a69] font-serif text-2xl">Our Vision</h3>
          <p className="text-[#666666] mt-2 text-[16px] font-serif">
            To become a Growth oriented IT Organization through the power of client satisfaction with technology and innovation.
          </p>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-10">
          <div className="flex justify-center items-center mb-4">
            <img src={mision} alt="Mission" className="" />
          </div>
          <h3 className="font-bold text-[#113a69] font-serif text-2xl">Our Mission</h3>
          <p className="text-[#666666] mt-2 text-[16px] font-serif">
            Our mission is to deliver excellent results for our clients and make a positive impact in the IT industry.
          </p>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mt-4"></div>
        </div>
      </div>
    </section>
  );
}

export default OurValue;
