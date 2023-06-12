import { useState } from "react";

export default function ProjectModal({ link }) {
  const [hidden, setHidden] = useState("hidden");
  const showIcons = () => {
    if (hidden == "hidden") {
      setHidden("move");
    } else {
      setHidden("hidden");
    }
  };
  return (
    <div id="modal-around">
      <div id="circle" className={"circle " + hidden}></div>
      <div className="blocker" id="blocker-right"></div>
      <div className="blocker" id="blocker-bottom"></div>
      <a
        className={"pop-ups " + hidden}
        id="pop-up-resume"
        href={link[0]}
        target="_blank"
      >
        <img className="icon" src="../icons/resume.png"></img>
      </a>
      <a
        className={"pop-ups " + hidden}
        id="pop-up-contact"
        href={link[1]}
        target="_blank"
      >
        <img className="icon" src="../icons/email.png"></img>
      </a>
      <a
        className={"pop-ups " + hidden}
        id="pop-up-linkedin"
        href={link[2]}
        target="_blank"
      >
        <img className="icon" src="../icons/linkedin.png"></img>
      </a>
      <a
        className={"pop-ups " + hidden}
        id="pop-up-github"
        href={link[3]}
        target="_blank"
      >
        <img className="icon" src="../icons/github.png"></img>
      </a>
      <button id="project-modal" onClick={showIcons}>
        Contact Me
      </button>
    </div>
  );
}
