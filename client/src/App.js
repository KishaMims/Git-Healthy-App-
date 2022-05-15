import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/homepage";
import Exercises from "./pages/exercise";
import About from "./pages/about";
import FindFood from "./pages/findfooditem";
import Recipes from "./pages/recipe";
import Login from "./pages/login";
import Contact from "./pages/contact";
import UserView from "./pages/userview";
import MealTime from "./pages/meals";




function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/api/login' element={<Login />}/>
        {/* <Route path='/logout' element={<Login />}/> */}
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/api/nutrition' element={<FindFood/>}/>
         <Route path='/exercise' element={<Exercises/>}/>
         <Route path='/api/recipes' element={<Recipes/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/api/userview' element={<UserView/>}/>
         <Route path='/api/setmeals' element={<MealTime/>}/>
         <Route path='/api/userview/:foodId' element={<UserView/>}/>
        </Routes>
        {/* <Login/> */}
      </Router>
     );
   }

export default App;
