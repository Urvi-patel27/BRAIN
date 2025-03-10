import React, { useState } from "react";
import flutter from "../images/icons/images-removebg-preview.png";
import react from "../images/icons/images-removebg-preview (1).png";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import "./CareerLast.css";

function CareerLast() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });
  const [errors, setErrors] = useState({});

  const jobs = [
    {
      title: "Flutter Developer",
      experience: "Fresher",
      openings: 1,
      qualification: "Graduate",
      img: flutter,
    },
    {
      title: "Full Stack Developer",
      experience: "Fresher",
      openings: 1,
      qualification: "Graduate",
      img: react,
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });

    // Clear error when user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your first name";
    if (!formData.lastName.trim()) newErrors.lastName = "Please enter your last name";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your mobile number";
    if (!formData.resume) newErrors.resume = "Please upload your resume";
    if (!formData.message.trim()) newErrors.message = "Please enter a message";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop submission if validation fails

    console.log("Form Data:", formData);
    setShowPopup(false);
  };

  return (
    <div className="max-w-6xl mx-auto py-14 px-4 sm:px-6 md:px-8">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Career Opportunities at BrainArt IT Solution
      </h2>

      <div className="space-y-10">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-lg rounded-lg p-6 md:p-10 gap-6"
          >
            <div className="flex-shrink-0">
              <img
                src={job.img}
                alt={job.title}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                {job.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                <span className="font-semibold">Experience:</span> {job.experience} |{" "}
                <span className="font-semibold">No. of Openings:</span> {job.openings} |{" "}
                <span className="font-semibold">Qualification:</span> {job.qualification}
              </p>
            </div>

            <div className="mt-3">
              <button className="ostech-btn" onClick={() => setShowPopup(true)}>
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowPopup(false)}
            >
              <X size={24} />
            </button>
            <div className="d-flex align-items-center justify-content-start">
              <img decoding="async"
                src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/sec-title-s-1.png"
                alt="sec-title-s-1" title="sec-title-s-1" className="sec-title__img" />
              <h6 className="sec-title__tagline11111">APPLY FOR JOB</h6>

            </div>
            <h1 className="cps-h1">Cureent Open Position</h1>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    className={`w-full p-3 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg`}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className={`w-full p-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-lg`}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg`}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile No."
                    className={`w-full p-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg`}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <input
                  type="file"
                  name="resume"
                  className={`w-full p-3 border ${errors.resume ? "border-red-500" : "border-gray-300"} rounded-lg`}
                  onChange={handleChange}
                />
                {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className={`w-full p-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg`}
                  rows="4"
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full ostech-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerLast;
