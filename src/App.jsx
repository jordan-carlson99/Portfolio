import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../src/styleSheet.css";
import BioText from "./components/BioText/BioText";
import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";

// linked in : https://www.linkedin.com/in/jordan-carlson99/

// github: https://github.com/jordan-carlson99

function App() {
  const bio = `cat ./bio.txt
  hi my name is Jordan
  im a full stack web developer with experience in React, CSS, HTML, Node, Express, and PSQL to name a few
  i have experience as a network adminstrator and technical project manager in the military.
  i am currently a full time student at a coding bootcamp for fullstack web development
  here's some of my work
  sudo ./projects.sh`;
  const projects = [
    {
      imgLink:
        "https://media.istockphoto.com/id/1420931748/photo/engineers-or-leader-discussion-and-pointing-to-construction-site.webp?b=1&s=170667a&w=0&k=20&c=VCvtlOBBglgYJgYRc0-yt7drKGRNQAXgPBvXeBY6TJw=",
      title: "project title",
      description: `hey its a project nice   hi my name is Jordan
      im a full stack web developer with experience in React, CSS, HTML, Node, Express, and PSQL to name a few
      i have experience as a network adminstrator and technical project manager in the military.
      i am currently a full time student at a coding bootcamp for fullstack web development
      here's some of my work
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
      projectLink: "https://github.com/jordan-carlson99/nutrition",
      technologies: ["html", "css", "js"],
    },
  ];
  return (
    <>
      <Header></Header>
      <div id="aligner"></div>
      <BioText text={bio} projects={projects}></BioText>
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
