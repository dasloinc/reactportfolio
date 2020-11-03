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
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+972) 85 550-2206
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
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
