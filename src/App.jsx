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
  return (
    // make a way to uterate through the senences with split and add in breaks
    <div id="bio-box">
      <p id="bio-text">{text}</p>
    </div>
  );
}

function ProjectModal() {
  return (
    <div id="project-modal">
      <button>Projects</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <BioText text={"here is my bio"}></BioText>
      <ProjectModal></ProjectModal>
    </>
  );
}

export default App;
