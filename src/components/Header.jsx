import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header_sect">
        <nav>
          <ul>
            <Link className="link" to={"/"}>
              Home
            </Link>
            <Link className="link" to={"/blogs"}>
              Blog
            </Link>
            <Link className="link" to={"/works"}>
              Works
            </Link>
          </ul>
        </nav>
      </div>
    );
}


export default Header;