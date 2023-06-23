import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <div>
            <nav>
                <div>
                    <a href="https://github.com/jaqsentanner" className="navlinks">GitHub <i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jaqsen-meyer-79b220237/" className="navlinks">LinkedIn <i class="fa-brands fa-linkedin"></i></a>
                    <a to="/" className="navlinks">VTS <i class="fa-solid fa-cube"></i></a>
                    <a to="/" className="navlinks">Bootcamp Projects <img src="/uofm_smol.png" id="uofm" width="20px;" height="14px;"></img></a>
                    <a to="/" className="navlinks">Personal Projects</a>
                </div>
                <div>
                    <img src="/sun.png" alt="sun" width="280px"></img>
                </div>
                
            </nav>
            
        </div>
    );
};

export default Header;