import * as React from 'react';

import Header from '../components/Header';

const Message = () => {

    return (
      <div>
        <Header />
        <div className="message-container">
        <h1 className="message-h1">
                {" "}
                01 | A Message from the Developer{" "}
              </h1>
          <div className="message-box message-icons">
            <div>
              
              <div class="page">
                <h1 data-splitting>My Journey on Earth</h1>
                <p className="p-border">
                I’ve often asked myself “Why am I here?”. In a quest to find out, I’ve found myself down a path of prodigious curiosity. 
                Where am I supposed to go? Who am I supposed to believe? Most importantly - how will my time spent on Earth impact others now and when I am gone? 
                These are the questions that fortify an ever-burning fire within my soul and stoke the embers of an analytical and relentless mind deep into the dark hours of the night.
                Over time, I’ve discovered that the answers lay within the relationships we cultivate with humanity and the technology that we symbiotically interact with.
                I see technology as a symphonic set of instructions that can be wielded for good or evil.
                It’s a beautiful tool that can be used for creation, connection, and information transfer in order to bring us all together and create new experiences that remind us of our human ancestry.
                We are here in the present, and we must always remember our past as we blast forward fearlessly into the future.
                </p>

                <h1 data-splitting>A Bright Future for Humanity</h1>

                <p className="p-border">
                  Times are changing more rapidly than ever before. It’s evident in the design concepts of almost everything we can see, consume, or experience in society today.
                  But, how else is this constant innovation observable in our lives? How does it affect us and are we considering the consequences that our actions have on others?
                  If you slow down and pay attention it becomes apparent that we are at a pivotal time in the story of mankind. The choices we make today will ultimately shape the trajectory of the next thousand years.
                  The way we decide to implement technology into our lives and the control mechanisms that are in place will inevitably dictate the lives of our great-grandchildren and more to come.
                  In order to ensure a bright future for them we must move forward with the lessons and values of our ancestors that came before us.
                  The link must be tethered in a deeper morality that evades the temptations and short-term advantages of modern living.
                </p>

                <h1 data-splitting>Next Steps</h1>

                <p>
                  We all must live and die by a craft - and mine is developing software as a force of good, for all of us.
                  I fell in love with technology from a young age and still today it stimulates my mind in a way that I can’t explain.
                  My plan is to go deeper into searching for what’s possible, to remain consistent, and to wield technology as a weapon that can help us build a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Message;