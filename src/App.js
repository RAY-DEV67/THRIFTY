import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./components/profile";
import { Sell } from "./components/sell";
import { Saved } from "./components/saved";
import { ProductsPage } from "./pages/ProductsPage";
import { useState} from "react";
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
import { BuyProduct } from "./pages/buyProduct";
import { SearchResult } from "./pages/searchResult";
import { ScrollToTop } from "./components/scrollToTop";
import { TopProductsPage } from "./pages/topProducts";
import { ThriftPage } from "./pages/ThriftsPage";
import { SkinCarePage } from "./pages/SkinCarePage";
import { PastriesPage } from "./pages/PastriesPage";
import { FragrancePage } from "./pages/FragrancePage";
import { GenderPage } from "./pages/genderpage";
import { Page404 } from "./pages/404Page";

export const Product = React.createContext();
export const SetProduct = React.createContext();
export const Id = React.createContext();
export const SetId = React.createContext();

function App() {
  const [products, setproducts] = useState(() => {
    let tempProducts = JSON.stringify(localStorage.getItem("Product"));
    return tempProducts || "";
  });
  const [id, setid] = useState(() => {
    let tempProducts = JSON.stringify(localStorage.getItem("ID"));
    return tempProducts || "";
  });

  // useEffect(() => {
  //   if (!fetched.current) {
  //     fetched.current = true;
  //     const data = window.localStorage.getItem("Product");
  //     setproducts(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!fetchedID.current) {
  //     fetchedID.current = true;
  //     const dataId = window.localStorage.getItem("ID");
  //     setid(dataId);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (fetched.current) {
  //     window.localStorage.setItem("Product", products);
  //   }
  // }, [products]);

  // useEffect(() => {
  //   if (fetchedID.current) {
  //     window.localStorage.setItem("ID", id);
  //   }
  // }, [id]);

  return (
    <div className="App">
      <Id.Provider value={id}>
        <SetId.Provider value={setid}>
          <Product.Provider value={products}>
            <SetProduct.Provider value={setproducts}>
              <Router>
                <ScrollToTop>
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
                   <Route
                    path="/ThriftNg/Category/:product/:gender"
                    element={<GenderPage />}
                  />
                    <Route
                    path="/ThriftNg/All/:product"
                    element={<TopProductsPage />}
                  />
                     <Route
                    path="/ThriftNg/Thrifts"
                    element={<ThriftPage />}
                  />
                  <Route
                    path="/ThriftNg/Search/:product/:search"
                    element={<SearchResult />}
                  />
                  <Route path="/FAQ" element={<FAQ />} />
                  <Route path="/Invite Friends" element={<Invite />} />
                  <Route path="/Notifications" element={<Notifications />} />
                  <Route path="/Contact Us" element={<ContactUs />} />
                  <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
                  <Route path="/ThriftNg/Bags" element={<BagsPage />} />
                  <Route path="/ThriftNg/Clothes" element={<ClothesPage />} />
                  <Route path="/ThriftNg/Shoes" element={<ShoesPage />} />
                  <Route path="/ThriftNg/Hair" element={<HairPage />} />
                  <Route path="/ThriftNg/Fragrance" element={<FragrancePage />} />
                  <Route
                    path="/ThriftNg/Accessories"
                    element={<AccessoriesPage />}
                  />
                   <Route
                    path="/ThriftNg/Skin-Care"
                    element={<SkinCarePage />}
                  />
                    <Route
                    path="/ThriftNg/Pastries"
                    element={<PastriesPage />}
                  />
                  <Route
                    path="/ThriftNg/Buy/:product/:id"
                    element={<BuyProduct />}
                  />
                  <Route
                    path="/*"
                    element={<Page404 />}
                  />
                </Routes>
                </ScrollToTop>
              </Router>
            </SetProduct.Provider>
          </Product.Provider>
        </SetId.Provider>
      </Id.Provider>
    </div>
  );
}

export default App;
