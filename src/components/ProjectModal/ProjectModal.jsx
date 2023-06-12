import { useState } from "react";
import styles from "./ProjectModal.module.css";

export default function ProjectModal({ link }) {
  const [isHidden, setIsHidden] = useState(true);
  const showIcons = () => {
    setIsHidden(!isHidden);
  };
  return (
    <div id={styles["modal-around"]}>
      <div
        id={styles["circle"]}
        className={
          isHidden
            ? `${styles["circle"]} ${styles["hidden"]}`
            : `${styles["circle"]} ${styles["move"]}`
        }
      ></div>
      <div className={styles["blocker"]} id={styles["blocker-right"]}></div>
      <div className={styles["blocker"]} id={styles["blocker-bottom"]}></div>
      <a
        className={
          isHidden
            ? `${styles["pop-ups"]} ${styles["hidden"]}`
            : `${styles["pop-ups"]} ${styles["move"]}`
        }
        id={styles["pop-up-resume"]}
        href={link[0]}
        target="_blank"
      >
        <img
          className={
            isHidden
              ? `${styles["pop-ups"]} ${styles["hidden"]}`
              : `${styles["pop-ups"]} ${styles["move"]}`
          }
          src="../icons/resume.png"
        ></img>
      </a>
      <a
        className={
          isHidden
            ? `${styles["pop-ups"]} ${styles["hidden"]}`
            : `${styles["pop-ups"]} ${styles["move"]}`
        }
        id={styles["pop-up-contact"]}
        href={link[1]}
        target="_blank"
      >
        <img className={styles["icon"]} src="../icons/email.png"></img>
      </a>
      <a
        className={
          isHidden
            ? `${styles["pop-ups"]} ${styles["hidden"]}`
            : `${styles["pop-ups"]} ${styles["move"]}`
        }
        id={styles["pop-up-linkedin"]}
        href={link[2]}
        target="_blank"
      >
        <img className={styles["icon"]} src="../icons/linkedin.png"></img>
      </a>
      <a
        className={
          isHidden
            ? `${styles["pop-ups"]} ${styles["hidden"]}`
            : `${styles["pop-ups"]} ${styles["move"]}`
        }
        id={styles["pop-up-github"]}
        href={link[3]}
        target="_blank"
      >
        <img className={styles["icon"]} src="../icons/github.png"></img>
      </a>
      <button id={styles["project-modal"]} onClick={showIcons}>
        Contact Me
      </button>
    </div>
  );
}
