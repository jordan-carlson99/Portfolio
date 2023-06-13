import Highlighter from "./Highlighter";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";
import { useState } from "react";

export default function ProjectList({ projects }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  return (
    <div id={styles["project-container"]}>
      {projects.map((project) => {
        return <ProjectCard project={...project} setIsHighlighted={setIsHighlighted} isHighlighted={isHighlighted} />;
      })}
    </div>
  );
}
