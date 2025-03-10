import React from "react";
import tic from "../images/resource/event.png";

function EventMain() {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8">
      {/* Image Section */}
      <div className="w-full max-w-4xl lg:max-w-6xl mt-16 sm:mt-24 md:mt-28">
        <img
          src={tic}
          alt="Tic Tac Toe Game Preview"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* App Overview */}
      <div className="w-full max-w-4xl lg:max-w-6xl mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Dynamic Event Management App – Simplify & Elevate Event Planning
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          At BrainArt IT Solution, we develop innovative and efficient tools that make event planning seamless. Our Dynamic Event Management App is designed to provide an intuitive, streamlined, and feature-rich solution for managing events of any scale, from corporate conferences and weddings to festivals and private gatherings.
        </p>
      </div>

      {/* Navigation Indicators */}
      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full cursor-pointer"></div>
      </div>

      {/* About the App */}
      <div className="w-full max-w-4xl lg:max-w-6xl mt-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">About the App</h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          Organizing an event requires coordination, real-time updates, and effortless communication. Our Dynamic Event Management App takes the hassle out of event planning, ensuring smooth execution and enhanced attendee engagement.
        </p>
      </div>

      <div className="flex space-x-2 mt-4">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>

      {/* Key Features Section */}
      <div className="w-full max-w-4xl lg:max-w-6xl mt-14">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Key Features</h1>

        {[
          ["Event Planning & Scheduling", "Easily create, edit, and manage event schedules with a simple interface."],
          ["Attendee Management", " Track registrations, send invitations, and manage guest lists effortlessly."],
          ["Real-Time Notifications", "Send instant updates, reminders, and announcements to attendees."],
          ["Venue & Resource Management", "Efficiently manage venues, equipment, and staff assignments."],
          ["Customizable Ticketing & Payments", "Integrated secure payment gateways for hassle-free ticket sales and transactions."],
          ["Live Engagement Tools", "Enhance audience interaction with Q&A sessions, live polls, and real-time feedback collection."],
          ["Multi-Device Compatibility", "Works seamlessly across Android, iOS, and web platforms for maximum accessibility."],
        ].map(([title, description], index) => (
          <div key={index} className="mt-6">
            <h5 className="text-lg sm:text-xl font-bold text-black">{title}</h5>
            <p className="text-gray-600 text-base sm:text-lg mt-2 leading-7">{description}</p>
          </div>
        ))}

        <div className="flex space-x-2 mt-4" style={{ justifyContent: "center" }}>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        </div>


        {/* Why Choose Us */}
        <h1 className="text-2xl sm:text-3xl font-bold text-black mt-10">Why Choose BrainArt IT Solution?</h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          We create high-performance, user-centric applications that add real value. Our Dynamic Event Management App ensures effortless event organization, smooth execution, and maximum attendee engagement, making every event a success.
        </p>

        <div className="flex space-x-2 mt-4" style={{ justifyContent: "center" }}>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        </div>

        {/* Call to Action */}
        <h1 className="text-2xl sm:text-3xl font-bold text-black mt-10">Have an Event Management App Idea? Let’s Make It Happen!</h1>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-7">
          At BrainArt IT Solution, we specialize in custom app development to meet your unique needs.
          🚀 Let’s build something exceptional—Contact us today!
        </p>
      </div>
    </div>
  );
}

export default EventMain;
