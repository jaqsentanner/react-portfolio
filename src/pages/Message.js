import * as React from 'react';

const Message = () => {

    return (
      <div>
        <div>
          <video autoPlay muted loop id="myVideo">
            <source src="sourcebg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    );
}

export default Message;