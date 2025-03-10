import React from "react";
// import "../Contect-us/contect-form.css"
import "../Contact/Contact.css";

const ContactForm = () => {
  return (
    <div className="flex flex-wrap max-w-6xl mx-auto py-10">
      {/* Left Section - Form */}
      <div className="w-full md:w-1/2 px-4">
        <div class="sec-title">
          <span class="sub-title">Send us email</span>
          <h2>Feel free to write</h2>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3  border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3  border rounded-md focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3  border rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3  border rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md h-32 focus:outline-none"
          ></textarea>
          <button className="ostech-btn text-white py-3  px-6 rounded-sm font-bold w-full">
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Right Section - Contact Info */}
      <div className="w-full md:w-1/2 px-4 mt-10 md:mt-0">
        <div class="sec-title">
          <span class="sub-title">Contact with us</span>
          <h2>Let's Connect! </h2>
        </div>

        <p
          className="text-gray-600 mb-6"
          style={{ fontSize: "17px", color: "#6a6f78" }}
        >
          We're here to help you achieve your IT and business goals. Reach out
          to us for inquiries, support, or exciting collaborations!
        </p>
        <div className="space-y-4 ">
          <div className="flex items-center ">
            <span className="text-xl mr-3 mt-3 contact-details__info ">
              <i class="fa-solid fa-phone-volume  icon"></i>
            </span>
            <div className="contect-inf">
              <p className="font-bold">Call Us Anytime ?</p>
              <p style={{ fontSize: "20px", color: "#6a6f78" }}>
                Free +91 93272 28578{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-3 mt-3 contact-details__info ">
              <i class="fa-solid fa-envelope icon"></i>
            </span>
            <div className="contect-inf">
              <p className="font-bold">Email Us</p>
              <p style={{ fontSize: "20px", color: "#6a6f78" }}>
                info@brainartit.in{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-3 mt-3 contact-details__info ">
              <i class="fa-solid fa-location-dot icon"></i>
            </span>
            <div className="contect-inf">
              <p className="font-bold">Visit Our Office </p>
              <p style={{ fontSize: "20px", color: "#6a6f78" }}>
                440, Opera Business Hub, Lajamni Chowk, Digital Valley, Surat,
                394101
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
