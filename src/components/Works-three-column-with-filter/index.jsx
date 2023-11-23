/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } smplx col-12`}
          >
            {/* <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>*/}
          </div> 

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items graphic lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://brandmonkconsulting.com/">
                  <a>
                    <img src="/img/portfolio/mas/1.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Brand Monk Consulting</h6>
                <span>
                <a href="https://brandmonkconsulting.com/"> Best Consulting services for Digital Marketing.</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="http://zikadesigns.com/">
                  <a>
                    <img src="/img/portfolio/mas/2.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Zika Designs</h6>
                <span>
                  <a href="http://zikadesigns.com/">Best Interior Designers in Coimbatore</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://brandmonkacademy.com/">
                  <a>
                    <img src="/img/portfolio/mas/3.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Brand Monk Academy</h6>
                <span>
                  <a href="https://brandmonkacademy.com/">Best Digital Marketing Training Institute</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://zutail.com/">
                  <a>
                    <img src="/img/portfolio/mas/6.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Zutail</h6>
                <span>
                  <a href="https://zutail.com/">The Best services for your pets</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="http://brandmonkfnb.com/">
                  <a>
                    <img src="/img/portfolio/mas/5.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Brand Monk F & B </h6>
                <span>
                  <a href="http://brandmonkfnb.com/">Franchising | Restaurant Consulting | Kitchen Equipments Supply</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="https://thevisiontraders.com/">
                  <a>
                    <img src="/img/portfolio/mas/4.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Vision Traders</h6>
                <span>
                  <a href="https://thevisiontraders.com/"> Trading and wholesaling of quality tested products.</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
