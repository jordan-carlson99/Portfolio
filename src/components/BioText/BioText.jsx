import { useEffect, useState } from "react";
import styles from "./BioText.module.css";
import ProjectList from "../ProjectList/ProjectList";
import { TypeAnimation } from "react-type-animation";

export default function BioText({ text, projects }) {
  const [terminalShrink, setTerminalShrink] = useState(false);
  const [ifProjects, setIfProjects] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  // const [totalDelay, setTotalDelay] = useState(
  //   (1.5 * text.split("\n").length - 0.2) * 1000
  // );

  const handleProjectList = () => {
    setIsTyping(true);
    setIfProjects(true);
  };

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
                setTerminalShrink(true);
              }}
            >
              skip
            </p>
          </div>
        )}
        <TypeAnimation
          style={{
            display: "block",
            color: "white",
          }}
          sequence={[
            ">",
            200,
            ">$ cat ./bio.txt\n",
            (elem) => {
              setTimeout(() => {
                elem.classList.remove(styles["custom-cursor"]);
              }, 2000);
            },
          ]}
          className={styles["custom-cursor"]}
          speed={70}
          cursor={false}
          preRenderFirstString={true}
        />
        <TypeAnimation
          style={{
            whiteSpace: "pre-line",
            display: "block",
            color: "white",
          }}
          sequence={[
            "",
            1000,
            text,
            200,
            () => {
              setIsTyping(false);
            },
          ]}
          cursor={false}
          speed={85}
        />
        {ifProjects ? (
          <TypeAnimation
            style={{
              display: "block",
              color: "white",
            }}
            sequence={[
              "",
              100,
              "sudo ./projects/all.sh",
              (elem) => {
                setTerminalShrink(true);
                elem.classList.remove(styles["custom-cursor"]);
                setIsTyping(false);
              },
            ]}
            className={styles["custom-cursor"]}
            cursor={false}
            speed={65}
          />
        ) : null}
        {!isTyping && (
          <div id={styles["console-btn-container"]}>
            <button
              type="button"
              onClick={handleProjectList}
              className={styles["console-btn"]}
            >
              Projects
            </button>
          </div>
        )}
      </div>
      {terminalShrink && ifProjects ? (
        <ProjectList projects={projects} />
      ) : null}
    </div>
  );
}
