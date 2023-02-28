import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../components/footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/thriftlogo1.webp"

export function ProductsPage() {
  const {product} = useParams()
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);

  console.log(isEmpty)
  console.log(loading)
  useEffect(() => {
    setloading(true)
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
        setloading(false)
      });
  }, [product]);



  const fetchmore = () => {
    setloading(true)
    db.collection("Products")
    .where("category", "==", product)
      .startAfter(lastDocuments)
      .limit(10)
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
          loader={<p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{<img alt="Logo" className="loader mb-[-1rem]" src={logo1}/>}</p>
        }
          next={fetchmore}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="mb-[5rem] flex flex-wrap gap-3 justify-center"
        >
          {/* <div>{loading ? <p>Loading</p> : ""}</div> */}
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