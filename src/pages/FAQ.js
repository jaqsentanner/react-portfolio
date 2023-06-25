import React from 'react';

import Header from '../components/Header';

const Frequent = () => {

    return (
      <div>
        <Header />
        
        <div className="d-flex justify-content-center faq-margin">
        <h1 className="message-h1">05 | Frequently Asked Questions</h1>
          <div className="faq">
            
            <div className="accordion" id="accordionExample">
              <div className="accordion-item faq-style">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button faq-style"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Who are 3 people, living or dead, that you'd like to have dinner with?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>1. George Washington</strong>
                    <br></br>
                    <strong>2. Patrick Bet-David</strong>
                    <br></br>
                    <strong>3. My grandfather</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item faq-style">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed faq-style"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Apple or Android?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>Blackberry</strong>
                  </div>
                </div>
              </div>
              <div className="accordion-item faq-style">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed faq-style"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How long have you been coding?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>I've been doing front-end development for 9 months!</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Frequent;