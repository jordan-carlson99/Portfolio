import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../src/styleSheet.css";
import BioText from "./components/BioText/BioText";
import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";

// linked in : https://www.linkedin.com/in/jordan-carlson99/

// github: https://github.com/jordan-carlson99

function App() {
  let bio = `cat ./bio.txt
  hi my name is Jordan
  im a full stack web developer with experience in React, CSS, HTML, Node, Express, and PSQL to name a few
  i have experience as a network adminstrator and technical project manager in the military.
  i am currently a full time student at a coding bootcamp for fullstack web development
  here's some of my work
  sudo ./projects.sh`;
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
