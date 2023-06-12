import { useEffect, useState } from "react";
import styles from "./Highlighter.module.css";

export default function Highlighter({
  bodyText,
  isHighlighted,
  setIsHighlighted,
  projectImage,
}) {
  const [keywords, setKeywords] = useState(["ut", "sic", "sit", "sed"]);
  let bodyArr = bodyText.split("\n");

  const highlight = (keyword, paragraph) => {
    let fragments = paragraph.split(keyword);
    let hightlightedText = fragments.map((fragment, i) => {
      if (i != fragments.length - 1) {
        return `${fragment}*${keyword}*`;
      } else {
        return fragment;
      }
    });
    return hightlightedText.join("");
  };

  return (
    <div className={styles["main-body"]}>
      <div className={styles["image-container"]}>
        <img
          className={styles["project-image"]}
          alt={`image for ${projectImage}`}
          src={projectImage}
        ></img>
      </div>

      {bodyArr.map((pararaph) => {
        let highlighted;
        keywords.forEach((keyWord, i) => {
          if (i == 0) {
            highlighted = highlight(keyWord, pararaph);
          } else {
            highlighted = highlight(keyWord, highlighted);
          }
        });
        let test = highlighted.split("*");

        return (
          <>
            <p className={styles["tab"]}></p>
            <div className={styles["description"]}>
              {test.map((fragment, i) => {
                if (i % 2 != 0) {
                  return (
                    <>
                      <mark
                        className={
                          isHighlighted ? styles["highlighted"] : styles[""]
                        }
                      >
                        {fragment}
                      </mark>
                    </>
                  );
                } else {
                  return <>{fragment}</>;
                }
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
