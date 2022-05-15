import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";
import image from './logo.jpg';
import { useState, useEffect } from "react";
import Login from "../../pages/login.js";


const Navbar = ( props ) => {

const [hidelink, setHideLink] = useState(undefined);

const login = () => {
  setHideLink(false);
}

const [user, setUser] = useState(undefined);

const loadUser = () => {
  fetch("/api/login")
  .then((response) => {
  if(response.status === 200){
      return response.json()
     
  } else {
    return undefined;
  }
  })
  .then(user =>{
      setUser(user);
  })
};

useEffect(()=>{
  loadUser();
}, []);    

    return (
    <> 
    <Nav>
    <ul>
        <NavMenu>
        <img src={image} alt="logo" height={80} style={{ align: !'left' }} />
        <h2 className="title-tag">Git Healthy</h2>
        <li>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          </li>
          <li>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          </li>
             { user && 
             <li className="hiddenLink">
               <NavLink to="/api/userview" activeStyle>
                Meals
                </NavLink>
                </li>
                }
                <li>
                <NavLink to="/exercise" activeStyle>
                  Exercises
                </NavLink>
                </li>
                <li>
                <NavLink to="/api/recipes" activeStyle>
                  Recipes
                </NavLink>
                </li>
                <li>
                <NavLink to="/contact" activeStyle>
                  Contact
                </NavLink>
                </li>
                <li>
                  <Login/>
                </li>
        </NavMenu>
        </ul>
    </Nav>
    </>
)
}

export default Navbar;