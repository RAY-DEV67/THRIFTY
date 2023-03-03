import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Topnav } from "../components/topnav";
import logo1 from "../assets/images/thriftlogo1.webp"

export function VendorPage() {
  
  const navigate = useNavigate();
  const {vendor} = useParams()

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
    .where("vendor", "==", vendor)
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
  }, [vendor]);



  const fetchmore = () => {
    setloading(true)
    db.collection("Products")
    .where("vendor", "==", vendor)
      .startAfter(lastDocuments)
      .limit(10)
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
    <div className="md:absolute md:top-[13%] md:z-[-1]">
   <Topnav/>
   <h1 className="p-[1rem] productBorder text-center my-[1rem]">{vendor}</h1>
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
              className="sm:w-[85vw] max-w-4xl"
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