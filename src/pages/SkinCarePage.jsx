import store from "../assets/images/store.webp";
import { useState, useEffect, useContext } from "react";
import db from "../config/firebase";
import { EcommerceCard } from "../components/ecommerceCard";
import { useNavigate } from "react-router-dom";
import { SetProduct, SetId } from "../App";
import { TopCard } from "../components/topCard";
import { Footer } from "../components/footer";
import { Topnav } from "../components/topnav";

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
      <Topnav />
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
          <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <svg width="400px" className="loader " fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.828,5.758,1.415-1.415a1,1,0,1,1,1.414,1.414L16.242,9.172a1,1,0,0,1-1.414-1.414ZM4,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H5A1,1,0,0,1,4,12Zm5.172,4.242L7.757,17.657a1,1,0,0,1-1.414-1.414l1.415-1.415a1,1,0,0,1,1.414,1.414Zm0-7.07a1,1,0,0,1-1.414,0L6.343,7.757A1,1,0,0,1,7.757,6.343L9.172,7.758A1,1,0,0,1,9.172,9.172ZM13,19a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0ZM13,7a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0Zm4.657,10.657a1,1,0,0,1-1.414,0l-1.415-1.415a1,1,0,0,1,1.414-1.414l1.415,1.415A1,1,0,0,1,17.657,17.657ZM20,12a1,1,0,0,1-1,1H17a1,1,0,0,1,0-2h2A1,1,0,0,1,20,12Z"></path></g></svg> : ""}</p>
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
        <div className="flex flex-wrap gap-3 justify-center">
        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <svg width="400px" className="loader " fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.828,5.758,1.415-1.415a1,1,0,1,1,1.414,1.414L16.242,9.172a1,1,0,0,1-1.414-1.414ZM4,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H5A1,1,0,0,1,4,12Zm5.172,4.242L7.757,17.657a1,1,0,0,1-1.414-1.414l1.415-1.415a1,1,0,0,1,1.414,1.414Zm0-7.07a1,1,0,0,1-1.414,0L6.343,7.757A1,1,0,0,1,7.757,6.343L9.172,7.758A1,1,0,0,1,9.172,9.172ZM13,19a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0ZM13,7a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0Zm4.657,10.657a1,1,0,0,1-1.414,0l-1.415-1.415a1,1,0,0,1,1.414-1.414l1.415,1.415A1,1,0,0,1,17.657,17.657ZM20,12a1,1,0,0,1-1,1H17a1,1,0,0,1,0-2h2A1,1,0,0,1,20,12Z"></path></g></svg> : ""}</p>
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
