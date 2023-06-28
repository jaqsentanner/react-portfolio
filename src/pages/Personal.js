import React from 'react';

import Header from '../components/Header';

const Personal = () => {

    return (
      <div>
        <Header />
        <div className="message-container">
        <h1 className="message-h1">
                {" "}
                02 | Personal Coding Projects{" "}
              </h1>
          <div className="message-box message-icons">
            <div>
              
              <div className="page">
              <div className="p-border">
                  <h1 data-splitting>Cellular Connect</h1>
                  <p>
                    Description: A dashboard for making informed decisions about cellular tower inspection data. 
                  </p>
                  <p>Technologies Used: React.js, MaterialUI, Bootstrap, Node.js, Heroku ++</p>
                  <p className="no-deploy">Deployed at: <s>cellularconnect.jaqsentanner.com</s></p>
                  <img src="indevphoto.png" className="project-img1"></img>
                </div>

                <div className="p-border">
                  <h1 data-splitting>Jaqsen's Burgers</h1>
                  <p>
                    Description: A front-end, artistic approach to an old-school diner's burger menu. Shakes included.
                  </p>
                  <p>Technologies Used: </p>
                  <p className="no-deploy">Deployed at: <s>burgers.jaqsentanner.com</s></p>
                  <img src="indevphoto.png" className="project-img1"></img>
                </div>

                <div>
                  <h1 data-splitting>jaqsenmeyer.com</h1>
                  <p>
                    Description: A personal blog page for sharing healthly living ideas and an insight into my personal fitness journey.
                  </p>
                  <p>Technologies Used: </p>
                  <p className="no-deploy">Deployed at: <s>jaqsenmeyer.com</s></p>
                  <img src="indevphoto.png" className="project-img1"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer1">
            <div className="bottomfoot codeoverride">
                <p>Developed by jaqsentanner
                    <a href="https://github.com/jaqsentanner"><i className="fa-brands fa-github footicon"></i></a>
                    <a href="https://www.linkedin.com/in/jaqsen-meyer-79b220237/"><i className="fa-brands fa-linkedin footicon"></i></a>
                </p>
            </div>
        </footer>
      </div>
    );
}

export default Personal;