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
        "https://github.com/jordan-carlson99/nutrition/blob/main/images/idunn_orchard_screenshot.png?raw=true",
      title: "Idunn's Orchard",
      description: `Idunn's Orchard is an full stack web application designed to help you with nutrition planning and meal management. Designed to achieve specific health goals, streamline grocery shopping, and discover new recipes.
      Generate Grocery List: PSQL functions allow ingredient retrieval allowing simple grocery list generation.
      Set and Track Goals: Utilize the power of chart.js to set, update, and monitor your nutrition goals, full CRUD operations.
      Dynamic Recipe Management: Add recipes to meal plans and the macros adjust automatically based on the searchable ingredients used.
      Responsive User Interface: Idunn's Orchard boasts a sleek and responsive user interface, built using vanilla CSS.
      Frontend: vite + React - React is one of the most popular JavaScript libraries for building user interfaces. Its component-based architecture allows for modular development and efficient rendering. By utilizing React, Idunn's Orchard delivers a responsive and interactive frontend.
  Backend: Express - Express is a minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware support, and easy integration with databases. With Express, Idunn's Orchard ensures efficient server-side handling of requests and smooth data flow between the frontend and backend.
  Charting: chart.js - Chart.js is a powerful charting library that allows for the creation of visually appealing and interactive charts. By integrating Chart.js with React, Idunn's Orchard provides users with the ability to set, update, and track their nutrition goals using beautiful and informative charts. Allowing the potential for data-driven decision-making.
  Testing: vitest - Vitest is a testing library specifically designed for vite-based projects. It enables efficient unit testing and ensures the reliability and stability of the application. By incorporating vitest into the development process, Idunn's Orchard demonstrates a commitment to delivering high-quality code and a robust application to potential employers.
  Database: pg - a powerful and feature-rich open-source database management system. This technology choice showcases the application's focus on data management, scalability, and reliability.
  File System: path - The path module in Node.js provides utilities for working with file and directory paths. Idunn's Orchard leverages this module to manage file paths for images and other static assets. This attention to detail in file management highlights the app's commitment to maintainability and efficiency.`,
      projectLink: "https://github.com/jordan-carlson99/nutrition",
      technologies: [
        "html",
        "css",
        "js",
        "vite",
        "chartjs",
        "psql",
        "node",
        "react",
      ],
    },
    {
      imgLink: "",
      title: "testtst",
      description: `hey`,
      projectLink: "",
      technologies: ["html", "css", "js"],
    },
    // {
    //   imgLink: "",
    //   title: "",
    //   description: ``,
    //   projectLink: "",
    //   technologies: ["html", "css", "js"],
    // }
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
