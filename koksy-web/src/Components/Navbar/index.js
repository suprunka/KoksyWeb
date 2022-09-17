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
const Navbar = () => {
  var [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={()=> setShowNavbar(!showNavbar)} />

        <FontAwesomeIcon  className={`backButton ${localStorage.getItem('token') == undefined ? 'display-none':''}`} 
          icon={faChevronLeft} onClick={()=> history.back()}/>
        {showNavbar? 
       <SmallNavMenu onClick={()=> setShowNavbar(!showNavbar)} > 
        <SmallNavLink to='/' activestyle>
       Cwiczenia
     </SmallNavLink>
     <SmallNavLink to='/workouts' activestyle>
       Events
     </SmallNavLink>
     {/* Second Nav */}
     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
   </SmallNavMenu>:"" 
      }
        <NavMenu>
          <NavLink to='/' activestyle>
            Cwiczenia
          </NavLink>
          <NavLink to='/workouts' activestyle>
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
  
export default Navbar;