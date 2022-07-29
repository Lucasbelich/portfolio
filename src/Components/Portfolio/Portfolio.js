import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Go-Scrum.jpg";
import IMG2 from "../../assets/MEGGAMES.jpg";
import IMG3 from "../../assets/alkeflix.jpg";
/* import IMG4 from "../../assets/calc.jpg"; */
import IMG5 from "../../assets/calc.jpg";
import IMG6 from "../../assets/circle-nav.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Go Scrum App (React/Redux)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lucasbelich/go-scrum"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lucasbelich.github.io/go-scrum/#/login"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-commerce (React/Firebase)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lucasbelich/MEG-Games/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lucasbelich.github.io/MEG-Games/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Movies App (React)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lucasbelich/alkeflix/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lucasbelich.github.io/alkeflix/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lucasbelich/go-scrum"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lucasbelich.github.io/go-scrum/#/login"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Menu Navigation Circle (HTML/CSS)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lucasbelich/menu-nav-circle/"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lucasbelich.github.io/menu-nav-circle/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Calculator with dark mode (HTML/CSS)</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Lucasbelich/calc-dark-mode"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://lucasbelich.github.io/calc-dark-mode/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
