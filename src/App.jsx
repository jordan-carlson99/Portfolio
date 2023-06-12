import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "../src/styleSheet.css";
import BioText from "./components/BioText/BioText";
import Header from "./components/Header/Header";
import ProjectModal from "./components/ProjectModal/ProjectModal";

// linked in : https://www.linkedin.com/in/jordan-carlson99/

// github: https://github.com/jordan-carlson99

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
