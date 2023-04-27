import { useState } from "react";
import "../src/styleSheet.css";

function ContactButtons({ title }) {
  return <button className="contact-button">{title}</button>;
}

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
      <div id="button-container">
        <ContactButtons title="Resume"></ContactButtons>
        <ContactButtons title="Contact"></ContactButtons>
        <ContactButtons title="LinkedIn"></ContactButtons>
        <ContactButtons title="Github"></ContactButtons>
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

function ProjectModal() {
  return <button id="project-modal">Projects</button>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <BioText
        text={` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Pellentesque pretium, nisi id commodo pellentesque, massa urna venenatis leo, in venenatis mi libero eu eros. 
Integer eget massa eu augue pretium ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Fusce aliquam commodo purus, sed pulvinar nibh cursus sed. Vestibulum quis leo quam. Phasellus placerat tellus quam, vitae ultricies est volutpat et. 
Aenean velit nisi, pharetra in diam ac, finibus faucibus nisl. In dapibus leo nec porttitor maximus. Nunc id lacinia libero. 
Cras bibendum eu libero a hendrerit. Morbi malesuada nisl quis dapibus vestibulum. Nam semper mollis lectus, sed tincidunt lorem pretium non. Etiam at scelerisque risus. Donec facilisis sapien et ornare pellentesque. 
Sed at aliquam dui, quis pretium massa. Donec fermentum, dui id bibendum imperdiet, sem est dignissim dui, ac suscipit justo diam non mauris.`}
      ></BioText>
      <ProjectModal></ProjectModal>
    </>
  );
}

export default App;
