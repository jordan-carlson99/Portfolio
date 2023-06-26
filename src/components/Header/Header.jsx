import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });
  return (
    <header id="header">
      <div
        id={styles["loading-bar"]}
        className={isLoaded ? styles["loading"] : styles[""]}
      ></div>
      <div id={styles["info"]}>
        <h1 id={styles["name"]}>Jordan Carlson</h1>
        <div id={styles["bar"]}></div>
        <div id={styles["skills-section"]}>
          <p className={styles["skills"]}>
            Languages: JavaScript | HTML | CSS | SQL
          </p>
          <p className={styles["skills"]}>
            Libraries & Frameworks: Node | Express | React | Vite | Bootstrap |
            Jquery
          </p>
          <p className={styles["skills"]}>
            Tools: Git | Docker | pgbench | K6 | Node | Playwright
          </p>
        </div>
      </div>
      {!window.matchMedia("(max-width: 450px)").matches && (
        <div id={styles["contact-btn-container"]}>
          <a
            className={styles["contact-btn"]}
            target="_blank"
            href="https://github.com/jordan-carlson99"
          >
            <img className={styles["contact-img"]} src="./github.png"></img>
          </a>
          <a
            className={styles["contact-btn"]}
            target="_blank"
            href="https://www.linkedin.com/in/jordan-carlson99/"
          >
            <img className={styles["contact-img"]} src="./linkedin.png"></img>
          </a>
          <a
            className={styles["contact-btn"]}
            target="_blank"
            href="mailto: jordan.carlson.square@gmail.com"
          >
            <img className={styles["contact-img"]} src="./email.png"></img>
          </a>
          <a
            className={styles["contact-btn"]}
            target="_blank"
            href="https://github.com/jordan-carlson99"
          >
            <img className={styles["contact-img"]} src="./resume.png"></img>
          </a>
        </div>
      )}
    </header>
  );
}
