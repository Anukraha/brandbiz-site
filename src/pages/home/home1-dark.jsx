import React from "react";
import AboutUs1 from "../../components/About-us1";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import Services2 from "../../components/Services2";
import DarkTheme from "../../layouts/Dark";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs1 />
        <Services2 withPadding withOutTitle />
        <CallToAction subBG />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
