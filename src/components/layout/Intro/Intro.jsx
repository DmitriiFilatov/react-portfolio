import React from "react";
import introCSS from "./intro.module.css";
import introImg from "../assets/intro_photo.jpg";

function Intro() {
  return (
    <section className={introCSS.sectionIntro} id="intro">
      <h1 className={introCSS.introHeader}>Introduction</h1>
      <div className={introCSS.introContent}>
        <div>
          <img
            className={`${introCSS.introImg}`}
            src={introImg}
            alt="Nothing at the moment"
          />
        </div>
        <div className={introCSS.introText}>
          <p>
            Hello! I'm <strong> Dmitrii Filatov</strong>.
          </p>
          <p>I'm a front-end developer,</p>
          <p>
            that took interest in <strong>web technologies</strong>
          </p>
          <p>embarking on a journey of exploring my creativity.</p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
