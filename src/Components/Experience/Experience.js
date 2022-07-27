import React from 'react'
import './Experience.css'
import {SiHtml5} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiBootstrap} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {SiChakraui} from "react-icons/si"
import {DiSass} from "react-icons/di"
import {SiNodedotjs} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiFirebase} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {SiPhp} from "react-icons/si"
import {SiMysql} from "react-icons/si"

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiHtml5 className="experience__details-icon"/>
              <small className="text-light">HTML</small>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon"/>
              <small className="text-light">CSS</small>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon"/>
              <small className="text-light">JavasScript</small>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon"/>
              <small className="text-light">React</small>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon"/>
              <small className="text-light">Bootstrap</small>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon"/>
              <small className="text-light">Tailwind</small>
            </article>
            <article className="experience__details">
              <SiChakraui className="experience__details-icon"/>
              <small className="text-light">ChakraUI</small>
            </article>
            <article className="experience__details">
              <DiSass className="experience__details-icon"/>
              <small className="text-light">Sass</small>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNodedotjs className="experience__details-icon"/>
              <small className="text-light">NodeJS</small>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon"/>
              <small className="text-light">MongoDB</small>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon"/>
              <small className="text-light">Firebase</small>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon"/>
              <small className="text-light">Express</small>
            </article>
            <article className="experience__details">
              <SiPhp className="experience__details-icon"/>
              <small className="text-light">PHP</small>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon"/>
              <small className="text-light">MySQL</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
