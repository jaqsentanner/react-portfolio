import React from 'react';

import Header from '../components/Header';

const Bootcamp = () => {

    return (
      <div>
        <Header />
        <div className="message-container">
          <h1 className="message-h1"> 03 | U of MN Full-Stack Bootcamp </h1>
          <div className="message-box message-icons">
            <div>
              <div class="page">
                <div className="p-border">
                  <h1 data-splitting>E-News | Lightning Fast News & Weather</h1>
                  <p>
                    Description: A browser-side javascript application for
                    delivering news and weather based on location.
                  </p>
                  <p>Technologies Used: HTML, CSS, JavaScript, Fetch Web API</p>
                  <p>Deployed at: <a href="https://enews.jaqsentanner.com" className="deploy-links">enews.jaqsentanner.com</a></p>
                  <img src="e_news1.png" className="project-img1"></img>
                </div>

                <div className="p-border">
                  <h1 data-splitting>It Takes a Village | Community Board</h1>

                  <p>
                    Description: A Full-Stack application built with JS, Node,
                    and MySQL that is used to help user's within a community
                    share goods and services with each other.
                  </p>
                  <p>
                    Technologies Used: JavaScript, Node.js, Handlebars.js, MySQL
                  </p>
                  <p>Deployed at: <a href="https://itav.jaqsentanner.com" className="deploy-links">itav.jaqsentanner.com</a></p>
                  <img src="ScreenShotVillage.png" className="project-img2"></img>
                </div>

                <div>
                  <h1 data-splitting>JJAMMSTACK | Message Board</h1>

                  <p>Description: A messaging and forum board that is in-dev being built into a full-stack social media application.</p>
                  <p>
                    Technologies Used: React.js, MongoDB, GraphQL, Tailwind ++
                  </p>
                  <p>Deployed at: <a href="https://jjammstack.jaqsentanner.com" className="deploy-links">jjammstack.jaqsentanner.com</a></p>
                  <img src="jjammstack.png" className="project-img3"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Bootcamp;