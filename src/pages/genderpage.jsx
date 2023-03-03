import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
// import { Footer } from "../components/footer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo1 from "../assets/images/thriftlogo1.webp"
import { Sidebar } from "../components/sidebar";
import logo2 from "../assets/images/logowhite.webp";


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
    setloading(true)
    try{
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
        setTimeout(() => {
          setloading(false)
        }, 1000)
      });
    }  catch (err) {
      console.log(err)
     }
  }, [product]);



  const fetchmore = () => {
    try{
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
    }  catch (err) {
      console.log(err)
     }
  };


  return (
    <div>
       <div className="lg:block mg:mb-[1rem] hidden">
    <Sidebar/>
    </div>
      <div className="lg:absolute lg:top-[13%] lg:left-[40%] lg:z-[-1]">
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
          className="mb-[10rem] flex flex-wrap gap-3 justify-center"
        >
          <p className="w-[100%] flex flex-col items-center mb-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
     
          {clothsList.map((post, index) => {
            if(post.gender === gender)
           { return (
            <div
            key={index}
            onClick={() => {
              navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
            }}
            className="sm:w-[85vw] lg:w-[95%] max-w-4xl"
          >
                <EcommerceCard post={post} />
              </div>
            );}
            return ""
          })}
        </InfiniteScroll>
      </div>
    </div>
    <footer className="lg:pb-[0rem] z-30 pb-[4rem] lg:overflow-x-hidden  footer lg:fixed lg:bottom-0 pt-[1rem] lg:pt-[0.5rem] mt-[2rem] flex justify-between px-[2rem] lg:w-[100vw] items-center">
          <img alt="logo" className="w-[70px]" src={logo2}/>
            <p className="motto text-[1.5rem]">Buy More ..... Pay Less</p>
          </footer>
    </div>  );
}