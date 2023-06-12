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
          className="bio-text typing"
          style={{ animationDelay: delay + "s" }}
        >
          {element}
        </p>
      );
    }
  });
  return (
    // make a way to uterate through the senences with split and add in breaks
    <div id="bio-box">
      <div id="terminal-text">{paragraphs}</div>
    </div>
  );
}
