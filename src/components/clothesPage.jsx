// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/firebase";

import { useState, useEffect, useContext } from "react";
import { EcommerceCard } from "./ecommerceCard";
import db from "../config/firebase";
import { Search } from "./search";
import { Product } from "../App";

export function ClothesPage() {
  
    const products = useContext(Product);
    // const setProducts = useContext(SetProduct);
 

  const [clothsList, setclothsList] = useState([]);

  // const clothsRef = collection(db, products);

  // const getCloths = async () => {
  //   const data = await getDocs(clothsRef);

  //   setclothsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   console.log(data)
    

  // };

  useEffect(() => {
    db.collection(products).orderBy("price" , "asc").limit(3).get().then((collections) => {
    const cloths =  collections.docs.map((cloths) => {return cloths.data()})
    setclothsList(cloths)
    console.log(clothsList)
    })
  }, [clothsList,products]);

  // if(clothsList.length === 0){
  //   return <h1>Loading</h1>
  // }

  return (
 <div>
      <Search/>
     <div className="bg-red-300 flex flex-wrap gap-3 justify-center">
      {clothsList.map((post, index) => {
        return <div key = {index}>
        <EcommerceCard post= {post}/>
      </div>
      })}
    </div>
 </div>
  );
}

// import usePagination from "firestore-pagination-hook";
// import db from "../config/firebase";
// import { Product } from "../App";
// import { useContext } from "react";
// import { getDocs, collection } from "firebase/firestore";


// export function ClothesPage() {
    
//       const products = useContext(Product);
//       const clothsRef = collection(db, products);


//   const {
//     loading,
//     loadingError,
//     loadingMore,
//     loadingMoreError,
//     hasMore,
//     items,
//     loadMore
//   } = usePagination(
//     getDocs(clothsRef),
//       // .where("userId", "==", 1)
//       // .orderBy("updatedAt", "desc"),
//     // {
//     //   limit: 2
//     // }
//   );
//   console.log( getDocs(clothsRef))

//   return (
//     <div>
//       {loading && <div>Loading...</div>}
//       {items.map(item => (
//         <div>{item.id}</div>
//       ))}
//       {hasMore && !loadingMore && <button onClick={loadMore}>Load more</button>}
//     </div>
//   );
// }