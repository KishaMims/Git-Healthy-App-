import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/homepage";
import Exercises from "./pages/exercise";
import About from "./pages/about";
import Nutrition from "./pages/nutritionpage";
import Recipes from "./pages/recipe";
import SearchFood from "./pages/searchfood";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Auth0Lock from 'auht0-lock';



const lock = new Auth0Lock(
    '7kHcCdykKkIirg50ElD91DIL2ON5O2Jb',
    'cdm-ium.auth0.com/',
);



function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/login' element={<Login />}/>
        {/* <Route path='/logout' element={<Login />}/> */}
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/nutrition' element={<Nutrition/>}/>
         <Route path='/exercise' element={<Exercises/>}/>
         <Route path='/recipes' element={<Recipes/>}/>
         <Route path='/searchfood' element={<SearchFood/>}/>
         <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Login/>
      </Router>
     );
   }

export default App;
