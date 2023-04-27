import { useState } from "react";
import "../src/styleSheet.css";

// linked in : https://www.linkedin.com/in/jordan-carlson99/

// github: https://github.com/jordan-carlson99

function Header() {
  return (
    <header id="header">
      <div id="info">
        <h1 id="name">Jordan Carlson</h1>
        <div id="skills-section">
          <p className="skills">
            Front end - JavaScript | React.js | HTML | CSS | Bootstrap
          </p>
          <p className="skills">
            Back end - Node.js | Express | PostgreSQL | MongoDB | MySQL |RESTful
            APIs | MVCs
          </p>
        </div>
      </div>
    </header>
  );
}

function BioText({ text }) {
  let textArr = text.split("\n");
  const paragraphs = textArr.map((element, index) => {
    if (element.length < 1) {
      return null;
    } else {
      element = "> " + element;
      return (
        <p key={index} className="bio-text">
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

function ProjectModal({ link }) {
  const [hidden, setHidden] = useState("pop-ups hidden");
  const showIcons = () => {
    if (hidden == "pop-ups hidden") {
      setHidden("pop-ups");
    } else {
      setHidden("pop-ups hidden");
    }
  };
  return (
    <div id="modal-around" className="hidden">
      <a className={hidden} id="pop-up-resume" href={link[0]} target="_blank">
        <img className="icon" src="../icons/resume.png"></img>
      </a>
      <a className={hidden} id="pop-up-contact" href={link[1]} target="_blank">
        <img className="icon" src="../icons/email.png"></img>
      </a>
      <a className={hidden} id="pop-up-linkedin" href={link[2]} target="_blank">
        <img className="icon" src="../icons/linkedin.png"></img>
      </a>
      <a className={hidden} id="pop-up-github" href={link[3]} target="_blank">
        <img className="icon" src="../icons/github.png"></img>
      </a>
      <button id="project-modal" onClick={showIcons}>
        Projects
      </button>
    </div>
  );
}

function App() {
  let bio = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque pretium, nisi id commodo pellentesque, massa urna venenatis leo, in venenatis mi libero eu eros. 
  Integer eget massa eu augue pretium ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
  Fusce aliquam commodo purus, sed pulvinar nibh cursus sed. Vestibulum quis leo quam. Phasellus placerat tellus quam, vitae ultricies est volutpat et. 
  Aenean velit nisi, pharetra in diam ac, finibus faucibus nisl. In dapibus leo nec porttitor maximus. Nunc id lacinia libero. 
  Cras bibendum eu libero a hendrerit. Morbi malesuada nisl quis dapibus vestibulum. Nam semper mollis lectus, sed tincidunt lorem pretium non. Etiam at scelerisque risus. Donec facilisis sapien et ornare pellentesque. 
  Sed at aliquam dui, quis pretium massa. Donec fermentum, dui id bibendum imperdiet, sem est dignissim dui, ac suscipit justo diam non mauris.`;
  return (
    <>
      <Header></Header>
      <div id="aligner"></div>
      <BioText text={bio}></BioText>
      <ProjectModal
        link={[
          "none",
          "none",
          "https://www.linkedin.com/in/jordan-carlson99/",
          "https://github.com/jordan-carlson99",
        ]}
      ></ProjectModal>
    </>
  );
}

export default App;
