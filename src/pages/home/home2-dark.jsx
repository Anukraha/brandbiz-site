import React from "react";
import AboutWithSkills from "../../components/About-with-skills";
import Footer from "../../components/Footer";
import IntroTxt from "../../components/Intro-txt";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";


const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroTxt subBG />
      <AboutWithSkills />
      
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
