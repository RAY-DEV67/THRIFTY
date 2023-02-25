import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ThriftPage() {
  
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  console.log(loading)
  console.log(isEmpty)
  useEffect(() => {
   try{
    db.collection("Products")
    .where("condition", "==", "Thrift")
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setclothsList(cloths);
        setlastDocuments(lastDoc);
        console.log(lastDoc);
      });
   } catch (err) {
        seterror(err)
        console.log(err)
       }
  }, []);



  const fetchmore = () => {
    setloading(true)
    db.collection("Products")
    .where("condition", "==", "Thrift")
      .startAfter(lastDocuments)
      .limit(20)
      .get()
      .then((collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
          const newcloths = collections.docs.map((cloths) => {
            return { ...cloths.data(), id: cloths.id };;
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
          loader={<p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{<svg width="400px" className="loader " fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.828,5.758,1.415-1.415a1,1,0,1,1,1.414,1.414L16.242,9.172a1,1,0,0,1-1.414-1.414ZM4,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H5A1,1,0,0,1,4,12Zm5.172,4.242L7.757,17.657a1,1,0,0,1-1.414-1.414l1.415-1.415a1,1,0,0,1,1.414,1.414Zm0-7.07a1,1,0,0,1-1.414,0L6.343,7.757A1,1,0,0,1,7.757,6.343L9.172,7.758A1,1,0,0,1,9.172,9.172ZM13,19a1,1,0,0,1-2,0V17a1,1,0,0,1,2,0ZM13,7a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0Zm4.657,10.657a1,1,0,0,1-1.414,0l-1.415-1.415a1,1,0,0,1,1.414-1.414l1.415,1.415A1,1,0,0,1,17.657,17.657ZM20,12a1,1,0,0,1-1,1H17a1,1,0,0,1,0-2h2A1,1,0,0,1,20,12Z"></path></g></svg>}</p>
        }
          next={fetchmore}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="flex flex-wrap gap-3 justify-center"
        >
          {error ? {error} : ""}
          {clothsList.map((post, index) => {
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