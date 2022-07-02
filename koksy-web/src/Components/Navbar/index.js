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
  
const Navbar = () => {
  var [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={()=> setShowNavbar(!showNavbar)} />
        {showNavbar? 
       <SmallNavMenu> <SmallNavLink to='/' activeStyle>
       Cwiczenia
     </SmallNavLink>
     <SmallNavLink to='/workouts' activeStyle>
       Events
     </SmallNavLink>
     {/* Second Nav */}
     {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
   </SmallNavMenu>:"" 
      }
        <NavMenu>
          <NavLink to='/' activeStyle>
            Cwiczenia
          </NavLink>
          <NavLink to='/workouts' activeStyle>
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