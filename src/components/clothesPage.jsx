import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { EcommerceCard } from "./ecommerceCard";
import db from "../config/firebase";
import { Search } from "./search";

export function ClothesPage() {
  const [clothsList, setclothsList] = useState(null);

  const clothsRef = collection(db, "Cloths");

  const getCloths = async () => {
    const data = await getDocs(clothsRef);

    setclothsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCloths();
  });

  return (
 <div>
      <Search/>
      <div className="flex flex-col items-center">
     <div className="bg-red-300 w-[90%] flex flex-wrap gap-3 justify-center">
      {clothsList?.map((post) => (
        <EcommerceCard post= {post}/>
      ))}
    </div>
   </div>
 </div>
  );
}
