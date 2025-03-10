import React from 'react'
import backbackgrounfd from "../images/background/funfact-1-1.png"
import "./WhyChoose.css"

function WhyChoose() {
  return (
    <section className="why-choose-two">

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 my-5">
            <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="300ms">

              <h2 className="why-choose-two__funfact__item__count">
                <span className="count-text" data-stop="10" data-speed="1500">10</span>
                <span>+</span>
              </h2>
              <p className="why-choose-two__funfact__item__text">IT <br /> Specialists</p>
              <div className="why-choose-two__funfact__item__shape">
                <img decoding="async"
                  src={backbackgrounfd}
                  alt="funfact-1-1" title="funfact-1-1" classNameName='funfate_des' />
              </div>
              <div className="icon-circle"><i className="fa-solid fa-chalkboard-user"></i></div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 my-5">
            <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="300ms">

              <h2 className="why-choose-two__funfact__item__count">
                <span className="count-text" data-stop="30" data-speed="1500">30</span>
                <span>+</span>
              </h2>
              <p className="why-choose-two__funfact__item__text">Projects <br /> Completed</p>
              <div className="why-choose-two__funfact__item__shape">
                <img decoding="async"
                  src={backbackgrounfd}
                  alt="funfact-1-1" title="funfact-1-1" />
              </div>
              <div className="icon-circle"><i className="fa-solid fa-arrow-up-right-dots"></i></div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 my-5">
            <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="300ms">

              <h2 className="why-choose-two__funfact__item__count">
                <span className="count-text" data-stop="25" data-speed="1500">25</span>
                <span>+</span>
              </h2>
              <p className="why-choose-two__funfact__item__text">Satisfied <br /> Clients</p>
              <div className="why-choose-two__funfact__item__shape">
                <img decoding="async"
                  src={backbackgrounfd}
                  alt="funfact-1-1" title="funfact-1-1" />
              </div>
              <div className="icon-circle"><i className="fa-solid fa-people-group"></i></div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 my-5">
            <div className="why-choose-two__funfact__item count-box wow fadeInUp" data-wow-delay="300ms">

              <h2 className="why-choose-two__funfact__item__count">
                <span className="count-text" data-stop="5" data-speed="1500">5</span>
                <span>+</span>
              </h2>
              <p className="why-choose-two__funfact__item__text">Countries <br /> Served</p>
              <div className="why-choose-two__funfact__item__shape">
                <img decoding="async"
                  src={backbackgrounfd}
                  alt="funfact-1-1" title="funfact-1-1" />
              </div>
              <div className="icon-circle"> <i className="fa-solid fa-earth-americas"></i></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyChoose