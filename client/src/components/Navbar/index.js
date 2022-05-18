import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements.js";
import image from './greenbackgroundlogo.png';
import { useState, useEffect } from "react";
import Login from "../../pages/login.js";


const Navbar = () => {

// const [hidelink, setHideLink] = useState(undefined);

// const login = () => {
//   setHideLink(false);
// }

const [isMobile, seIstMobile] = useState(false);

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
    <Nav className="nav">
    <ul>
        <NavMenu>   
        <div className="logo">
      <img className="logo" alt="greencarrotapple"src={image} style={{height:"75px"}} />
        </div>
        <li>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          </li>
          {/* <li>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          </li> */}
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
        <button className="mobile-menu-icon">
          {isMobile ? (<i clasName="fas fa-times"></i>
    ) : (
        <i className="fas fa-bars"></i>
    )}
        </button>
    </Nav>
    </>
)
}

export default Navbar;