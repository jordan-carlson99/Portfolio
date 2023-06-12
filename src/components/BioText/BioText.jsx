import styles from "./BioText.module.css";

export default function BioText({ text }) {
  // const [type, setType] = useState("bio-text");
  // const typing = () => {
  //   setType("bio-text typing");
  // };
  let delay = -1.5;
  let textArr = text.split("\n");
  const paragraphs = textArr.map((element, index) => {
    delay += 2;
    if (element.length < 1) {
      return null;
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
    // make a way to uterate through the senences with split and add in breaks
    <div id={styles["bio-box"]}>
      <div id={styles["terminal-text"]}>{paragraphs}</div>
    </div>
  );
}
