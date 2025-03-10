import React from "react";
import { useNavigate } from "react-router-dom";
import frame1 from "../images/background/Frame 3.png";
import frame2 from "../images/background/frame 5.png";
import frame3 from "../images/background/frame 4.png";
import frame6 from "../images/background/frame6.jpg.png";
import frame7 from "../images/background/frame7.jpg.png";
import frame8 from "../images/background/frame8.jpg.png";
import frame4 from "../images/resource/event.png";
import "../../Components/Button.css";

function Portfoliomain() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "TIC TAC TOE PRO",
      description:
        "Experience the ultimate version of the classic Tic Tac Toe game! With advanced features, sleek design, and engaging gameplay, this app offers fun for all ages. Play against AI with adjustable difficulty levels or challenge your friends in multiplayer mode.",
      image: frame1,
      link: "/TicTac",
    },
    {
      title: "Photo Recovery & Data Recovery",
      description:
        "We develop cutting-edge Photo Recovery apps to help you restore lost or deleted photos seamlessly. Our solutions are fast, secure, and designed for ultimate ease of use.",
      image: frame3,
      link: "/photo",
    },
    {
      title: "Radio Luisteren.fm: Live radio",
      description:
        "We develop custom RadioLuisteren.fm solutions for clients, offering seamless live radio streaming experiences. Tailored for your audience, ensuring reliable access to music, news, and more.",
      image: frame2,
      link: "/radioo",
    },
    {
      title: "Dynamic Event Management App",
      description:
        "We develop and design Dynamic Event Management Apps that streamline event planning, attendee management, and real-time coordination for a seamless experience.",
      image: frame4,
      link: "/Event",
    },
    {
      title: "Rayhan Medical Complex App",
      description:
        "The Rayhan Medical Complex App is designed to provide a seamless and user-friendly healthcare experience. From booking appointments and accessing medical records to telemedicine consultations, this app ensures that quality healthcare is always within reach.",
      image: frame6,
      link: "/Medical",
    },
    {
      title: "NextStep Freelancing",
      description:
        "NextStep Freelancing is a comprehensive platform designed to help freelancers launch, grow, and succeed in their careers. From expert resources and skill development courses to client connections and freelancing insights, we provide everything you need to thrive in the competitive freelance market.",
      image: frame7,
      link: "/NextStep",
    },
    {
      title: "One More Step Multimedia Education ",
      description:
        "At OMS Multimedia, we specialize in delivering cutting-edge digital solutions tailored to your business needs. From branding and graphic design to digital marketing, video production, and web solutions, we help businesses enhance their digital presence with impactful and engaging content. Let’s bring your vision to life with creativity and technology!",
      image: frame8,
      link: "/Education",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-20">
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-10`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-[240px] shadow-lg"
            />
            <div className="md:w-2/3  md:text-left">
              <h2 className="text-[28px] font-bold mb-2">{project.title}</h2>
              <p className="text-[#2c2c2c] text-[15px] font-sans mb-[20px]">
                {project.description}
              </p>
              <button
                className="ostech-btn"
                onClick={() => navigate(project.link)}
              >
                Read More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfoliomain;