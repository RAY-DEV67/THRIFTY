import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../components/footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
      .limit(20)
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

  // console.log("results" , products)


  return (
    <div>
      <Search />
      <p className="ml-[1rem]">Search Results:</p>
      <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <svg width="40px" className="loader " fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.828,5.758,1.415-1.415a1,1,0,1,1,1.414,1.414L16.242,9.172a1,1,0,0,1-1.414-1.414ZM4,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H5A1,1,0,0,1,4,12Zm5.172,4.242L7.757,17.657a1,1,0,0,1-1.414-1.414l1.415-1.415a1,1,0,0,1,1.414,1.414Zm0-7.07a1,1,0,0,1-1.414,0L6.343,7.757A1,1,0,0,1,7.757,6.343L9.172,7.758A1,1,0,0,1,9.172,9.172ZM13,19a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0ZM13,7a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0Zm4.657,10.657a1,1,0,0,1-1.414,0l-1.415-1.415a1,1,0,0,1,1.414-1.414l1.415,1.415A1,1,0,0,1,17.657,17.657ZM20,12a1,1,0,0,1-1,1H17a1,1,0,0,1,0-2h2A1,1,0,0,1,20,12Z"></path></g></svg> : ""}</p>
      <p className="w-[100%] text-center text-xl">{empty ? "No results found" : ""}</p>
      <div>
        <InfiniteScroll
          dataLength={results.length}
          hasMore={hasmore}
          loader={<p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{<svg width="400px" className="loader " fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.828,5.758,1.415-1.415a1,1,0,1,1,1.414,1.414L16.242,9.172a1,1,0,0,1-1.414-1.414ZM4,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H5A1,1,0,0,1,4,12Zm5.172,4.242L7.757,17.657a1,1,0,0,1-1.414-1.414l1.415-1.415a1,1,0,0,1,1.414,1.414Zm0-7.07a1,1,0,0,1-1.414,0L6.343,7.757A1,1,0,0,1,7.757,6.343L9.172,7.758A1,1,0,0,1,9.172,9.172ZM13,19a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0ZM13,7a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0Zm4.657,10.657a1,1,0,0,1-1.414,0l-1.415-1.415a1,1,0,0,1,1.414-1.414l1.415,1.415A1,1,0,0,1,17.657,17.657ZM20,12a1,1,0,0,1-1,1H17a1,1,0,0,1,0-2h2A1,1,0,0,1,20,12Z"></path></g></svg>}</p>
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
                if(!results){<p>No Results Found</p>}
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
