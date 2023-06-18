import { useEffect, useState } from "react";
import styles from "./BioText.module.css";
import ProjectList from "../ProjectList/ProjectList";

export default function BioText({ text, projects }) {
  const [terminalShrink, setTerminalShrink] = useState(false);
  const [totalDelay, setTotalDelay] = useState(
    (1.5 * text.split("\n").length - 0.2) * 1000
  );
  const [timer, setTimer] = useState(null);
  // const [type, setType] = useState("bio-text");
  // const typing = () => {
  //   setType("bio-text typing");
  // };

  useEffect(() => {
    console.log(totalDelay);
    setTimer(
      setTimeout(() => {
        setTerminalShrink(true);
      }, totalDelay)
    );
  }, []);

  let delay = -1.5;
  let textArr = text.split("\n");
  const paragraphs = textArr.map((element, index) => {
    delay += 1.5;
    if (element.length < 1) {
      return null;
    } else if (index == 0) {
      element = "$ " + element;
      return (
        <p
          key={index}
          className={`${styles["bio-text"]} ${styles["typing"]}`}
          style={{ animationDelay: delay + 0.3 + "s" }}
        >
          {element}
        </p>
      );
    } else if (index == textArr.length - 1) {
      element = "$ " + element;
      return (
        <p
          key={index}
          className={`${styles["bio-text"]} ${styles["typing"]}`}
          style={{ animationDelay: delay - 0.5 + "s" }}
        >
          {element}
        </p>
      );
    } else {
      element = "> " + element;
      return (
        <p
          key={index}
          className={`${styles["bio-text"]} ${styles["typing"]}`}
          style={{ animationDelay: delay + "s" }}
        >
          {element}
        </p>
      );
    }
  });
  return (
    <div
      id={styles["bio-box"]}
      className={terminalShrink ? styles["shrink"] : styles[""]}
    >
      <div
        id={styles["terminal-text"]}
        className={terminalShrink ? styles["shrink"] : styles[""]}
      >
        {!terminalShrink && (
          <div id={styles["skip-box"]}>
            <p
              id={styles["skip-text"]}
              onClick={() => {
                clearTimeout(timer);
                setTerminalShrink(true);
              }}
            >
              skip
            </p>
          </div>
        )}
        {paragraphs}
      </div>
      {terminalShrink && <ProjectList projects={projects} />}
    </div>
  );
}
