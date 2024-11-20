import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    useEffect(() => {
    }, []);

  return (
    <div>
      <header>
        <nav>
          <a className="logo" href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/assets/simple-white.png`}
              width="200"
              alt="supernote logo"
            />
          </a>
          <div className="navigation">

          </div>
          <div className="actions">
            <button className="button nav-signup">Sign Up</button>
            <Link to="/login" className="button nav-login ">Login</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
