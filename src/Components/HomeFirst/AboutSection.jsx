import React from "react";
import "../HomeFirst/About.css"
import Ab from "../images/background/1.png"
import Ac from "../images/background/2.png"
import SmallDes from "../images/background/smallDesign.png"
import { Link } from "react-router-dom";


const AboutSection = () => {
    return (
        <section className="about-three">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-6">
                        <div className="about-three__left wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
                            <div className="about-three__thumb">
                                <div className="about-three__thumb__item about-three__thumb__item--one">
                                    <img decoding="async" src={Ab} alt="about-s-3-1"
                                        title="about-s-3-1" />
                                </div>
                                <div className="about-three__thumb__item about-three__thumb__item--two">
                                    <img decoding="async" src={Ac} alt="about-3-1"
                                        title="about-3-1" />
                                </div>


                                <div className="about-three__thumb__call">
                                    <div className="about-three__thumb__call__icon">
                                        <i className="fa-solid fa-phone-volume"></i>
                                    </div>
                                    <div className="about-three__thumb__call__content">
                                        <span className="about-three__thumb__call__text">Call to
                                            anytime</span>
                                        <h5 className="about-three__thumb__call__title"><a href="tel:+92-3080-808">+91 93272
                                            28578</a></h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-three__right">
                            <div className="about-three__top">
                                <div className="sec-title wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                                    <div className=" d-flex gap-2 align-items-center justify-content-start">
                                        <img src={SmallDes}
                                            alt="sec-title-s-1" title="sec-title-s-1" className="sec-title__img" />
                                        <h6 className="sec-title__tagline">ABOUT US
                                        </h6>
                                    </div>
                                    <h3 className="sec-title__title">Provide the Smart & Simple IT Solutions
                                        for Your Business</h3>
                                </div>
                                <p className="about-three__top__text" >We specialize in delivering
                                    <b> top-tier IT
                                        solutions</b>
                                    tailored to meet your business needs. Our
                                    expert team ensures innovation, reliability, and efficiency to help you stay ahead
                                    in the digital
                                    world.
                                </p>
                            </div>
                            <div className="about-three__feature wow fadeInUp" data-wow-duration="1000ms"
                                data-wow-delay="300ms">
                                <div className="about-three__feature__item">
                                    <div className="about-three__feature__top">
                                        <div className="about-three__feature__top__icon">
                                            <i className="fa-solid fa-sliders"></i>
                                        </div>
                                        <h4 className="about-three__feature__top__title">
                                            Manage Tech Services </h4>
                                    </div>
                                    <p className="about-three__feature__item__text">
                                        Comprehensive IT management and support solutions</p>
                                </div>
                                <div className="about-three__feature__item">
                                    <div className="about-three__feature__top">
                                        <div className="about-three__feature__top__icon">
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                        </div>
                                        <h4 className="about-three__feature__top__title">

                                            It Consulting Solution </h4>
                                    </div>
                                    <p className="about-three__feature__item__text">
                                        Strategic consulting to enhance your business technology
                                        infrastructure. </p>
                                </div>
                            </div>
                            <ul className="about-three__list list-unstyled wow fadeInUp ml-0" data-wow-duration="1000ms"
                                data-wow-delay="500ms">
                                <li className="about-three__list__item">
                                    <i aria-hidden="true" className="fas fa-check-circle"></i> Customized solutions tailored
                                    to your needs.

                                </li>
                                <li className="about-three__list__item">
                                    <i aria-hidden="true" className="fas fa-check-circle"></i> Expert guidance and technical
                                    excellence.
                                </li>
                                <li className="about-three__list__item">
                                    <i aria-hidden="true" className="fas fa-check-circle"></i> Proven track record of
                                    delivering high-quality IT services.

                                </li>
                            </ul>
                            <div className="about-three__link wow fadeInUp" data-wow-duration="1000ms"
                                data-wow-delay="500ms">
                                <Link to="/about" className="about-three__link__btn ostech-btn ostech-btn--secondary">
                                    <span>Discover More</span>
                                </Link>
                            </div>
                            <div className="about-three__award">
                                <i className="fa-solid fa-trophy"></i>
                                <p className="about-three__award__text">Award Winning Agency</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
