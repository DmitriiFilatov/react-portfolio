import aboutCSS from "./about.module.css";
import SkillItem from "../../elements/SkillItem";
import { FaReact, FaGithub, FaCss3Alt, FaJs } from "react-icons/fa";

function About() {
  return (
    <section className={aboutCSS.sectionAbout} id="about">
      <h2>About me</h2>
      <div className={aboutCSS.aboutContent}>
        <p>
          I'm a 24 year old computer science undergraduate, currently a language
          student located in Tokyo, who is passionate about
          <strong> front-end development. </strong>
          I've been building personal projects to both gain more expertise as a
          developer and showcase my skills.
        </p>
        <p>
          I find fascinating the process of coming up with ideas and bringing
          them to life, using combination of <strong>code</strong> and
          <strong> design tools</strong>. Being able to create an
          <strong> exciting user experience</strong> is my motivation and
          driving force.
        </p>
      </div>
      <h3 className={aboutCSS.skillsHeader}>What I work with</h3>
      <div className={aboutCSS.skillsList}>
        <SkillItem name="React" icon={<FaReact />} />
        <SkillItem name="Javascript" icon={<FaJs />} />
        <SkillItem name="CSS" icon={<FaCss3Alt />} />
        <SkillItem name="Github" icon={<FaGithub />} />
      </div>
    </section>
  );
}

export default About;
