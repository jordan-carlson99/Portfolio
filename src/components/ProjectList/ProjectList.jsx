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
          <div
            className={
              isHighlighted
                ? `${styles["project"]} ${styles["open"]}`
                : `${styles["project"]} ${styles["close"]}`
            }
            onClick={handleOpen}
          >
            <div className={styles["project-title"]}>
              {project.title}
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
            </div>
            <a
              className={styles["project-link"]}
              href={project.projectLink}
              target="_blank"
            >{`Checkout ${project.title}`}</a>
            <div className={styles["project-body"]}>
              <Highlighter
                bodyText={project.description}
                isHighlighted={isHighlighted}
                setIsHighlighted={setIsHighlighted}
                projectImage={project.imgLink}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
