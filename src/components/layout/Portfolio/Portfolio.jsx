import React from "react";
import portfolioCSS from "./portfolio.module.css";
import Project from "../../elements/Project";
import placeholderImg1 from "../assets/placeholder.jpg";
import placeholderImg2 from "../assets/placeholder2.jpg";
import placeholderImg3 from "../assets/placeholder3.jpg";
import { SiMaterialui } from "react-icons/si";
import { FaReact, FaCss3Alt } from "react-icons/fa";

function Portfolio() {
  const projData1 = {
    title: "Jikan Anime",
    descr:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat dolorem nihil alias numquam quas unde sequi impedit voluptas quod quia!",
    image: placeholderImg1,
    tech: {
      framework: {
        name: "ReactJS",
        icon: <FaReact className="icon-skill icon-react" />,
      },
      styling: {
        name: "Material UI",
        icon: <SiMaterialui className="icon-skill icon-mui" />,
      },
    },
  };

  const projData2 = {
    title: "E-commerce app",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aspernatur molestiae maiores dignissimos cupiditate libero at tempora autem officiis recusandae. Ab delectus earum est molestiae quos suscipit dignissimos doloremque velit?",
    image: placeholderImg2,
    tech: {
      framework: {
        name: "ReactJS",
        icon: <FaReact className="icon-skill icon-react" />,
      },
      styling: {
        name: "CSS",
        icon: <FaCss3Alt className="icon-skill icon-css" />,
      },
    },
  };

  const projData3 = {
    title: "Shop landing page",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nulla quod nam autem? Repudiandae sed numquam, necessitatibus fuga nostrum quis unde natus laborum illum dolorem modi nam vitae, ullam eum expedita nesciunt nobis recusandae quasi.",
    image: placeholderImg3,
    tech: {
      framework: {
        name: "ReactJS",
        icon: <FaReact className="icon-skill icon-react" />,
      },
      styling: {
        name: "CSS",
        icon: <FaCss3Alt className="icon-skill icon-css" />,
      },
    },
  };

  return (
    <section className={portfolioCSS.sectionPortfolio} id="portfolio">
      <h2>Portfolio</h2>
      <div className={portfolioCSS.projects}>
        <Project {...projData1} />
        <Project {...projData2} />
        <Project {...projData3} />
      </div>
    </section>
  );
}

export default Portfolio;
