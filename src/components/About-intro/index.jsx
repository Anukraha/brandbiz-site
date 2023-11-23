import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>What we do </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
               

We are creative thinkers who work closely with clients to find innovative approaches to business challenges. When we put our minds together, there’s no problem we can’t solve.We enjoy building business.We are in it with you as much as you are.

Brand Monk consulting is more than just a strategy consulting company. We bring clients integrated solutions that work at the intersection of Business, Innovation and Technology. We’re a young and dynamic company built by a professional and enthusiastic team that lets customer success define us.With firm footing in areas of Retail, Franchising, E-Business and Technology Consulting, Brand Monk has been and will continue providing customer centric solutions to enable growth.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
