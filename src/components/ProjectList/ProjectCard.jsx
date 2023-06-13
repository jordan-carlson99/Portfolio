import Highlighter from "./Highlighter";
import { useState, useRef } from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project,
  isHighlighted,
  setIsHighlighted,
}) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);
  const handleOpen = () => {
    setOpen(!open);
    setIsHighlighted(!isHighlighted);
    cardRef.current.scrollTop = 0;
  };
  return (
    <div
      className={
        open
          ? `${styles["project"]} ${styles["open"]}`
          : `${styles["project"]} ${styles["close"]}`
      }
      onClick={handleOpen}
      ref={cardRef}
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
}
