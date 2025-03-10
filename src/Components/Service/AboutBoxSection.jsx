import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutBoxSection.css";
import imgg1 from "../images/background/sc1.png";
import imgg2 from "../images/background/sc2.png";
import imgg3 from "../images/background/sc3.png";
import imgg10 from "../images/background/sc4.png";
import imgg11 from "../images/background/sc5.png";
import imgg4 from "../images/background/ic3.png";
import imgg5 from "../images/background/coding.png";
import imgg6 from "../images/background/ic1.png";
import imgg7 from "../images/background/game-development.png";
import imgg8 from "../images/background/social-media-marketing.png";
import design from "../images/background/Group_2-removebg-preview.png";

const services = [
    { id: 1, title: "App Development", img: imgg1, icon: imgg4, path: "/services/MobileApp", description: "Custom mobile app development for iOS and Android, designed to deliver seamless user experiences and drive business success." },
    { id: 2, title: "Website Development", img: imgg2, icon: imgg5, path: "/services/WebMain", description: "Professional web development services tailored to your business needs. We create stunning, fast, and user-friendly websites that drive growth and engagement." },
    { id: 3, title: "Game Development", img: imgg11, icon: imgg7, path: "/services/Game", description: "Creating captivating and high-performance games for mobile, web, and desktop. Let’s bring your vision to life!" },
    { id: 4, title: "Digital Marketing", img: imgg10, icon: imgg8, path: "/services/digital-marketing", description: "Boost your brand with our expert digital marketing services! From SEO to social media, we drive engagement, visibility, and growth for your business." },
    { id: 5, title: "UI/UX Design", img: imgg3, icon: imgg6, path: "/services/ui-ux", description: "Crafting intuitive and visually stunning designs for seamless user experiences. Elevate your brand with our expert UI/UX solutions!" }
];

const ServicesSection = () => {
    const navigate = useNavigate();

    return (
        <section className="services-section">
            <div className="container">
                <div className="row justify-content-center">
                    {services.map(service => (
                        <div key={service.id} className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image">
                                        <img src={service.img} alt={service.title} />
                                    </figure>
                                    <div className="icon-box">
                                        <img src={service.icon} alt="icon" className="icon-box-img" />
                                    </div>
                                </div>
                                <div className="content-box">
                                    <h5 className="title" style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
                                        {service.title}
                                    </h5>
                                    <div className="text" style={{ fontSize: "15px" }}>
                                        {service.description}
                                    </div>
                                    <button onClick={() => navigate(service.path)} className="read-more btn btn-link" style={{ textDecoration: "none" }}>
                                        Read More <i className="fa fa-long-arrow-alt-right" style={{ lineHeight: "1.8" }}></i>
                                    </button>
                                </div>
                                <div>
                                    <img src={design} alt="" className="roundImg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;