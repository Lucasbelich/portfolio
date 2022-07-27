import React from "react";
import { Link } from "react-scroll"

import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/1.png";
import HeaderSocials from "./HeaderSocials";
import ParticlesAnimation from "./ParticlesAnimation"

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lucas Belich</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <Link to="contact" className="scroll__down">
          Scroll Down
        </Link>
        </div>
        <ParticlesAnimation/>
    </header>
  );
};

export default Header;
