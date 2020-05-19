import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-body">
      <div className="links">
        <Link
          className='header-link'
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          SHOYA
        </Link>
        <Link
          className='header-link'
          activeClass="active"
          to="menus"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Menus
        </Link>
        <Link
          className='header-link'
          activeClass="active"
          to="reservation"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Reservation
        </Link>
        <Link
          className='header-link'
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
