import React from "react";
import "./FormSection.css"




const FormSection = () => {
  return (
    <section className="contact-two">
      <div className="container" style={{ padding: "0px" }}>
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-two__left">
              <div className="contact-two__thumb wow fadeInLeft" data-wow-duration="1500ms"
                data-wow-delay="500ms">
                <img decoding="async"
                  src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/contact-1-2.png"
                  alt="contact-1-2" title="contact-1-2" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-two__right wow fadeInRight" data-wow-duration="1500ms"
              data-wow-delay="500ms">
              <div className="contact-two__top">
                <div className="contact-two__top__content">
                  <div className="sec-title sec-title--three text-center wow fadeInUp"
                    data-wow-duration='1500ms' data-wow-delay='000ms'>
                    <div className="d-flex align-items-center justify-content-center">
                      <img decoding="async"
                        src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/sec-title-s-2.png"
                        alt="sec-title-s-2" title="sec-title-s-2" className="sec-title__img"
                        style={{ marginTop: "10px" }} />
                      <h6 className="sec-title__tagline">Contact with us</h6>
                    </div>
                    <h3 className="sec-title__title">Feel Free to Write us</h3>
                  </div>
                </div>
              </div>
              <div className="contact-two__content">
                <div className="contact-two__form__inner">
                  <div className="contact-two__form contact-form-validated form-one wow fadeInUp">
                    <div className="wpcf7 no-js" id="wpcf7-f1088-p17-o1" lang="en-US" dir="ltr">
                      <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true">
                        </p>
                        <ul></ul>
                      </div>
                      <form action="#" method="post">
                        <div className="row">
                          <div className="col-lg-6 mt-3">
                            <input type="text" id="name" name="name"
                              placeholder="Full Name" />
                          </div>
                          <div className="col-lg-6 mt-3">
                            <input type="email" id="email" name="email" placeholder="Email" />
                          </div>
                          <div className="col-lg-6 mt-3">
                            <input type="text" id="phoneNo" name="phoneNo"
                              placeholder="Phone" />
                          </div>
                          <div className="col-lg-6 mt-3">
                            <input type="text" id="subject" name="subject"
                              placeholder="Subject" />
                          </div>
                          <div className="col-lg-12 mt-3">
                            <textarea name="subject" id="subject" placeholder="Write Message
                                                    "></textarea>
                          </div>
                          <div className="col-lg-12 mt-3">
                            <button type="submit" className="submit-button">Send A
                              Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-two__shape">
        <img decoding="async"
          src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/benefit-shape-1-1.png"
          alt="benefit-shape-1-1" title="benefit-shape-1-1" />
      </div>
    </section>
  );
};

export default FormSection;
