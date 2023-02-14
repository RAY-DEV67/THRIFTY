// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../config/firebase";

import { useState, useContext } from "react";
import { EcommerceCard } from "./ecommerceCard";
import db from "../config/firebase";
import { Search } from "./search";
import { Product } from "../App";
import InfiniteScroll from "react-infinite-scroll-component";

export function ClothesPage() {
  const products = useContext(Product);
  // const setProducts = useContext(SetProduct);

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);

  console.log(isEmpty)
  // useEffect(() => {
  //   db.collection(products)
  //     .orderBy("id", "asc")
  //     .limit(3)
  //     .get()
  //     .then((collections) => {
  //       const cloths = collections.docs.map((cloths) => {
  //         return cloths.data();
  //       });
  //       const lastDoc = collections.docs[collections.docs.length - 1];
  //       setclothsList(cloths);
  //       setlastDocuments(lastDoc);
  //       console.log(lastDoc);
  //     });
  // }, []);



  const fetchmore = () => {
    setloading(true)
    db.collection(products)
      .orderBy("id", "asc")
      .startAfter(lastDocuments)
      .limit(3)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const newcloths = collections.docs.map((cloths) => {
            return cloths.data();
          });
          const lastDoc = collections.docs[collections.docs.length - 1];
          setclothsList((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
          setloading(false)
          // sethasmore(true);
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };


  return (
    <div>
      <Search />
      <div>
        <InfiniteScroll
          dataLength={clothsList.length}
          hasMore={hasmore}
          loader={<h4>Loading...</h4>}
          next={fetchmore}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="bg-red-300 mb-[10rem] flex flex-wrap gap-3 justify-center"
        >
          {clothsList.map((post, index) => {
            return (
              <div key={index}>
                <EcommerceCard post={post} />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
      <div className="flex flex-col items-center">
        {/* <button className="mb-[5rem] border mt-[1rem]">More</button> */}
        {loading ? <p>Chil i dey come</p> : ""}
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
