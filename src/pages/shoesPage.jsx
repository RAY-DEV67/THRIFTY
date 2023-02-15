import store from "../assets/images/store.webp";
import { useState, useEffect, useContext } from "react";
import db from "../config/firebase";
import { EcommerceCard } from "../components/ecommerceCard";
import { useNavigate } from "react-router-dom";
import { SetProduct} from "../App"
import womencloth from "../assets/images/women-shoes.webp";
import mencloth from "../assets/images/men-shoes.jpg";
import { TopCard } from "../components/topCard";
// import { getDocs, collection } from "firebase/firestore";


export function ShoesPage() {
    const setProducts = useContext(SetProduct);

    const navigate = useNavigate()

  const [clothsList, setclothsList] = useState([]);
  const [topList, settopList] = useState([]);

  // const topRef = collection(db, "Top-Hair");

  // const getTop = async () => {
  //   const data = await getDocs(topRef);
  //   settopList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  useEffect(() => {
    db.collection("Top-Shoes")
    .limit(10)
    .get()
    .then((collections) => {
      const cloths = collections.docs.map((cloths) => {
        return cloths.data();
      });
      settopList(cloths);
    });
  }, []);


  
  useEffect(() => {
    db.collection("Shoes")
      .orderBy("title", "asc")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return cloths.data();
        });
        setclothsList(cloths);
      });
  }, []);

  return (
    <div>
      <h1 className="p-[1rem] border-y text-center mb-[1rem]">Shoes</h1>
      <div className="flex flex-col items-center">
      <div className="flex gap-3 w-[90%]">
      <div
              className="relative"
              onClick={() => {
                setProducts("Women-Cloths");
                navigate("/ThriftNg/Clothes/Women-Shoes")
              }}
            >
              <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[100%] h-[90%]" />
              <p className="absolute z-10 top-[20%] left-[5%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[90%] text-[12px]">
                Women's Shoes
              </p>
            </div>
            <div
              className="relative"
              onClick={() => {
                setProducts("Men-Cloths");
                navigate("/ThriftNg/Clothes/Men-Shoes")
              }}
            >
              <img src={mencloth} alt="cloths" className="rounded-[1rem] w-[100%] h-[90%]" />
              <p className="absolute top-[20%] z-10 left-[5%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[90%] text-[12px]">
              Men's Shoes
              </p>
            </div>
      </div>
      </div>
      <div className="mt-[1rem]">
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
        <h2 className="text-center p-2 mt-[2rem] mb-[2rem] heading">
          TOP PRODUCTS
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {topList.map((post, index) => {
              return (
                <div key={index}>
                  <TopCard post={post} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
      <div className="flex justify-between p-2 px-[1.5rem] mt-[2rem] mb-[2rem] heading">
      <h2>Shoes</h2>
      <p   onClick={() => {
                setProducts("Cloths");
navigate("/ThriftNg/Shoes/All-Shoes")
              }}>See All</p>

      </div>
<div  className="flex flex-wrap gap-3 justify-center">
{clothsList.map((post, index) => {
            return (
              <div key={index}>
                <EcommerceCard post={post} />
              </div>
            );
          })}
</div>
      </div>
    </div>
  );

}

