import Highlighter from "./Highlighter";
import styles from "./ProjectList.module.css";
import { useState } from "react";

export default function ProjectList({ projects }) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleOpen = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div id={styles["project-container"]}>
      {projects.map((project) => {
        return (
          <details className={styles["project"]} onClick={handleOpen}>
            <summary className={styles["project-title"]}>
              <div className={styles["title-container"]}>{project.title}</div>
              <div className={styles["icon-container"]}>
                {project.technologies.map((technology) => {
                  return (
                    <img
                      alt={`${technology} icon`}
                      src={`../../../icons/${technology}.png`}
                      className={styles["tech-icon"]}
                    ></img>
                  );
                })}
              </div>
            </summary>
            <a
              className={styles["project-link"]}
              href={project.projectLink}
              target="_blank"
            >{`Checkout ${project.title}`}</a>
            <div className={styles["project-body"]}>
              <div className={styles["image-container"]}>
                <img
                  className={styles["project-image"]}
                  alt={`image for ${project.title}`}
                  src={project.imgLink}
                ></img>
              </div>
              <Highlighter
                bodyText={project.description}
                isHighlighted={isHighlighted}
                setIsHighlighted={setIsHighlighted}
              />
            </div>
          </details>
        );
      })}
    </div>
  );
}
