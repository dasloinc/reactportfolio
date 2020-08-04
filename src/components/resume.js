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
            <ImageFadeIn width={200} height={230} src={"/assets/img/daniel.jpg"} />
              {/* <img
                src="/assets/img/daniel.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
            </div>

            <h2 style={{paddingTop: '2em'}}>Daniel Slobodscoy</h2>
            <h4 style={{color: 'grey'}}>Full stack developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full Stack Developer with a diploma from the University of Toronto in Full Stack Development complimented by a background in Hospitality & Logistics. Specializing in MERN ( MongoDB, Express, React, Node) applications. Other applicable skills include JavaScript, SQL, CSS and other various technologies, well adjusted to multi-tasking, thriving under high pressured situations and collaborating. Known as a logical problem-solver and passionate to learn the latest cutting edge technologies. My aim is to continue to develop my skill set, and to continue to grow in the tech industry.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Toronto, ON</p>
            <h5>Phone</h5>
            <p>(647) 993-2205</p>
            <h5>Email</h5>
            <p>danielslobodscoy@gmail.com</p>
            <h5>Web</h5>
            <p>https://polar-beach-97093.herokuapp.com/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Ryerson University"
              schoolDescription="Hospitality and Tourism Management "
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
              startYear={2015}
              endYear={2020}
              jobName="Aroma Espresso Bar"
              jobDescription="I was introduced to the food & beverage industry in 2008. I started my relationship with Aroma Espresso Bar in 2015 and I was operating manager of the corporate store. A significant part of my job was to develop operations systems by working closely with future franchises - to prepare them for their new involvement. I was also responsible for inventory counts to allow for analysis of our inventory and to ensure we are utilizing our inventory effectively, and are purchasing the right equipment and products to maintain solid inventory data. I worked closely with the head office to set, implement and regulate policies, procedures, and systems."
              />

              <Experience
                startYear={2018}
                endYear={2020}
                jobName="Metropolitan Movers - Director"
                jobDescription="I decided to join a growing company in the transportation field (logistics, shipments & deliveries). I operate the logistics and HR of the business full-time. I am Always looking to grow the franchise by getting in touch with future collaborations with clients and partners."
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
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={40}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
