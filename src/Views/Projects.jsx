import React from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
{
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import prog1 from "../Assets/Logo.png";
import prog2 from "../Assets/Secure-File-System.PNG";
import prog3 from "../Assets/software-methodology.png";
import prog4 from "../Assets/ASP-NET.PNG";
import prog5 from "../Assets/Object-Oriented-Programming.PNG";
import prog6 from "../Assets/Planner.PNG";
import prog7 from "../Assets/triangle.png";

const Projects = () => {

    const projectList = [
        {
          id: 1,
          name: "Sunset Stories",
          description:
            "Web application to cater for special needs children. A Web Application developed with React and ASP.NET Core 6 ",
          image: prog1,
          githubLink: "https://github.com/Gh0ULSS/SocialStoriesFrontend",
        },
        {
          id: 2,
          name: "Secure FileSystem",
          description:
            "A simulated file system written in C++, leveraging the MD5 algorithm for security and system security principles.",
          image: prog2,
          githubLink: "https://github.com/Gh0ULSS/File-System",
        },
        {
          id: 3,
          name: "Tradies Project",
          description:
            "Linking tradies with clients with location features. A Web application developed with React and Express JS ",
          image: prog3,
          githubLink: "https://github.com/Gh0ULSS/CSIT314-Project",
        },
        {
          id: 4,
          name: "ASP.NET Project",
          description:
            "A Web Application development with ASP.NET and SQL",
          image: prog4,
          githubLink: "https://github.com/Gh0ULSS/EADP-NYP",
        },
        {
          id: 5,
          name: "Student Planner",
          description:
            "Java GUI application developed using Java Swing and SQlite",
          image: prog5,
          githubLink: "https://github.com/Gh0ULSS/OOADP-NYP",
        },
        {
          id: 6,
          name: "Time Management Project",
          description:
            "A Web application developed using HTML, CSS and Javascript",
          image: prog6,
          githubLink: "https://github.com/Gh0ULSS/WADP-NYP",
        },
        {
          id: 7,
          name: "Smallest Triangle",
          description:
            "An application to find smallest triangle from a set of cartesian coordinates",
          image: prog7,
          githubLink: "https://github.com/Gh0ULSS/Smallest-Triangle",
        }
      ];

    return(
       <div id="projects">
        <div className="projects-container">
                <div className="projects-text">
                  <p>PROJECTS</p>
                </div>
                {projectList.map((project) => (
                <div key={project.id} className="project-box">
                    <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img
                        src={project.image}
                        alt={project.name}
                        className="project-image"
                    />
                    </a>
                    <div className="project-info">
                    <h3 className="project-name">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <a className="project-button" href={project.githubLink}>
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    </div>
                </div>
                ))}
        </div>
       </div>
    );
};

export default Projects;