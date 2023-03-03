import store from "../assets/images/store.webp";
import { useState, useEffect, useContext } from "react";
import db from "../config/firebase";
import { EcommerceCard } from "../components/ecommerceCard";
import { useNavigate } from "react-router-dom";
import { SetProduct, SetId } from "../App";
import { TopCard } from "../components/topCard";
// import { Footer } from "../components/footer";
import { Topnav } from "../components/topnav";
import logo1 from "../assets/images/thriftlogo1.webp"
import { Sidebar } from "../components/sidebar";
import logo2 from "../assets/images/logowhite.webp";

export function SkinCarePage() {
  const setProducts = useContext(SetProduct);
  const setProductsId = useContext(SetId);
  // const products = useContext(Product);

  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [topList, settopList] = useState([]);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);

  useEffect(() => {
    setloading(true)
    setempty(false)
    db.collection("Products")
    .where("category", "==", "Skin-Care")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        settopList(cloths);
        setloading(false)
        if(cloths.length === 0){setempty(true)}
      }); 
  }, []);

  useEffect(() => {
    setloading(true)
    setempty(false)
    db.collection("Products")
      .where("category", "==", "Skin-Care")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        setclothsList(cloths);
        setloading(false)
        if(cloths.length === 0){setempty(true)}
      });
  }, []);

  return (
    <div>
     <div className="lg:hidden">
      <Topnav />
      </div>
      <Sidebar/>
      <div  className="lg:absolute lg:left-[40%] lg:top-[13%] lg:z-[-1]">
      <h1 className="p-[1rem] productBorder text-center my-[1rem]">Skin Care</h1>
      <div className="mt-[1rem]">
        <h2 className="text-center heading p-2 mb-[2rem]">
          OFFICIAL SKIN CARE STORES
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap w-[95%] ml-2 gap-2">
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center p-2 mt-[2rem] heading">
          TOP PRODUCTS
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-3 justify-center">
          <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
          <p className="w-[100%] text-center">{empty && "Please Check Your Network Connection"}</p>

            {topList.map((post, index) => {
             if(post.Top){
              return (
                <div
                  key={index}
                  onClick={() => {
                    setProductsId(post.id);
                    navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
                  }}
                >
                  <TopCard post={post} key={index} />
                </div>
              );
             }
             return ""
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between p-2 px-[1.5rem] mt-[2rem] heading">
          <h2>Skin Care</h2>
          <p
            onClick={() => {
              navigate("/ThriftNg/Skin-Care/All-Skin-Care");
            }}
          >
            See All
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center lg:mb-[5rem]">
        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
        <p className="w-[100%] text-center">{empty && "Please Check Your Network Connection"}</p>

          {clothsList.map((post, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setProductsId(post.id);
                  navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
                  setProducts("Accessories");
                }}
                className="lg:w-[95%] max-w-4xl"
              >
                <EcommerceCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <footer className="lg:pb-[0rem] z-30 pb-[4rem] lg:overflow-x-hidden  footer lg:fixed lg:bottom-0 pt-[1rem] lg:pt-[0.5rem] mt-[2rem] flex justify-between px-[2rem] lg:w-[100vw] items-center">
          <img alt="logo" className="w-[70px]" src={logo2}/>
            <p className="motto text-[1.5rem]">Buy More ..... Pay Less</p>
          </footer>
    </div>
  );
}
