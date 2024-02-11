import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Reachout.css";

import 
{
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Reachout = () => {
    return(
       <div id="reachout">
         <h2>Feel free to reach out</h2>
         <div id="icons">  
            <a className="reacticon"
              href="https://github.com/Gh0ULSS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="5x"/>
            </a>
            <a className="reacticon"
              href="https://www.linkedin.com/in/min-htut-myat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="5x"/>
            </a>
         </div>
       </div>
    );
};

export default Reachout;