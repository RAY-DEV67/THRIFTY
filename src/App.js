import React from "react"
import "./App.css";
import { NavBar } from "./components/navbar";
import { LandingPage } from "./components/LandingPage";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import { Profile } from "./components/profile";
import { Sell } from "./components/sell";
import { Saved } from "./components/saved";
import { ClothesPage } from "./components/clothesPage";



function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
<Route path="/" element={<LandingPage/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/sell" element={<Sell/>}/>
<Route path="/saved" element={<Saved/>}/>
<Route path="/clothes" element={<ClothesPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
