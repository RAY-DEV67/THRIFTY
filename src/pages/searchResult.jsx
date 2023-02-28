import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../components/footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import logo1 from "../assets/images/thriftlogo1.webp"

export function SearchResult() {
  const {search} = useParams()
  const navigate = useNavigate();

  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [results, setresults] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);
  const [empty, setempty] = useState(false);

  console.log(isEmpty)

  useEffect(() => {
  try{
    setloading(true)
  let unsubscribe;
  if(search.toLowerCase().split(" ").length > 0){
    let query = db.collection("Products")
    query = query.where("searchKeywords", "array-contains-any", search.toLowerCase().split(" ")).limit(10)
query.get().then((querySnapshot) => {
  const productDoc = []
  querySnapshot.forEach((doc) => {
    productDoc.push({id: doc.id, ...doc.data()})
  })
  setresults(productDoc)
  setTimeout(() => {
    setloading(false)
  }, 1000)
  if(productDoc.length === 0){setempty(true)
}
})
  }
  return () => {
    if (unsubscribe) {
      unsubscribe()
    }
  }
  } catch (err) {
    seterror(err)
    console.log(err)
   }
  }, [search]);


  console.log(results)

  const fetchmore = () => {
  try{
    db.collection("Products")
    .where("searchKeywords", "array-contains-any", search.toLowerCase().split(" "))
      .orderBy("title", "asc")
      .startAfter(lastDocuments)
      .limit(10)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const productDoc = []
          collections.docs.map((doc) => {
          return  productDoc.push({id: doc.id, ...doc.data()})
          });
          const lastDoc = collections.docs[collections.docs.length - 1];
          setresults(productDoc);
          setlastDocuments(lastDoc);
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
      });
  } catch (err) {
        seterror(err)
        console.log(err)
       }
  };


  return (
    <div>
      <Search />
      <p className="ml-[1rem]">Search Results:</p>
      <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
      <p className="w-[100%] text-center text-xl">{empty ? "No results found" : ""}</p>
      <div>
        <InfiniteScroll
          dataLength={results.length}
          hasMore={hasmore}
          loader={<p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{<img alt="Logo" className="loader mb-[-1rem]" src={logo1}/>}</p>
        }
          next={fetchmore}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="mb-[10rem] flex flex-wrap gap-3 justify-center"
        >
           {error ? {error} : ""}
          {results.map((post, index) => {
            return (
              <div
              key={index}
              onClick={() => {
                navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
              }}
            >
                  <EcommerceCard post={post} />
                </div>
              ); 
            
          })}
        </InfiniteScroll>
      </div>
      <Footer/>
    </div>
  );
}
