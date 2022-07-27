import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
        <a
          href="http://linkedin.com/in/lucasbelich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="http://github.com/lucasbelich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="http://dribbble.com/Lucasb98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDribbble />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
