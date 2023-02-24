import store from "../assets/images/store.webp";
import { Link } from "react-router-dom";
import {  SetProduct, SetId } from "../App";
import { useContext } from "react";
import { Topnav } from "../components/topnav";
import { Footer } from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../config/firebase";
import { TopCard } from "../components/topCard";


export function LandingPage() {
  const setProducts = useContext(SetProduct);
  const setProductsId = useContext(SetId);
  const navigate = useNavigate();

  const [search, setsearch] = useState("");
  const [topList, settopList] = useState([]);
  const [error, seterror] = useState("");


  useEffect(() => {
    try{
      db.collection("Products")
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

  return (
    <div>
      <Topnav />
      <div className="flex flex-col items-center">
        <div className="w-[90%]">
          <p className="text-2xl mt-[1rem]">Welcome Back</p>
          <p className="text-4xl my-2 font-bold thriftng">THRIFT SHOPPER</p>
        </div>
      </div>
      <form className="flex flex-col items-center relative" 
      onSubmit={() => { navigate(`/ThriftNg/Search/Cloths/${search}`)}}
      >
        <input
          type="text"
          placeholder="What are you looking for..."
          onChange={(e) => {setsearch(e.target.value)}}
          className="border w-[90%] my-[2rem] rounded-xl pl-[5rem] landingSearch py-[0.5rem]"
        />
        <svg
          fill="#00CC00"
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#00CC00"
          className="absolute left-[7%] top-[35%]"
          onClick={() => { navigate(`/ThriftNg/Search/Cloths/${search}`)}}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"></path>
          </g>
        </svg>
      </form>
      <div className="flex flex-col items-center">
        <div className="w-[90%] productsContainer relative">
          <Link to="/ThriftNg/Clothes">
            <div
              className="relative cloths"
            >
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[12px]">
                Clothes
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Accessories">
            <div
              className="accessories"
            >
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] text-[12px]">
                Accessories
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Shoes">
            <div
              className="shoes"
            >
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[12px]">
                Shoes
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Hair">
            <div
              className=" hair w-[48%]"
            >
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] text-[12px] ">
                Hair
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Bags">
            <div className="bags w-[48%]">
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] text-[12px]">
                Bags
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Skin-Care">
            <div className="skin  w-[48%]">
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] text-[12px]">
                Skin Care
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Pastries">
            <div className="pastries w-[48%]">
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] text-[12px]">
                Pastries
              </p>
            </div>
          </Link>

          <Link to="/ThriftNg/Fragrance">
            <div className="fragrance w-[48%]">
              <p className="tag rounded-[0.5rem] px-[1rem] py-[0.5rem] text-[12px]">
              Fragrance
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-[1.5rem]">
        <h2 className="text-center heading p-2 mb-[2rem]">OFFICIAL STORES</h2>
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
      <div className="flex justify-between p-2 px-[1.5rem] mt-[2rem] mb-[2rem] heading">
          <h2>TOP PRODUCTS</h2>
          <p
            onClick={() => {
              setProducts("Bags");
              navigate("/ThriftNg/All/Products");
            }}
          >
            See All
          </p>
        </div>
        <div>
          <div className="flex flex-wrap gap-3 justify-center ">
          {error ? {error} : ""}
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
          <h2>THRIFTS</h2>
          <p
            onClick={() => {
              navigate("/ThriftNg/Thrifts");
            }}
          >
            See All
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-3 justify-center">
          {error ? {error} : ""}
            {topList.map((post, index) => {
             if(post.condition === "Thrift"){
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

      


      {/* FOOTER */}
     <Footer/>
    </div>
  );
}
