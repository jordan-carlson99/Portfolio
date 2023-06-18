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
      description: `
      I designed Idunn's Orchard as an full stack web application to help you with nutrition planning and meal management, Designed to achieve specific health goals and streamline grocery shopping.
      Features: 
      Generate Grocery List: PSQL functions allow ingredient retrieval allowing simple grocery list generation.
      Set and Track Goals: Utilize the power of chart.js to set, update, and monitor your nutrition goals, with full CRUD operations.
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
        "docker",
      ],
    },
    {
      imgLink:
        "https://github.com/FrontEndForceTeam/AdidasFEC/blob/main/client/public/readmeAssets/adidas_site_top.png?raw=true",
      title: "Adidas Site Clone",
      description: `In an agile team environment 3 other web developers and I created a 1 for 1 Adidas site clone using React, Postgres, Express, and Node from site selection to deployment
      Features:
      Pure CSS: To enable more refined control over the styling of the site we opted to avoid CSS libraries and create every component by hand to illustrate our understanding of the underlying concepts.
      Product based page layout: In order to allow further expansion of the site we architected our database to rely on a product ID to fetch the loading assets for the page, this means a webscraper can simply capture assets and create more product pages.
      Agile development: our team used agile methodologies to develop the product in a short time including the concepts of the SDLC, minimum viable products, sprint planning, daily stand-ups and sprint retrospectives. This let our team move quickly and create the site over the course of 5 days.
      Continuous Integration / Continuous Development: I oversaw git integration within our project which allowed us to quickly set-up a CI/CD pipeline and implement tools such as pull request processes, project ticketing, and kanban board integration.
      `,
      projectLink: "https://github.com/FrontEndForceTeam/AdidasFEC",
      technologies: ["css", "js", "vite", "psql", "node", "react", "docker"],
    },
    {
      imgLink:
        "https://github.com/jordan-carlson99/CME-Mapping/raw/main/CME_project_example.png",
      title: "Coronal Mass Ejection Event Mapping Tool",
      description: `Coronal Mass Ejection Event Mapping is a web app that captures Coronal Mass Ejections (CMEs) using NASA's DONKI API. It provides an adjustable date range, a 3D rendering of the sun with translated solar coordinates indicating CME locations, and a CME catalog displaying structure class, solar coordinates, measured speed, and notes.
      Features:
      Adjustable start and end date: Users can select a specific date range to view Coronal Mass Ejections within that period.
      3D rendering of the sun with translated solar coordinates: The app uses the P5 library to render a 3D representation of the sun and visually displays the solar coordinates where CME events occurred.
      CME catalog: The app presents a catalog that provides detailed information about each CME event, including structure class, solar coordinates, measured speed, and relevant notes.`,
      projectLink: "https://github.com/jordan-carlson99/CME-Mapping",
      technologies: ["html", "css", "js", "p5", "node"],
    },
    // {
    //   imgLink: "",
    //   title: "",
    //   description: ``,
    //   projectLink: "",
    //   technologies: ["html", "css", "js"],
    // },
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
