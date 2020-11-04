import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ImageFadeIn from "react-image-fade-in";



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <ImageFadeIn width={230} height={250} src={"/assets/img/danielroundedsquare.png"} />
              {/* <img
                src="/assets/img/daniel.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '0em'}}>Daniel Slobodscoy</h2>
            <h4 style={{color: 'grey'}}>Full stack developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full Stack Developer with a certificate from the University of Toronto in Full Stack Development complimented by a background in Hospitality & Logistics. Specializing in MERN ( MongoDB, Express, React, Node) applications. Other applicable skills include JavaScript, SQL, CSS and other various technologies, well adjusted to multi-tasking, thriving under high pressured situations and collaborating. Known as a logical problem-solver and passionate to learn the latest cutting edge technologies. My aim is to continue to develop my skill set, and to continue to grow in the tech industry.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Holon, IL</p>
            <h5>Phone</h5>
            <p> +972 58 550-2206</p>
            <h5>Email</h5>
            <p>danielslobodscoy@gmail.com</p>
            <h5>Web</h5>
            <p>www.daslo.me</p>
            <hr style={{borderTop: '4px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Ryerson University"
              schoolDescription="B.A Hospitality and Tourism Management "
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="University of Toronto School of Continuing Studies"
                 schoolDescription="Full stack web developer"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2014}
              endYear={2020}
              jobName="Aroma Espresso Bar"
              jobTitle="Distric Manager"
              jobDescription="I was introduced to the food & beverage industry in 2008. I started my relationship with Aroma Espresso Bar in 2014 and I was operating manager of the corporate stores. A significant part of my job was to develop operations systems by working closely with future franchises - to prepare them for their new involvement. I was also responsible for inventory counts to allow for analysis of our inventory and to ensure we are utilizing our inventory effectively, and are purchasing the right equipment & products to maintain solid inventory data. I worked closely with the head office to set, implement and regulate policies, procedures, and systems. 
              My goal was to maintain a safe, healthy and positive work environment by establishing, following and enforcing high standards for staff, future franchises and customer service by complying with legal regulations and law codes. As an Operator/Manager I was responsible for managing staff levels, the work schedule, wages, hiring and training of all operations employees and coaching future franchises."
              />
 
              <Experience
                startYear={2018}
                endYear={2020}
                jobName="Metropolitan Movers"
                jobTitle="Managing Director"
                jobDescription="I joined the transportation field as a new project to bring and develop new ideas in the industry. This industry is lacking the most significant thing in this world now a days and its technology. My part as a director was to recruitment, train and staff development to maximize productivity and revenue potential through development of the operational and sales teams. Successfully increased employee retention by creating a positive work environment in the company.
                The main part of the business development was to implement new strategies to make the technological aspect of the company more customer friendly, to cultivate strong business relationships with partners & customers, to ensure that the corporation is prepared for internal audits through analysis/preparation of quality assurance and inventory statistics."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={75}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
