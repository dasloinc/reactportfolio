import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ImageFadeIn from "react-image-fade-in";

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Daniel Slobodscoy</h2>
            <ImageFadeIn width={230} height={250} src={"/assets/img/danielroundedsquare.png"} />
            {/* <img
              src="/assets/img/daniel.jpg"
              alt="avatar"
              style={{height: '220px'}}
               /> */}
             <p style={{ width: '70%', margin: 'auto', paddingTop: '3em'}}>Let's collaborate! Contact me with any questions or inquieries</p>

          </Cell>
          <Cell col={6}>
            <h2 style={{textAlign: "left"}}>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <a href="tel:+972585502206" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                  </a>
                  (+972) 85 550-2206
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                  <a href="mailto:danielslobodscoy@gmail.com?Subject=Hello%20world!" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-envelope" aria-hidden="true"/>
                  </a>
                    danielslobodscoy@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
