import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LatestProjectSection.css";
import frame3 from "../images/background/Frame 1 (1).png";
import frame4 from "../images/background/frame 4.png";
import frame5 from "../images/background/frame 5.png";
import frame6 from "../images/background/Frame 6.png";
import frame7 from "../images/background/frame6.jpg.png";
import frame8 from "../images/background/frame7.jpg.png";
import frame9 from "../images/background/frame8.jpg.png";

const LatestProjectSection = () => {
  const navigate = useNavigate(); // Hook to navigate

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const blogPosts = [
    {
      title: "TIC TAC TOE PRO",
      image: frame3,
      description: "Experience the ultimate version of the classic Tic Tac Toe game! With advanced features, sleek design, and engaging gameplay, this app offers fun for all ages......",
      route: "/tictac",
    },
    {
      title: "Radio Luisteren.fm: Live radio",
      author: "Riva Collins",
      date: "March 1, 2023",
      category: "Business",
      image: frame5,
      description: "We develop custom RadioLuisteren.fm solutions for clients, offering seamless live radio streaming experiences.Tailored for your audience, ensuring reliable access to music, news, and more.",
      route: "/radioo",
    },
    {
      title: "Photo Recovery & Data Recovery",
      author: "Riva Collins",
      date: "February 28, 2023",
      category: "Innovation",
      image: frame4,
      description: "We develop cutting-edge Photo Recovery apps to help you restore lost or deleted photos seamlessly. Our solutions are fast, secure, and designed for ultimate ease of use",
      route: "/Photo",
    },
    {
      title: "Dynamic Event Management App",
      author: "John Doe",
      date: "March 5, 2023",
      category: "Technology",
      image: frame6,
      description: "We develop and design Dynamic Event Management Apps that streamline event planning, attendee management, and real-time coordination for a seamless experience.",
      route: "/Event",
    },
    {
      title: "Rayhan Medical Complex App",
      author: "John Doe",
      date: "March 5, 2023",
      category: "Technology",
      image: frame7,
      description: "The Rayhan Medical Complex App is designed to provide a seamless and user-friendly healthcare experience. From booking appointments and accessing medical records to telemedicine consultations, this app ensures that quality healthcare is always within reach.",
      route: "/Medical",
    },
    {
      title: "NextStep Freelancing",
      author: "John Doe",
      date: "March 5, 2023",
      category: "Technology",
      image: frame8,
      description: "NextStep Freelancing is a comprehensive platform designed to help freelancers launch, grow, and succeed in their careers. From expert resources and skill development courses to client connections and freelancing insights, we provide everything you need to thrive in the competitive freelance market.",
      route: "/NextStep",
    },
    {
      title: "One More Step Multimedia Education",
      author: "John Doe",
      date: "March 5, 2023",
      category: "Technology",
      image: frame9,
      description: "At OMS Multimedia, we specialize in delivering cutting-edge digital solutions tailored to your business needs. From branding and graphic design to digital marketing, video production, and web solutions, we help businesses enhance their digital presence with impactful and engaging content. Let’s bring your vision to life with creativity and technology!",
      route: "/Education",
    }
  ];


  return (
    <section className="project-two">
      <div className="container-fluid">
        <div className="sec-title text-center wow fadeInUp">
          <h5 className="sec-title__tagline">LATEST PROJECT</h5>
          <h2 className="sec-title__title">
            Our Recently Completed <br /> Latest Projects
          </h2>
        </div>
        <div className="slider-container p-4">
          <Slider {...settings}>
            {blogPosts.map((post, index) => (
              <div key={index} className="p-2 d-flex gap-4">
                <div className="overflow-hidden main-div">
                  <img src={post.image} alt={post.title} className="imgg1" />
                  <div className="px-3 py-4">
                    <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
                    <p className="mt-2 text-gray-600">{post.description}</p>
                    {post.route && (
                      <button
                        className="block mt-2 font-semibold but"
                        onClick={() => navigate(post.route)}
                      >
                        Read More +
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestProjectSection;
