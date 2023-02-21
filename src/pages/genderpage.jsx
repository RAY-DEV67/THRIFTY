import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../components/footer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export function GenderPage() {
  const {product} = useParams()
  const {gender} = useParams()

  console.log(gender)

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  console.log(isEmpty)
  useEffect(() => {
    db.collection("Products")
    .where("category", "==", product)
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
  }, [product]);



  const fetchmore = () => {
    setloading(true)
    db.collection("Products")
    .where("category", "==", product)
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
            if(post.gender === gender)
           { return (
            <div
            key={index}
            onClick={() => {
              navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
            }}
          >
                <EcommerceCard post={post} />
              </div>
            );}
            return ""
          })}
        </InfiniteScroll>
      </div>
      <div className="flex flex-col items-center">
        {/* <button className="mb-[5rem] border mt-[1rem]">More</button> */}
        {loading ? <p>Chil i dey come</p> : ""}
      </div>
      <Footer/>
    </div>
  );
}