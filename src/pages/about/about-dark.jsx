import React from "react";
import AboutHeader from "../../components/About-header";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services1 from "../../components/Services1";
import Team1 from "../../components/Team1";
import DarkTheme from "../../layouts/Dark";

const AboutDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
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
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <AboutHeader />
      <AboutIntro />
      <Services1 withPadding withOutTitle />
      <Team1 />
      <MinimalArea />
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default AboutDark;
