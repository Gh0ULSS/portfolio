import React from "react";
import CVpath from "../Assets/Resume-targeted-3.pdf";
import "./CV.css"

const CV = () => {
    return(
       <div id="CV">
        <div className="resume-container">
                <div className="resume-text">
                   <p className="head">RESUME</p>
                </div>

                <div className="pdf-viewer">
                <object
                    data={CVpath}
                    type="application/pdf"
                    height={800}
                    width={600}
                >
                <p>
                    PDF failed to download, download locally{" "}
                <a href={CVpath}>DOWNLOAD</a>
               </p>
                </object>

                <div className="pdf-controls">
                    <a
                    href={CVpath}
                    download="Resume-targeted-3.pdf"
                    className="resume-download-btn"
                    >
                    Download
                    </a>
                </div>
                </div>
            </div>
       </div>
    );
};

export default CV;