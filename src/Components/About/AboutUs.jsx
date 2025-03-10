import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./AboutUs.css";
import founderimg from "../images/f.png"

const AboutUs = () => {
  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-two__left wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-two__thumb">
                <div className="about-two__thumb__item about-two__thumb__item--one">
                  <img decoding="async"
                    src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/about-2-1.png"
                    alt="about-2-1" title="about-2-1" />
                </div>
                <div className="about-two__thumb__item about-two__thumb__item--two">
                  <img decoding="async"
                    src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/about-2-2.png"
                    alt="about-2-2" title="about-2-2" style={{ marginTop: "-72px", justifySelf: "end" }} />
                </div>
                <div className="about-two__thumb__award">
                  <i class="fa-solid fa-trophy"></i>
                </div>
                <div className="about-two__thumb__icon">
                  <span className="about-two__thumb__icon__box">
                    <img decoding="async"
                      src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/loader-1.png"
                      width="52" alt="ostech logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
            <div className="about-two__right">
              <div className="about-two__top">
                <div className="sec-title wow fadeInUp" data-wow-duration='1500ms' data-wow-delay='000ms'>
                  <div className="d-flex align-items-center justify-content-start">
                    <img decoding="async"
                      src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/sec-title-s-1.png"
                      alt="sec-title-s-1" title="sec-title-s-1" className="sec-title__img" />
                    <h6 className="sec-title__tagline">ABOUT US</h6>
                  </div>
                  <h3 className="sec-title__title">Provide the Smart & Simple IT Solutions
                    for Your Business
                  </h3>

                </div>
                <p className="about-two__top__text">We specialize in delivering top-tier IT solutions tailored to meet your business needs. Our
                  expert team ensures innovation, reliability, and efficiency to help you stay ahead in the digital
                  world.</p>
                <div className="about-two__ostech__item"
                  style={{ backgroundImage: "url(https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/about-bg-2-1.png)" }}>
                  <div className="about-two__ostech__item__inner">
                    <div className="about-two__ostech__item__icon" style={{ textAlign: "center" }}>

                      <i class="fa-solid fa-puzzle-piece"></i>
                    </div>

                    <div className="about-two__ostech__item__content">
                      <h4 className="about-two__ostech__item__title">Deliver the Perfect Solution</h4>
                      <p className="about-two__ostech__item__text">We provide customized solutions to help you succeed. Our focus is on innovation, efficiency,
                        and quality - Built just for you.</p>
                    </div>
                  </div>
                </div>
                <div className="about-two__feature">
                  <div className="about-two__feature__item">
                    <div className="about-two__feature__top">
                      <div className="about-two__feature__top__icon">
                        <i class="fa-solid fa-bars"></i>
                      </div>
                      <h4 className="about-two__feature__top__title">Managed Tech Services</h4>
                    </div>
                    <p className="about-two__feature__item__text">Comprehensive IT management and support solutions.
                    </p>
                  </div>
                  <div className="about-two__feature__item">
                    <div className="about-two__feature__top">
                      <div className="about-two__feature__top__icon">
                        <i class="fa-solid fa-cloud"></i>
                      </div>
                      <h4 className="about-two__feature__top__title"> IT Consulting Solutions</h4>
                    </div>
                    <p className="about-two__feature__item__text">Strategic consulting to enhance your business technology
                      infrastructure.
                    </p>
                  </div>
                </div>

              </div>
              <div className="btn-box p-p-box-1">
                <div class="founder-info">
                  <div class="thumb"><img src={founderimg} alt="" /></div>
                  <h5 class="name">Nidhi Boghani </h5>
                  <span class="designation">Founder and Ceo</span>
                </div>
                <div className="about-two__btn">
                  <Link to="/Contact" className="ostech-btn">
                    <span>Discover More</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
