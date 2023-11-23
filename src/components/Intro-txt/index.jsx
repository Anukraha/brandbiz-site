import React from "react";

const IntroTxt = ({subBG}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/3.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
               {/* <h6>Founders Desk</h6> */}
              <h1>Our Founder</h1>
              <h4>Arun Kumar, Managing Director & CEO</h4>

            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
