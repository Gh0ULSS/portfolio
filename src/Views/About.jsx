import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { SiKotlin } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa"
import { SiMetasploit } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import "./About.css";


const About = () => {
    return(
       <div id="about">
        <p className="heading">Yooo!</p>
        <br/>
        <p className="text">Hello! I am Min Htut Myat a passionate and driven
           Master's student from the University of Sydney.
           My focus has always been to broaden my technical skills, to enhance my problem-solving and 
           critical thinking skills. As per my strong interest in CyberSecurity, I 
           have delved into Linux and a wide range of CyberSecurity tools
           provided specifically by Kali Linux. </p>
         <p className="text"><b>Skills:</b>
         <div class="skills">
            <br></br>
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
            <FaPython />
            <FaJava />
            <SiCsharp />
            <SiCplusplus />
            <SiKotlin />
            <FaReact />
            <DiDotnet />
            <SiMysql />
            <FaGitAlt />
            <SiKalilinux />
            <FaUbuntu />
            <SiMetasploit />
         </div>
         {/* 
         <br></br>
         <br></br>
         💻 Full-Stack Developer: Proficiency in Web Development: HTML, CSS, Javascript. In addition, web frameworks such as ASP.NET and React
         <br></br>
         <br></br>
         🔧 Coding Proficiency: Proficiency in Python, Java, C#, C++ and Kotlin &#40;Mobile Development&#41;
         <br></br>
         <br></br>
         🔒 CyberSecurity Proficiency: Proficiency in Kali Linux penetrating testing tools, Ubuntu, pfsense &#40;FreeBSD based&#41;
         */}</p>
       </div> 
    );
};

export default About;