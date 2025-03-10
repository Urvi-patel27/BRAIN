import React from "react";
import tic from "../images/games/Frame 36.jpg";

function TicMain() {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Game Image */}
      <div className="w-full max-w-6xl">
        <img
          src={tic}
          alt="Tic Tac Toe Game Preview"
          className="w-full rounded-lg shadow-lg mt-20 sm:mt-28 object-cover"
        />
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mt-6  sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mt-5">
          Tic Tac Toe Pro: The Ultimate Gaming Experience
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          At BrainArt IT Solution, we reimagined the timeless Tic Tac Toe game by developing Tic Tac Toe Pro: Ultimate Game—a feature-packed, dynamic mobile app designed for players of all ages. Our goal was to take a simple, classic game and transform it into an engaging, modern experience while preserving its charm and accessibility.

        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* About the App */}
      <div className="max-w-6xl mt-14 sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">About the App</h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          We built Tic Tac Toe Pro using cutting-edge technology and a user-first approach, ensuring smooth performance, immersive gameplay, and an intuitive design. Whether it’s a quick 3x3 match or a strategic 6x6 battle, this app offers something for everyone.

        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* Key Features */}
      <div className="max-w-6xl w-full mt-14 text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Key Features We Delivered</h1>

        {[
          { title: "Classic 3x3 Mode", desc: "A faithful recreation of the traditional Tic Tac Toe for quick and fun gameplay." },
          { title: "Advanced 6x6 Mode", desc: "A larger grid for strategy-driven matches, challenging players to think ahead." },
          { title: "Smart AI Integration", desc: "An intelligent AI with adjustable difficulty levels, catering to both beginners and experts." },
          { title: "Real-Time Multiplayer Mode", desc: " Play against friends and family anytime, anywhere with seamless online multiplayer." },
          { title: "Sleek UI/UX Design", desc: " A modern interface with vibrant themes, smooth animations, and intuitive controls." },
          { title: "Performance Tracking and Leaderboards", desc: "Track progress, view stats, and compete on global leaderboards." },
          { title: "Customizable Features", desc: "Personalize your experience with themes, board styles, and player icons." }
        ].map((feature, index) => (
          <div key={index} className="mt-6">
            <h5 className="text-lg sm:text-xl font-bold text-black">{feature.title}</h5>
            <p className="text-gray-600 text-base sm:text-lg mt-2 leading-7">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* Why We Built It */}
      <div className="max-w-6xl mt-14 sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Why We Built It</h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          We wanted to bring the simplicity of Tic Tac Toe into the digital age with exciting new features and a polished user experience. Our goal was to deliver a fun, interactive, and competitive game that works seamlessly across all devices—making it enjoyable for both casual gamers and serious players.
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>





      {/* Conclusion */}
      <div className="max-w-6xl mt-14 sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">The Result</h1>

        <h4 className="text-lg sm:text-xl font-bold text-black mt-3">
          <span className="text-[#113A69]">With Tic Tac Toe Pro :</span> we’ve transformed a classic game into a modern masterpiece, blending nostalgia with innovation.
        </h4>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>


      {/* Why We Built It */}
      <div className="max-w-6xl mt-14  sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Have an App Idea? Let’s Build It Together!
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          Looking to develop an engaging and high-quality mobile app? BrainArt IT Solution specializes in custom app development to bring your ideas to life.
          🚀 Let’s create something amazing—Contact us today!
        </p>
      </div>

    </div>
  );
}

export default TicMain;
