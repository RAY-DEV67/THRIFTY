import store from "../assets/images/store.webp";
import { useState, useEffect, useContext } from "react";
// import { getDocs, collection } from "firebase/firestore";
import db from "../config/firebase";
import { EcommerceCard } from "../components/ecommerceCard";
import { useNavigate } from "react-router-dom";
import { SetProduct, SetId } from "../App";
import { TopCard } from "../components/topCard";
import { Footer } from "../components/footer";
import { Topnav } from "../components/topnav";

export function AccessoriesPage() {
  const setProducts = useContext(SetProduct);
  const setProductsId = useContext(SetId);
  // const products = useContext(Product);

  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [topList, settopList] = useState([]);

  useEffect(() => {
    db.collection("Products")
    .where("category", "==", "Accessories")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        settopList(cloths);
      });
  }, []);

  useEffect(() => {
    db.collection("Products")
      .where("category", "==", "Accessories")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        setclothsList(cloths);
        // console.log(clothsList);
      });
  }, []);

  return (
    <div>
      <Topnav />
      <h1 className="p-[1rem] productBorder text-center my-[1rem]">Accessories</h1>
      <div className="flex flex-col items-center">
        <div className="flex gap-3 w-[90%]">
          <div
            className="relative womenAccessories"
            onClick={() => {
              setProducts("Women-Cloths");
              navigate("/ThriftNg/Category/Accessories/Female")
            }}
          >
            <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[10px]">
              Women's Accessories
            </p>
          </div>
          <div
            className="relative menAccessories"
            onClick={() => {
              setProducts("Men-Cloths");
              navigate("/ThriftNg/Category/Accessories/Male")
            }}
          >
            <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[10px]">
              Men's Accessories
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1rem]">
        <h2 className="text-center heading p-2 mb-[2rem]">
          OFFICIAL ACCESSORIES STORES
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
        <h2 className="text-center p-2 mt-[2rem] mb-[2rem] heading">
          TOP PRODUCTS
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {topList.map((post, index) => {
             if(post.Top){
              return (
                <div
                  key={index}
                  onClick={() => {
                    setProductsId(post.id);
                    navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
                    setProducts("Top-Accessories");
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
        <div className="flex justify-between p-2 px-[1.5rem] mt-[2rem] mb-[2rem] heading">
          <h2>Accessories</h2>
          <p
            onClick={() => {
              setProducts("Accessories");
              navigate("/ThriftNg/Accessories/All-Accessories");
            }}
          >
            See All
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {clothsList.map((post, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setProductsId(post.id);
                  navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
                  setProducts("Accessories");
                }}
              >
                <EcommerceCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
