import React from "react";
import tic from "../images/background/frame 4.png";

function PhotoMain() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Image Section */}
      <div className="w-full max-w-6xl">
        <img
          src={tic}
          alt="Tic Tac Toe Game Preview"
          className="w-full rounded-lg shadow-lg mt-20"
        />
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mt-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Photo Recovery & Data Recovery</h1>
        <p className="text-gray-600 text-lg mt-4 leading-7">
          At BrainArt IT Solution, we specialize in developing advanced tools
          that address real-world challenges. Our Photo Recovery & Data Recovery
          app is a prime example of our dedication to innovation, offering a
          reliable, efficient, and user-friendly solution to recover lost or
          deleted files.
        </p>
        <div className="flex space-x-2 mt-4 justify-center">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* About the Project */}
      <div className="max-w-6xl mt-14">
        <h1 className="text-3xl md:text-4xl font-bold text-black">About the Project</h1>
        <p className="text-gray-600 text-lg mt-4 leading-7">
          Our Photo Recovery & Data Recovery app was designed to meet the
          growing demand for secure and effective file recovery. Whether caused
          by accidental deletion or system errors, our app allows users to
          recover photos, videos, documents, and other files effortlessly.
        </p>
      </div>
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>
      {/* Key Features */}
      <div className="max-w-6xl w-full mt-14">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Key Features We Delivered</h1>

        {[
          { title: "Photo Recovery", desc: "Recover deleted photos from internal storage or SD cards, with the ability to preview images before restoration." },
          { title: "Comprehensive Data Recovery", desc: "Retrieve lost files, including videos, documents, and audio in multiple formats." },
          { title: "Deep & Quick Scan Modes", desc: "Quick Scan for recent deletions, and Deep Scan for older or hidden files." },
          { title: "Secure Recovery Process", desc: "Safeguards your privacy and prevents overwriting of recovered data." },
          { title: "Cloud Integration", desc: "Save recovered files directly to cloud storage for extra convenience." },
          { title: "Multi-Device Compatibility", desc: "High performance and reliability across various Android devices." },
        ].map((feature, index) => (
          <div key={index} className="mt-6">
            <h5 className="text-lg font-semibold text-black">{feature.title}</h5>
            <p className="text-gray-600 text-base leading-7">{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* Technologies Used */}
      <div className="max-w-6xl w-full mt-14">
        <h3 className="text-2xl md:text-2xl font-bold text-black">Technologies We Use</h3>
        <p className="text-gray-600 text-lg mt-4 leading-7">
          We harness the power of advanced algorithms and cutting-edge
          technology to ensure highly accurate file recovery, minimizing the
          risk of data loss.
        </p>
      </div>
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl w-full mt-14">
        <h3 className="text-2xl md:text-2xl font-bold text-black">Why Choose Us?</h3>
        <p className="text-gray-600 text-lg mt-4 leading-7">
          At BrainArt IT Solution, we focus on creating apps that deliver real
          value. Our Photo Recovery & Data Recovery app gives users peace of
          mind by helping them recover lost data quickly and safely.
        </p>
      </div>
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>
      {/* Call to Action */}
      <div className="max-w-6xl mt-14 text-center md:text-left">
        <h4 className="text-xl font-bold text-black">
          <span className="text-[#113A69]">Let’s Build Your Idea Together</span>
          {" "}Have a concept for an app? Let us help you bring it to life. At BrainArt IT Solution, we offer tailored solutions that meet your
          unique needs. Explore our portfolio and start your project today!
        </h4>
      </div>
    </div>
  );
}

export default PhotoMain;
