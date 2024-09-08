import React from "react";

import "./Header.css";

const Header = () => {

    const scrollDown = (id) => {
        const navbarHeight = document.getElementById("navsections").clientHeight;
        const element = document.getElementById(id);
        const position = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: position,
          behavior: "smooth",
        });
      };

    return(
        <nav id="navsections">
             <ul>
        <li>
          <span className="nav-item" onClick={() => scrollDown("home")}>
            Home
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollDown("about")}>
            About
          </span>
        </li>
        <li>
          <span
            className="nav-item" onClick={() => scrollDown("projects")}
          >
            Projects
          </span>
        </li>
        <li>
          <span
            className="nav-item" onClick={() => scrollDown("Experience")}
          >
            Experience
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollDown("CV")}>
            CV
          </span>
        </li>
        <li>
          <span className="nav-item" onClick={() => scrollDown("reachout")}>
            Reachout
          </span>
        </li>
      </ul>
    </nav>
    );
};

export default Header;