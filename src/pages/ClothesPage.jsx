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

export function ClothesPage() {
  const setProducts = useContext(SetProduct);
  const setProductsId = useContext(SetId);

  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [error, seterror] = useState();
  const [topList, settopList] = useState([]);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);

  useEffect(() => {
    try {
      setloading(true)
      setempty(false)
      db.collection("Products")
        .where("category", "==", "Cloths")
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
    } catch (err) {
      seterror(err);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setloading(true)
    setempty(false)

    try {
      db.collection("Products")
        .where("category", "==", "Cloths")
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
    } catch (err) {
      seterror(err);
      console.log(err);
    }
  }, []);

  return (
    <div>
     <div className="lg:hidden">
      <Topnav />
      </div>
      <Sidebar/>
      <div className="lg:absolute lg:left-[40%] lg:top-[13%] lg:z-[-1]">
      <h1 className="p-[1rem] productBorder text-center my-[1rem]">Clothes</h1>
      <div className="flex flex-col items-center">
        <div className="flex w-[90%] gap-3 justify-between">
          <div
            className="relative womenCloths"
            onClick={() => {
              setProducts("Women-Cloths");
              navigate("/ThriftNg/Category/Cloths/Female");
            }}
          >
            {/* <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[100%] h-[90%]" /> */}
            <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[10px]">
              Women's Clothing
            </p>
          </div>
          <div
            className="relative menCloths"
            onClick={() => {
              setProducts("Men-Cloths");
              navigate("/ThriftNg/Category/Cloths/Male");
            }}
          >
            {/* <img src={mencloth} alt="cloths" className="rounded-[1rem] w-[100%] h-[90%]" /> */}
            <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[10px]">
              Men's Clothing
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1rem]">
        <h2 className="text-center heading p-2 mb-[2rem]">
          OFFICIAL CLOTHING STORES
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
            {error ? { error } : ""}
            <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
            <p className="w-[100%] text-center">{empty && "Please Check Your Network Connection"}</p>
      
            {topList.map((post, index) => {
              if (post.Top) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setProductsId(post.id);
                      navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
                      setProducts("Top-Cloths");
                    }}
                  >
                    <TopCard post={post} />
                  </div>
                );
              }
              return "";
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between p-2 px-[1.5rem] mt-[2rem] heading">
          <h2>Cloths</h2>
          <p
            onClick={() => {
              setProducts("Cloths");
              navigate("/ThriftNg/Cloths/All-Clothes");
            }}
          >
            See All
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center lg:mb-[5rem]">
          {error ? { error } : ""}
          <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
          <p className="w-[100%] text-center">{empty && "Please Check Your Network Connection"}</p>
      
          {clothsList.map((post, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setProductsId(post.id);
                  navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
                  setProducts("Cloths");
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
