import React from "react";
import { Link } from "react-scroll";
import Resume from "../../assets/resume.pdf";


const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <Link to="contact" smooth={true} className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
};

export default CTA;
