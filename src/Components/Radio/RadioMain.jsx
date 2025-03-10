import React from "react";
import tic from "../images/background/frame 5.png";

function RadioMain() {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Image Section */}
      <div className="w-full max-w-6xl">
        <img
          src={tic}
          alt="Tic Tac Toe Game Preview"
          className="w-full max-w-full h-auto rounded shadow-lg mt-10 sm:mt-14"
        />
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mt-6 text-center sm:text-left">
        <h1 className="text-[30px] font-bold text-black">
          RadioLuisteren.fm: Live Radio App
        </h1>
        <p className="text-gray-600 text-[16px] mt-4 leading-7">
          At BrainArt IT Solution, we had the privilege of developing
          RadioLuisteren.fm, a feature-rich mobile app designed to bring the
          world of radio to your fingertips. This app consolidates all national
          and regional radio stations into one platform, ensuring users have
          seamless access to music, news, sports, and entertainment wherever
          they go.
        </p>
      </div>

      {/* Indicator Dots */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* About the App */}
      <div className="max-w-6xl mt-10 sm:mt-14 text-center sm:text-left">
        <h1 className="text-[30px] font-bold text-black">About the App</h1>
        <p className="text-gray-600 text-[16px] mt-4 leading-7">
          RadioLuisteren.fm was designed with the user in mind, offering a
          simple, intuitive interface and an engaging experience for people of
          all ages. Whether you're at home, commuting, or working out, this app
          ensures your favorite radio programs are always within reach.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl w-full mt-10 sm:mt-14 text-center sm:text-left">
        <h1 className="text-[30px] font-bold text-black">
          Features We Delivered
        </h1>

        {[
          {
            title: "Live Radio Streaming",
            description:
              "We integrated live streaming capabilities for both national and regional radio stations, allowing users to listen to their favorite stations anytime, anywhere.",
          },
          {
            title: "Real-Time News and Updates",
            description:
              "Built-in features to keep users informed about the latest news, events, and live sports coverage.",
          },
          {
            title: "Diverse Content",
            description:
              "We ensured the app caters to all tastes with access to music, sports, and entertainment from various stations.",
          },
          {
            title: "User-Friendly Interface",
            description:
              "Developed a clean, intuitive design with simple navigation, making it easy for users to discover and enjoy new stations or their long-time favorites.",
          },
          {
            title: "Optimized for All Occasions",
            description:
              "Whether at home, on the road, or during a workout, the app is designed to provide the best experience for every moment.",
          },
          {
            title: "Why We Built It",
            description:
              "Our goal was to create an app that enhances the way users interact with radio, making it accessible, enjoyable, and tailored to their needs. With RadioLuisteren.fm, we delivered a solution that brings the timeless appeal of radio into the digital age.",
          },
          {
            title: "The Result",
            description:
              "RadioLuisteren.fm is a highly functional, scalable, and visually engaging app that has transformed how users access and enjoy live radio. It stands as a testament to our commitment to delivering high-quality, user-centric solutions for our clients.",
          },
        ].map((feature, index) => (
          <div key={index} className="mt-6">
            <h5 className="text-black text-[18px] font-bold">
              {feature.title}
            </h5>
            <p className="text-gray-600 text-[16px] mt-2 leading-7">
              {feature.description}
            </p>
          </div>
        ))}

        <p className="text-gray-600 text-[16px] mt-6 leading-7">
          Looking for a reliable partner to bring your app idea to life? Contact
          us today and let’s create something extraordinary together!
        </p>
      </div>
    </div>
  );
}

export default RadioMain;
