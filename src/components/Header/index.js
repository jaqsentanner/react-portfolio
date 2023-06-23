import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <div>
            <nav>
                <div>
                    <a to="/" className="navlinks">VTS <i class="fa-solid fa-cube"></i></a>
                    <a to="/" className="navlinks">Bootcamp Projects <img src="/uofm_smol.png" id="uofm" width="20px;" height="14px;"></img></a>
                    <a to="/" className="navlinks">Personal Projects</a>
                </div>
                <div>
                    <img src="/sun.png" alt="sun" width="220px"></img>
                </div>
                
            </nav>
            
        </div>
    );
};

export default Header;