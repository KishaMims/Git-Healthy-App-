import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";
import image from './logo.jpg';




const Navbar = () => {
  
   
    return (
    <> 
    <Nav>
        <NavMenu>
        <img src={image} alt="logo" height={80} style={{ align: !'left' }} />
        <h2 className="title-tag">Git Healthy</h2>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/api/userview" activeStyle>
            Meals
          </NavLink>
          <NavLink to="/exercise" activeStyle>
            Exercises
          </NavLink>
          <NavLink to="/recipes" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
    </Nav>
    </>
)
}

export default Navbar;