import React from "react";
import "../HomeFirst/Service.css"
import SmallDes from "../images/background/smallDesign.png"
import image1 from "../images/background/aa1.png"
import image2 from "../images/background/aa2.png"
import image3 from "../images/background/aa3.png"

const Service = () => {
    return (
        <section className="service-three">
            <div className="service-three__bg"
            >
            </div>
            <div className="container">
                <div className="sec-title sec-title--two text-center wow fadeInUp" data-wow-duration="1500ms"
                    data-wow-delay="000ms">
                    <div className="d-flex align-items-center justify-content-center ">
                        <img decoding="async"
                            src={SmallDes}
                            alt="sec-title-s-1" title="sec-title-s-1" className="sec-title__img"
                        />
                        <h6 className="sec-title__tagline1">SERVICE</h6>
                    </div>
                    <h3 className="sec-title__title1">Services We’re providing to <br />
                        Our Customers</h3>
                </div>
                <div className="service-three__carousel ostech-owl__carousel owl-theme owl-carousel owl-loaded owl-drag"
                    data-owl-options="{&quot;loop&quot;:true,&quot;margin&quot;:0,&quot;items&quot;:1,&quot;nav&quot;:false,&quot;dots&quot;:false,&quot;smartSpeed&quot;:700,&quot;autoplay&quot;:true,&quot;autoplayTimeout&quot;:5000,&quot;animateOut&quot;:&quot;&quot;,&quot;animateIn&quot;:&quot;&quot;,&quot;autoplayHoverPause&quot;:true,&quot;responsive&quot;:{&quot;0&quot;:{&quot;margin&quot;:0,&quot;items&quot;:1},&quot;575&quot;:{&quot;margin&quot;:0,&quot;items&quot;:1},&quot;767&quot;:{&quot;margin&quot;:0,&quot;items&quot;:2},&quot;992&quot;:{&quot;margin&quot;:0,&quot;items&quot;:2},&quot;1200&quot;:{&quot;margin&quot;:0,&quot;items&quot;:3}}}">



                    <div className="row" style={{ marginTop: "-30px" }}>
                        <div className="col-lg-4 mt-5" style={{ padding: "0px" }}>
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="fa-solid fa-arrow-up-right-dots"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img decoding="async" src={image1}
                                            alt="service-1-4" title="service-1-4" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h3 className="service-three__item__title">
                                            <a href="#">Product
                                                <br /> Development</a>
                                        </h3>

                                        <a href="#"
                                            className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5" style={{ padding: "0px" }}>
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="fa-brands fa-figma"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img decoding="async" src={image2}
                                            alt="service-1-4" title="service-1-4" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h3 className="service-three__item__title">
                                            <a href="#">
                                                UI/UX <br /> Designing
                                            </a>
                                        </h3>

                                        <a href="#"
                                            className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-5" style={{ padding: "0px" }}>
                            <div className="service-three__item">
                                <div className="service-three__item__inner">
                                    <div className="service-three__item__icon">
                                        <div className="service-three__item__icon__inner">
                                            <i className="fa-solid fa-tower-cell"></i>
                                        </div>
                                    </div>
                                    <div className="service-three__item__thumb">
                                        <img decoding="async" src={image3}
                                            alt="service-1-4" title="service-1-4" />
                                    </div>
                                    <div className="service-three__item__content">
                                        <h3 className="service-three__item__title">
                                            <a href="#">IT
                                                <br />Consultancy</a>
                                        </h3>

                                        <a href="#"
                                            className="service-three__item__link">
                                            <span className="service-three__item__link__icon"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>





                </div>
            </div>
        </section>
    );

};

export default Service;
