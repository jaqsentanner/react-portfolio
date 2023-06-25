import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import { Link } from 'react-router-dom';




const Splash = () => {

    const [showElement, setShowElement] = React.useState(false)
    useEffect(()=>{
        setTimeout(function() {
            setShowElement(true)
        }, 5000);
    },
    [])
    

    return (
      <div>
        <div>
          <video autoPlay muted loop id="myVideo">
            <source src="sourcebg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="splash-content d-flex justify-content-center">
          <Stack
            direction="row"
            spacing={2}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Avatar
              alt="Jaqsen Meyer"
              src="/jaq.jpg"
              sx={{ height: "140px", width: "140px" }}
            />
            <h1 className="splash-h1 google-test">Jaqsen Meyer</h1>
            <div className="typewriter">
              <h3 className="splash-h3">
                Software Engineer - USA, Earth
                <img
                  src="./flagusa.png"
                  className="flag-size"
                  style={{ marginBottom: 4 + "px" }}
                ></img>
              </h3>
            </div>
            <div>
              {showElement ? (
                <div className="wrapper loading">
                  <div className="bg loading">
                    <div className="el loading"></div>
                  </div>
                  <p id="indev">in-development</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              className="d-flex flex-column"
              style={{ marginTop: 60 + "px" }}
            >
              <button
                type="button"
                className="btn btn-outline-light splash-btn"
              >
                A Message from the Developer{" "}
                <i className="fa-regular fa-message splash-icons"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-light splash-btn"
              >
                Personal Projects{" "}
                <i class="fa-solid fa-laptop splash-icons"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-light splash-btn"
              >
                U of MN Bootcamp Projects{" "}
                <img
                  src="uofm_smol.png"
                  width="20px"
                  height="16px"
                  style={{ marginBottom: 4 + "px" }}
                ></img>
              </button>
              <button
                type="button"
                className="btn btn-outline-light splash-btn"
              >
                Resume <i className="fa-regular fa-file splash-icons"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-light splash-btn"
              >
                FAQ <i className="fa-solid fa-question splash-icons"></i>
              </button>
              <button
                type="button"
                className="btn btn-outline-light splash-btn"
              >
                Contact <i className="fa-regular fa-bell splash-icons"></i>
              </button>
            </div>
          </Stack>
          <div></div>
        </div>
      </div>
    );
};

export default Splash;



