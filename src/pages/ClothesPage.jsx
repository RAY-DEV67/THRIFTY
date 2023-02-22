import store from "../assets/images/store.webp";
import { useState, useEffect, useContext } from "react";
import db from "../config/firebase";
import { EcommerceCard } from "../components/ecommerceCard";
import { useNavigate } from "react-router-dom";
import { SetProduct , SetId} from "../App"
import womencloth from "../assets/images/women-cloth.png";
import mencloth from "../assets/images/men-clothes.jpg";
import { TopCard } from "../components/topCard";
import { Footer } from "../components/footer";
import { Topnav } from "../components/topnav";

export function ClothesPage() {
    const setProducts = useContext(SetProduct);
    const setProductsId = useContext(SetId);

    const navigate = useNavigate()

  const [clothsList, setclothsList] = useState([]);
const [error, seterror] = useState();
  const [topList, settopList] = useState([]);

  

  useEffect(() => {
    try{
      db.collection("Products")
    .where("category", "==", "Cloths")
    .limit(10)
    .get()
    .then((collections) => {
      const cloths = collections.docs.map((cloths) => {
        return { ...cloths.data(), id: cloths.id };
      });
      settopList(cloths);
    });
    } catch (err) {
      seterror(err)
      console.log(err)
     }
  }, []);
  
  useEffect(() => {
   try{
    db.collection("Products")
    .where("category", "==", "Cloths")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        setclothsList(cloths);
      });
   }  catch (err) {
    seterror(err)
    console.log(err)
   }
  }, []);

  return (
    <div>
      <Topnav/>
      <h1 className="p-[1rem] border-y text-center my-[1rem]">Clothes</h1>
      <div className="flex flex-col items-center">
      <div className="flex gap-3 w-[90%]">
      <div
              className="relative"
              onClick={() => {
                setProducts("Women-Cloths");
                navigate("/ThriftNg/Category/Cloths/Female")
              }}
            >
              <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[100%] h-[90%]" />
              <p className="absolute z-10 top-[40%] left-[5%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[90%] text-[12px]">
                Women's Clothing
              </p>
            </div>
            <div
              className="relative"
              onClick={() => {
                setProducts("Men-Cloths");
                navigate("/ThriftNg/Category/Cloths/Male")
              }}
            >
              <img src={mencloth} alt="cloths" className="rounded-[1rem] w-[100%] h-[90%]" />
              <p className="absolute top-[40%] z-10 left-[5%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[90%] text-[12px]">
              Men's Clothing
              </p>
            </div>
      </div>
      </div>
      <div className="mt-[1rem]">
        <h2 className="text-center heading p-2 mb-[2rem]">OFFICIAL CLOTHING STORES</h2>
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
          {error ? {error} : ""}
            {topList.map((post, index) => {
            if(post.Top){
              return (
                <div key={index} onClick={() => { setProductsId(post.id); navigate(`/ThriftNg/Buy/${post.category}/${post.id}`); setProducts("Top-Cloths")}}>
                  <TopCard post={post} />
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
      <h2>Cloths</h2>
      <p   onClick={() => {
                setProducts("Cloths");
navigate("/ThriftNg/Cloths/All-Clothes")
              }}>See All</p>

      </div>
<div  className="flex flex-wrap gap-3 justify-center">
{error ? {error} : ""}
{clothsList.map((post, index) => {
            return (
              <div key={index} onClick={() => { setProductsId(post.id); navigate(`/ThriftNg/Buy/${post.category}/${post.id}`); setProducts("Cloths")} }>
                <EcommerceCard post={post} />
              </div>
            );
          })}
</div>
      </div>
      <Footer/>
    </div>
  );

}