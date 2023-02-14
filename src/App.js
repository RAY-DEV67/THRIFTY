import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar";
import { LandingPage } from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./components/profile";
import { Sell } from "./components/sell";
import { Saved } from "./components/saved";
import { ClothesPage } from "./components/ProductsPage";
import { useState } from "react";
import { FAQ } from "./components/faqpage";
import { Invite } from "./components/invitepage";
import { Notifications } from "./components/notificationPage";
import { ContactUs } from "./components/contactUsPage";
import { PrivacyPolicy } from "./components/privacyPolicy";
import { BagsPage } from "./components/bagsPage";

export const Product = React.createContext();
export const SetProduct = React.createContext();

function App() {
  const [products, setproducts] = useState("");


  return (
    <div className="App">
      <Product.Provider value={products}>
        <SetProduct.Provider value={setproducts}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/clothes" element={<ClothesPage />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Invite Friends" element={<Invite />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Contact Us" element={<ContactUs />} />
              <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
              <Route path="/Bags" element={<BagsPage />} />
            </Routes>
          </Router>
        </SetProduct.Provider>
      </Product.Provider>
    </div>
  );
}

export default App;
