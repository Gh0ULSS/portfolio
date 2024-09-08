import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool } from 'react-icons/fa';
import "./Experience.css"

const Experience = () => {
  return (
    <div id="Experience">
      <h1 class="exp">My Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#CBC3E3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase/>}
        >
          <h3 className="vertical-timeline-element-title">Secretary</h3>
          <h4 className="vertical-timeline-element-subtitle">HiC2</h4>
          <p>
          Duties and Responsibilities:
         <br></br>
         <br></br>
          - Meeting minutes and documentation of club related matters.
          <br></br>
          <br></br>
          - Assisting other executive members with club related matters.
          </p>
          <h5 className="vertical-timeline-element-time">2022 - present</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaSchool/>}
        >
          <h3 className="vertical-timeline-element-title">Master's Degree in CyberSecurity</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Sydney</h4>
          <h5 className="vertical-timeline-element-time">2024 - 2025</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaSchool/>}
        >
          <h3 className="vertical-timeline-element-title">Bachelor's Degree in Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Wollogong</h4>
          <p>Activities and Societies
             EIS Mentor Program -- Mentee
             <br></br>
             <br></br>
             UOW hic2 -- Secretary
          </p>
          <h5 className="vertical-timeline-element-time">2020 - 2023</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase/>}
        >
          <h3 className="vertical-timeline-element-title">Programmer Analyst Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">PSA International</h4>
          <p>
          Tasks as a Programmer Analyst:
          <br></br>
          <br></br>
          - Develop, test and implement RPA scripts using UiPath studios
          <br></br>
          <br></br>
          - Perform maintenance and debugging of existing scripts in the event of errors
          <br></br>
          <br></br>
          - Program in Excel VBA macro for automation of MS Excel spreadsheet processes
          <br></br>
          <br></br>
          - Program in Visual Basic when developing RPA scripts
          <br></br>
          <br></br>
          Projects:
          <br></br>
          <br></br>
          Consolidation of Alerts
          <br></br>
          <br></br>
          UiPath features used:
          <br></br>
          <br></br>
          - Downloading excel files for outlook email attachments
          <br></br>
          <br></br>
          - using VB to check if email have valid subjects
          <br></br>
          <br></br>
          - using excel VBA macro to properly format appended data into target excel files
          <br></br>
          <br></br>
          - deleting outlook emails after all processing is done
          <br></br>
          <br></br>
          Earned Public Holiday &#40;EPH&#41;
          <br></br>
          <br></br>
          UiPath features used:
          <br></br>
          <br></br>
          - Editing of selectors on the working page
          <br></br>
          - Use of complex activities for exception handling
          <br></br>
          <br></br>
          - Use of if element exists activity
          </p>
          <h5 className="vertical-timeline-element-time">May 2018 - Aug 2018</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Diploma in Information Technology</h3>
          <h4 className="vertical-timeline-element-subtitle">Nanyang Polytechnic</h4>
          <p>Activities and Societies
             <br></br>
             <br></br>
              Activities and societies: Co-Curricular Activities: NYP Photography Club (Member)
              <br></br>
              <br></br>
              Volunteering: 
              NYP MUSE 2017 &#40;Event Photographer&#41; Activities and societies: Co-Curricular Activities: NYP Photography Club &#40;Member&#41; Volunteering: NYP MUSE 2017 &#40;Event Photographer&#41;
              Volunteering:
              <br></br>
              <br></br>
              - Student volunteer &#40;retail associate&#41; at Black Hat Asia 2018
              <br></br>
              <br></br>
              Achievements:
              - Infosecurity Technology &#40;Distinction&#41;
              - Computing Mathematics 2 &#40;Distinction&#41;
              - Certified Ethical Hacker &#40;CEH&#41; certification
              - Computer Hacking Forensic Investigator &#40;CHFI&#41; certification
              - RPA Developer Foundation Diploma Certificate
          </p>
          <h5 className="vertical-timeline-element-time">2016 - 2019</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;