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
        <div id={styles["skills-section"]}>
          <p className={styles["skills"]}>
            Front end - JavaScript | React.js | HTML | CSS | Bootstrap
          </p>
          <p className={styles["skills"]}>
            Back end - Node.js | Express | PostgreSQL | MongoDB | MySQL |RESTful
            APIs | MVCs
          </p>
        </div>
      </div>
    </header>
  );
}
