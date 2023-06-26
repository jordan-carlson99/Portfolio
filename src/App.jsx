import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../src/styleSheet.css";
import BioText from "./components/BioText/BioText";
import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";

// linked in : https://www.linkedin.com/in/jordan-carlson99/

// github: https://github.com/jordan-carlson99

function App() {
  const bio = `
  hi my name is Jordan

  im a full stack web developer with experience in React, CSS, HTML, Node, Express, and PSQL to name a few

  i have experience as a network adminstrator and technical project manager in the military.

  i am currently a full time student at a coding bootcamp for fullstack web development
  
  welcome to my site!
  
  `;
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
      highlights: [
        "efficient",
        "data-driven",
        "full CRUD operations.",
        "sleek and responsive",
        "interactive",
        "efficiency",
        "data management, scalability, and reliability",
      ],
    },
    {
      imgLink:
        "https://github.com/FrontEndForceTeam/AdidasFEC/blob/main/client/public/readmeAssets/adidas_site_top.png?raw=true",
      title: "Adidas Site Clone",
      description: `In an agile team environment three other web developers and I created a one-for-one Adidas site clone using React, Postgres, Express, and Node from site selection to deployment
      Features:
      Pure CSS: To enable more refined control over the styling of the site we opted to avoid CSS libraries and create every component by hand to illustrate our understanding of the underlying concepts.
      Product based page layout: In order to allow further expansion of the site we architected our database to rely on a product ID to fetch the loading assets for the page, this means a webscraper can simply capture assets and create more product pages.
      Agile development: our team used agile methodologies to develop the product in a short time including the concepts of the SDLC, minimum viable products, sprint planning, daily stand-ups and sprint retrospectives. This let our team move quickly and create the site over the course of 5 days.
      Continuous Integration / Continuous Development: I oversaw git integration within our project which allowed us to quickly set-up a CI/CD pipeline and implement tools such as pull request processes, project ticketing, and kanban board integration.
      `,
      projectLink: "https://github.com/FrontEndForceTeam/AdidasFEC",
      technologies: ["css", "js", "vite", "psql", "node", "react", "docker"],
      highlights: [
        "agile",
        "refined control",
        "SDLC",
        "CI/CD pipeline",
        "kanban",
        "ticketing",
      ],
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
      highlights: ["API", "3D rendering", "translated solar coordinates"],
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
  const approach = `
  My coding philosophy revolves around the notion that clear and concise code empowers efficient collaboration and facilitates the transmission of valuable insights, 
  through prioritizing readability and maintainability

  Simplicity and modularity, enables me to create code that is both elegant and functional. 
  I firmly believe that if a line of code becomes excessively convoluted or condensed, it loses its purpose and effectiveness.
  
  In my work, I prioritize maintainability and comprehensibility. 
  I view programs as collective storytelling endeavors, where every line of code contributes to the overall narrative. 
  Just as a poorly written story can leave readers puzzled or disinterested, code that is difficult to read or decipher fails to convey its intended message.
  
  By crafting code that is easily understandable to both present and future collaborators, I ensure that the story behind the program remains accessible.
  This approach not only enhances the efficiency of development and debugging processes but also enables others to grasp the underlying logic and purpose of the code.
  
  I strive to ensure that the moral of the code's story is never missed.

  `;

  const aboutMe = `
  Hi, my name is Jordan.
  
  I grew up in Minnesota before joining the Army in 2016 and leaving to basic in 2017.
  
  My time in the army was spent repairing Unmanned Systems and managing my organization's maintenance section. 

  During my time I learned a lot about project management and the role technology plays in enabling success.

  There were many systems that I managed which helped me become the developer I am today including RHEL servers, Windows servers, RAID5 systems, and many, many embedded components.

  Leveraging my exposure to these systems I had the opportunity to work with, I chose to spend the last 5 months of my contract in an
  immersive software developer course with Galvanize. 

  Here I learned more about Javascript, HTML, CSS, and an array of web technologies, which led me to my passion of programming.

  I am constantly pulled into building new projects and collaborating with others on theirs. 

  `;
  return (
    <>
      <Header></Header>
      <div id="aligner"></div>
      <BioText
        initialText={bio}
        projects={projects}
        approach={approach}
        aboutMe={aboutMe}
      ></BioText>
      <ProjectModal
        link={[
          "resume.pdf",
          "none",
          "https://www.linkedin.com/in/jordan-carlson99/",
          "https://github.com/jordan-carlson99",
        ]}
      ></ProjectModal>
    </>
  );
}

export default App;
