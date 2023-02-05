
import "./App.css";
import { NavBar } from "./components/navbar";
import { LandingPage } from "./components/LandingPage";
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import { Profile } from "./components/profile";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
<Route path="/" element={<LandingPage/>}/>
<Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
