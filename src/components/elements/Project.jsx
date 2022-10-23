import projectCSS from "./project.module.css";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

function Project(props) {
  const { title, descr, image, tech } = props;

  return (
    <div className={projectCSS.projectCard}>
      <img src={image} className={projectCSS.projectImg} alt={`${title}`} />
      <div className={projectCSS.projectContent}>
        <div className={projectCSS.projectDescr}>
          <h3>{title}</h3>
          <p>{descr}</p>
        </div>
        <div className={projectCSS.btnsContainer}>
          <a
            href="https://github.com/DmitriiFilatov/JikanAPI_Project"
            className={`btn ${projectCSS.projectBtn}`}
          >
            Github
            <FaGithub className={projectCSS.btnIcon} />
          </a>
          <a
            href="https://wonderful-johnson-7f06b8.netlify.app/"
            className={`btn ${projectCSS.projectBtn}`}
          >
            View Project
            <BiLinkExternal className={projectCSS.btnIcon} />
          </a>
        </div>
        <div className={projectCSS.projectTechContainer}>
          <div className={projectCSS.projectTech}>
            <p>
              {tech.framework.icon}
              {tech.framework.name}
            </p>
          </div>
          <div className={projectCSS.projectTech}>
            <p>
              {tech.styling.icon}
              {tech.styling.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
