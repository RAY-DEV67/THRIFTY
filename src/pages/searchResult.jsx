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

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [results, setresults] = useState([]);

  console.log(isEmpty)
  // const productsRef = db.collection("Products")
  // const words = search.toLowerCase().split(" ")

  useEffect(() => {
  
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
  })
    }
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [search]);


  console.log(results)

  const fetchmore = () => {
    setloading(true)
    db.collection("Products")
    .where("searchKeywords", "array-contains-any", search.toLowerCase().split(" "))
      .orderBy("title", "asc")
      .startAfter(lastDocuments)
      .limit(20)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const newcloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };
          });
          const lastDoc = collections.docs[collections.docs.length - 1];
          setclothsList((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
          setloading(false)
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
      });
  };

  // console.log("results" , products)


  return (
    <div>
      <Search />
      <p>Search Results</p>
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
          {results.map((post, index) => {
            // if(post.title ?.toLowerCase().includes(search) || post.price ?.toLowerCase().includes(search) || post.category ?.toLowerCase().includes(search) || post.description ?.toLowerCase().includes(search) || post.condition ?.toLowerCase().includes(search) || post.gender ?.toLowerCase().includes(search) || post.location ?.toLowerCase().includes(search)){
                
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
            // }else{
            //     return (
            //         <div>
            //          <p>No results found</p>
            //         </div>
            //       ); 
            // }
          })}
        </InfiniteScroll>
      </div>
      <div className="flex flex-col items-center">
        {loading ? <p>Chil i dey come</p> : ""}
      </div>
      <Footer/>
    </div>
  );
}
