import store from "../assets/images/store.webp";
import { useState, useEffect } from "react";
import db from "../config/firebase";
import { EcommerceCard } from "./ecommerceCard";

export function BagsPage() {

  const [clothsList, setclothsList] = useState([]);


  
  useEffect(() => {
    db.collection("Bags")
      .orderBy("id", "asc")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return cloths.data();
        });
        setclothsList(cloths);
      });
  }, []);

    // const fetchmore = () => {
    //     setloading(true)
    //     db.collection(products)
    //       .orderBy("id", "asc")
    //       .startAfter(lastDocuments)
    //       .limit(3)
    //       .get()
    //       .then((collections) => {
    //         const isCollectionEmpty = collections.size === 0;
    //         if (!isCollectionEmpty) {
    //           const newcloths = collections.docs.map((cloths) => {
    //             return cloths.data();
    //           });
    //           const lastDoc = collections.docs[collections.docs.length - 1];
    //           setclothsList((clothsList) => [...clothsList, ...newcloths]);
    //           setlastDocuments(lastDoc);
    //           setloading(false)
    //           // sethasmore(true);
    //         } else {
    //           setisEmpty(true);
    //           sethasmore(false);
    //         }
    //         // console.log(clothsList)
    //       });
    //   };


  return (
    <div>
      <h1 className="p-[1rem] border-y text-center mb-[1rem]">Bags</h1>
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
      {clothsList.map((post, index) => {
            return (
              <div key={index}>
                <EcommerceCard post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
