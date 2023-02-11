import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/firebase";
import { useState, useEffect, useContext } from "react";
import { EcommerceCard } from "./ecommerceCard";
import db from "../config/firebase";
import { Search } from "./search";
import { Product } from "../App";

export function ClothesPage() {
  
    const products = useContext(Product);
    // const setProducts = useContext(SetProduct);
 

  const [clothsList, setclothsList] = useState(null);

  const clothsRef = collection(db, products);

  // const getCloths = async () => {
  //   const data = await getDocs(clothsRef);

  //   setclothsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   console.log(data)

  // };

  useEffect(() => {
    // const getCloths = async () => {
      const data = getDocs(clothsRef);
  
      setclothsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data)
  
    // };
  }, [clothsRef]);

  return (
 <div>
      <Search/>
     <div className="bg-red-300 flex flex-wrap gap-3 justify-center">
      {clothsList?.map((post) => (
        <EcommerceCard post= {post}/>
      ))}
    </div>
 </div>
  );
}
