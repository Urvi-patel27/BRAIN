import React from "react";
import "./Topbar.css";

const TopBar = () => {
    return (<div >
        <div className="topbar-one" >
            <div className="container">


                <div className="topbar-one__inner" >
                    <ul className="list-unstyled topbar-one__info ml-0" >
                        <li className="topbar-one__info__item" >
                            <i aria-hidden="true" className="topbar-one__info__icon  fas fa-map-marker-alt" ></i>
                            <a href="#" > 440, Opera Business Hub, Surat.</a>
                        </li>
                        <li className="topbar-one__info__item" >
                            <i className="topbar-one__info__icon  fa-solid fa-envelope" ></i>
                            <a href="mailto:info@brainartit.in" target="_blank">info@brainartit.in</a>
                        </li>
                    </ul>
                    <div className="topbar-one__right" >
                        <a href="tel:+91 93272 28578" className="topbar-one__right__call" >
                            <div className="topbar-one__right__call__icon" >
                                <i aria-hidden="true" className="fa-solid fa-phone-volume" ></i>
                            </div>
                            <p className="topbar-one__right__call__text" >+91 93272 28578</p>
                        </a>
                        <div className="topbar-one__social" target="_blank">
                            <a href="https://www.linkedin.com/company/102210949/admin/dashboard/" target="_blank">
                                <i aria-hidden="true" className="fab fa-linkedin-in" ></i> </a>
                            <a href="https://www.facebook.com/people/Brainart-it-soution/61558498887261/" target="_blank" >
                                <i aria-hidden="true" className="fab fa-facebook-f" style={{ padding: "2px 3px" }}></i>
                            </a>
                            <a href="https://www.instagram.com/brainart_it_solution/" target="_blank">
                                <i aria-hidden="true" className=" fab fa-instagram" ></i> </a>
                            <a href="https://join.skype.com/invite/vHEhLX46XvDt" target="_blank">
                                <i aria-hidden="true" className="fab fa-skype" ></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >);
}

    ;

export default TopBar;