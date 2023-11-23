/* eslint-disable @next/next/no-img-element */
import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import Split from "../Split";
import Image from 'next/image'
const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="cont">
            <div className="sub-title">
              <br></br><br></br><br></br>
              <h6>Founders Desk</h6>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Split>
              {/* <h3 className="main-title wow" data-splitting>
                My mission is design develop the best Websites around.
              </h3> */}
            </Split>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              “Mr.Arun Brandmonk (as fondly called in the Industry) is the Managing Director & CEO of the Company, graduated with a Bachelor of Engineering (EEE) degree from Barathiyar University and a management degree from Great Lakes Institute of Management. He has close to two decades of experience in various industries including IT, ITES, Technology, and tech startups apart from the Hospitality Industry. His goal is to build brands that lasts and businesses that are sustainable and Scalable for the future. Arun is a creator and promoter of various brands, he loves to work on brand building and scaling.
  
              He is a specialist in Branding and Business consulting, helping brands from establishing to scaling, by leveraging Technology, Digitization, Analytics and Strategy. The Consulting practice works on the whole customer life cycle by creating Awareness, Engagements, Generating leads, Catalyzing closures/sales, and making the clients the Advocates of the brand.” He is well connected in the startup ecosystem, an entrepreneur at heart, and has a high sense of social responsibility and developing entrepreneurship.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="/img/slid/22.jpg" alt="img" />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AboutWithSkills;
