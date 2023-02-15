import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./components/profile";
import { Sell } from "./components/sell";
import { Saved } from "./components/saved";
import { ProductsPage } from "./pages/ProductsPage";
import { useState } from "react";
import { FAQ } from "./components/faqpage";
import { Invite } from "./components/invitepage";
import { Notifications } from "./components/notificationPage";
import { ContactUs } from "./pages/contactUsPage";
import { PrivacyPolicy } from "./components/privacyPolicy";
import { BagsPage } from "./pages/bagsPage";
import { ClothesPage } from "./pages/ClothesPage";
import { AccessoriesPage } from "./pages/accessoriesPage";
import { ShoesPage } from "./pages/shoesPage";
import { HairPage } from "./pages/hairpage";

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
              <Route
                path="/ThriftNg/:product/:products"
                element={<ProductsPage />}
              />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Invite Friends" element={<Invite />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Contact Us" element={<ContactUs />} />
              <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
              <Route path="/ThriftNg/:product" element={<BagsPage />} />
              <Route path="/ThriftNg/Clothes" element={<ClothesPage />} />
              <Route path="/ThriftNg/Shoes" element={<ShoesPage />} />
              <Route path="/ThriftNg/Hair" element={<HairPage />} />
              <Route path="/ThriftNg/Accessories" element={<AccessoriesPage />} />
            </Routes>
          </Router>
        </SetProduct.Provider>
      </Product.Provider>
    </div>
  );
}

export default App;
