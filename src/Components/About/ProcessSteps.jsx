import React from "react";
import meeting from "../images/icons/communicate.png";
import idea from "../images/icons/lightbulb.png";
import developing from "../images/icons/data.png";
import launch from "../images/icons/rocket.png";
import "./ProcessSteps.css"
import arroepng from "../images/background/work-bg.svg";

function Process() {
  return (
    <div className="container">


      <div className="d-flex" style={{ marginTop: "50px" }}>
        <span className="sec-title__taglinessssss"><img decoding="async" alt="sec-title-s-1" title="sec-title-s-1" class="sec-title__img" src="https://ostechwp.pixydrops.com/wp-content/uploads/2024/05/sec-title-s-1.png" style={{ display: "inline", marginTop: "-4px" }} />
          Save time and money with our powerful method</span>
      </div>

      <div className="container process-container">




        <div className="row justify-content-between align-items-center way-value-section">

          {/* 1st Box */}
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <div className="process-card">
              <img src={meeting} alt="Meeting" />
            </div>
            <h4 className="process-title">Meeting</h4>
            <p className="process-desc">
              Collaborate and explore ideas to turn your vision into reality.
            </p>
          </div>

          {/* 2nd Box */}
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <div className="process-card">
              <img src={idea} alt="Idea & Analysis Gathering" />
            </div>
            <h4 className="process-title">Idea & Analysis Gathering</h4>
            <p className="process-desc">
              Refining concepts and shaping them into actionable
              plans.
            </p>
          </div>

          {/* 3rd Box */}
          <div className="col-lg-3 col-md-3 col-sm-12 text-center p-2-1-1-s">
            <div className="process-card">
              <img src={developing} alt="Designing & Developing" />
            </div>
            <h4 className="process-title">Designing & Developing</h4>
            <p className="process-desc">
              Crafting innovative, functional, and user-friendly solutions.
            </p>
          </div>

          {/* 4th Box */}
          <div className="col-lg-3 col-md-3 col-sm-12 text-center">
            <div className="process-card">
              <img src={launch} alt="Testing & Launching" />
            </div>
            <h4 className="process-title">Testing & Launching</h4>
            <p className="process-desc">
              Ensuring a flawless product, ready for a successful launch.
            </p>
          </div>

          {/* Wave Image */}
          <div className="wave-img">
            <img src={arroepng} alt="Wave Background" />
          </div>

        </div>
      </div >

    </div >
  );
}

export default Process;

