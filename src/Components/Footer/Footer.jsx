import React from "react";
import { Link, useLocation } from "react-router-dom";
import footerLogo from "../images/background/footer-logo.png";
import "./Footer.css";
import { useEffect } from "react";

const Footer = () => {
    const { pathname } = useLocation(); // Detects route changes

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top whenever pathname changes
    }, [pathname]);

    return (
        <div>
            <footer className="main-footer">
                <div className="bg-image"></div>
                <div className="widgets-section">
                    <div className="container">
                        <div className="row">
                            <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={footerLogo} alt="Footer Logo" style={{ width: "200px" }} />
                                        </Link>
                                    </div>
                                    <div className="text">
                                        BrainArt IT Solution is a leading software development company offering top-notch app development, web development, and design services.
                                    </div>
                                    <ul className="social-icon-two d-flex gap-2">
                                        <li>
                                            <a href="https://www.linkedin.com/company/brainart-it-solution/" target="_blank">
                                                <i className="fa-brands fa-linkedin-in" ></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/brainart_it_solution/" target="_blank">
                                                <i className="fab fa-instagram" ></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/people/Brainart-it-soution/" target="_blank">
                                                <i className="fab fa-facebook" ></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://join.skype.com/invite/vHEhLX46XvDt" target="_blank">
                                                <i className="fab fa-skype" ></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Company</h3>
                                    <ul className="user-links">
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/career">Career</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget">
                                    <h3 className="widget-title">Our Services</h3>
                                    <ul className="user-links">
                                        <li><Link to="/services/MobileApp">App Development</Link></li>
                                        <li><Link to="/services/WebMain">Web Development</Link></li>
                                        <li><Link to="/services/Game">Game Development</Link></li>
                                        <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
                                        <li><Link to="/services/Ui-Ux">UI/UX Design</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget contact-widget">
                                    <h3 className="widget-title">Contact</h3>
                                    <div className="widget-content">
                                        <div className="text">
                                            440, Opera Business Hub, Lajamni Chowk, Digital Valley, Surat, Gujarat 394101
                                        </div>
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fa fa-envelope"></i>
                                                <a href="mailto:info@brainartit.in">info@brainartit.in</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-phone-square"></i>
                                                <a href="tel:+919327228578">+91 93272 28578</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            <div style={{ padding: "10px", backgroundColor: "#001735" }}>
                <p style={{ textAlign: "center", marginBottom: "0px", color: "white" }}>
                    © 2025 BrainArt IT Solution All Rights Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
