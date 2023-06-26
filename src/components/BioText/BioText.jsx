import { useEffect, useState } from "react";
import styles from "./BioText.module.css";
import ProjectList from "../ProjectList/ProjectList";
import { TypeAnimation } from "react-type-animation";

export default function BioText({ initialText, projects, approach, aboutMe }) {
  const [terminalShrink, setTerminalShrink] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [ifProjects, setIfProjects] = useState(false);
  const [ifApproach, setIfApproach] = useState(false);
  const [ifAboutMe, setIfAboutMe] = useState(false);
  const [ifInitialText, setIfInitialText] = useState(true);

  const handleProjectList = () => {
    if (!ifProjects) {
      setIsTyping(true);
      setIfProjects(true);
      setIfApproach(false);
      setIfAboutMe(false);
      setIfInitialText(false);
    }
  };

  const handleMyApproach = () => {
    if (!ifApproach) {
      setIsTyping(true);
      setIfApproach(true);
      setIfInitialText(false);
      setIfAboutMe(false);
    }
  };

  const handleAboutMe = () => {
    if (!ifAboutMe) {
      setIsTyping(true);
      setIfAboutMe(true);
      setIfApproach(false);
      setIfInitialText(false);
    }
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
        {/* {!terminalShrink && (
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
        )} */}
        {ifInitialText && (
          <>
            <TypeAnimation
              style={{
                display: "block",
                color: "white",
              }}
              sequence={[
                ">$",
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
                initialText,
                200,
                () => {
                  setIsTyping(false);
                },
              ]}
              cursor={false}
              speed={100}
            />
          </>
        )}
        {ifProjects && (
          <TypeAnimation
            style={{
              display: "block",
              color: "white",
            }}
            sequence={[
              ">$",
              100,
              ">$ sudo ./projects/all.sh",
              (elem) => {
                setTerminalShrink(true);
                elem.classList.remove(styles["custom-cursor"]);
                setIsTyping(false);
              },
            ]}
            preRenderFirstString={true}
            className={styles["custom-cursor"]}
            cursor={false}
            speed={65}
          />
        )}
        {ifApproach && (
          <>
            <TypeAnimation
              style={{
                display: "block",
                color: "white",
              }}
              sequence={[
                ">$",
                200,
                ">$ cat ./my_approach.txt\n",
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
                () => {
                  setTerminalShrink(false);
                  setIfProjects(false);
                },
                approach,
                200,
                () => {
                  setIsTyping(false);
                },
              ]}
              cursor={false}
              speed={100}
            />
          </>
        )}
        {ifAboutMe && (
          <>
            <TypeAnimation
              style={{
                display: "block",
                color: "white",
              }}
              sequence={[
                ">$",
                200,
                ">$ cat ./about_me.txt\n",
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
                () => {
                  setTerminalShrink(false);
                  setIfProjects(false);
                },
                aboutMe,
                () => {
                  setIsTyping(false);
                },
              ]}
              speed={100}
              cursor={false}
              preRenderFirstString={true}
            />
          </>
        )}
        {!isTyping && (
          <div id={styles["console-btn-container"]}>
            <button
              type="button"
              onClick={handleProjectList}
              className={styles["console-btn"]}
            >
              Projects
            </button>
            <button
              type="button"
              className={styles["console-btn"]}
              onClick={handleMyApproach}
            >
              My Approach
            </button>
            <button
              type="button"
              className={styles["console-btn"]}
              onClick={handleAboutMe}
            >
              About Me
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
