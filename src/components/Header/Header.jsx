import { useState, useEffect } from "react";

export default function Header() {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });
  return (
    <header id="header">
      <div id="loading-bar" className={isLoaded ? "loading" : ""}></div>
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
