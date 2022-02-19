import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../../images/logo.png';
import './Navbar.css';

import React from 'react';

const Navbar = () => {
    return (
        <div className="Container">
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand"  href="#"></a>
  <img src={logo} alt="" height={'50px'} width={'100px'}></img>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
    <ul className="navbar-nav  p-3">
      <li className="nav-item active ">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item nav">
        <a className="nav-link text-white" href="#">Login</a>
      </li>
      
    </ul>
  </div>
</nav>
          
        </div>
    );
};

export default Navbar;