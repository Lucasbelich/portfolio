import React from "react";
import { Link } from "react-scroll"

import "./Footer.css";
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <Link to="header" className="footer__logo">
        Lucas Belich
      </Link>
      <ul className="permalinks">
        <li><Link to="header">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="portfolio">Portfolio</Link></li>
        <li><Link to="contact">Contact</Link></li>
      </ul>
      <div className="footer__socials">
        <a href="http://linkedin.com/in/lucasbelich" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="http://github.com/lucasbelich" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/lucasbelich/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lucas Belich. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
