import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  SmallNavMenu,
  SmallNavLink
} from './NavbarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";

const Navbar = ({title}) => {
  var [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={()=> setShowNavbar(!showNavbar)} />

        <FontAwesomeIcon  className={`backButton ${localStorage.getItem('token') == undefined ? 'display-none':''}`} 
          icon={faChevronLeft} onClick={()=> history.back()}/>
          <p className='center-h p-3'>{title}</p> 
        {showNavbar? 
       <SmallNavMenu onClick={()=> setShowNavbar(!showNavbar)} > 
        <SmallNavLink to='/'>
       Cwiczenia
     </SmallNavLink>
     <SmallNavLink to='/workouts'>
       Events
     </SmallNavLink>
     {/* Second Nav */}
     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
   </SmallNavMenu>:"" 
      }
        <NavMenu>
          <NavLink to='/'>
            Cwiczenia
          </NavLink>
          <NavLink to='/workouts'>
            Events
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
   
Navbar.propTypes = {
  title: PropTypes.text,
};
export default Navbar;