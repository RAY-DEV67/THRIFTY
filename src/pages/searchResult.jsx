import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import logo1 from "../assets/images/thriftlogo1.webp"
import { Sidebar } from "../components/sidebar";
import logo2 from "../assets/images/logowhite.webp";

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
  setloading(false)
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
          <div className="lg:block hidden">
    <Sidebar/>
    </div>
      <div className="md:absolute md:top-[13%] lg:left-[40%] md:z-[-1] lg:w-[59vw]">
      <Search />
      <p className="ml-[1rem]">Search Results:</p>
      <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
      <p className="w-[100%] text-center text-xl md:w-[100vw]">{empty ? "No results found" : ""}</p>
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
              className="sm:w-[85vw] lg:w-[95%] max-w-4xl"
            >
                  <EcommerceCard post={post} />
                </div>
              ); 
            
          })}
        </InfiniteScroll>
      </div>
    </div>
    <footer className="md:pb-[0rem] z-30 pb-[4rem] md:overflow-x-hidden  footer md:fixed md:bottom-0 pt-[1rem] md:pt-[0.5rem] mt-[2rem] flex justify-between px-[2rem] md:w-[100vw] items-center">
          <img alt="logo" className="w-[70px]" src={logo2}/>
            <p className="motto text-[1.5rem]">Buy More ..... Pay Less</p>
          </footer>
    </div>
  );
}
