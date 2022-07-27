import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(false);
  const closeMenu = () => setActiveNav(false);

  return (
    <nav className={activeNav ? "active" : ""}>
      <Link
        to="header"
        spy={true}
        smooth={true}
        offset={-50}
        duration={400}
        onClick={closeMenu}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={400}
        onClick={closeMenu}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        spy={true}
        smooth={true}
        offset={-50}
        duration={400}
        onClick={closeMenu}
      >
        <BiBook />
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-50}
        duration={400}
        onClick={closeMenu}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={400}
        onClick={closeMenu}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
