import React from "react";
import { Link } from "react-router-dom";
import "./WhyChooseOne.css";

const WhyChooseOne = () => {
  return (
    <section className="why-choose-one">
      <div className="container" style={{ padding: "10px" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="why-choose-one__left wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
              <div className="why-choose-one__top">
                <div className="sec-title wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                  <div className="d-flex align-items-center justify-content-start">
                    <img
                      src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/sec-title-s-1.png"
                      alt="sec-title"
                      className="sec-title__img"
                    />
                    <h6 className="sec-title__tagline">WHY CHOOSE US</h6>
                  </div>
                  <h3 className="sec-title__title">The Right Technology Partner for Your Business Success</h3>
                </div>
              </div>

              <div className="why-choose-one__feature">
                {[
                  { icon: "fa-computer", text: "Seamless Tech Solutions" },
                  { icon: "fa-thumbs-up", text: "Your Success, Our Commitment" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="why-choose-one__feature__item wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="500ms"
                  >
                    <div className="why-choose-one__feature__item__content">
                      <div className="why-choose-one__feature__item__icon">
                        <i className={`fa-solid ${item.icon} icon-it-1`}></i>
                      </div>
                      <h3 className="why-choose-one__feature__item__text">{item.text}</h3>
                    </div>
                    <div className="why-choose-one__feature__item__link">
                      <Link to="/services" className="why-choose-one__feature__item__link__btn" aria-label="Go to Services">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="why-choose-one__link wow fadeInUp">
                <Link to="/contact" className="why-choose-one__link__btn ostech-btn" aria-label="Go to Contact Us">
                  Let’s Connect!
                </Link>
              </div>
            </div>

            <div className="why-choose-one__shape wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
              <img
                src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/why-choose-2-1.png"
                alt="why-choose-shape"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="why-choose-one__right wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="500ms">
              <div className="why-choose-one__thumb">
                <img
                  src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/why-choos-us-3-1.png"
                  alt="why-choose"
                  style={{ maxWidth: "unset" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOne;
