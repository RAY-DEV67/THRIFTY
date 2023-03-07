import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
// import { Footer } from "../components/footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/thriftlogo1.webp"
import { Sidebar } from "../components/sidebar";
import logo2 from "../assets/images/logowhite.webp";


export function ThriftPage() {
  
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [empty, setempty] = useState(false);
  const [activeProduct, setactiveProduct] = useState(true);
  const [allProducts, setallProducts] = useState(true);
  const [location, setlocation] = useState(false);
  const [state, setstate] = useState("Location");
  const [dual, setdual] = useState(false);
  const [Locationfilter, setLocationfilter] = useState(false);
  const [gender, setgender] = useState(false);
  const [genderType, setgenderType] = useState("Gender");
  const [genderFilter, setgenderFilter] = useState(false);


  // console.log(loading)
  console.log(isEmpty)
  console.log(error)
  useEffect(() => {
    if (genderFilter && Locationfilter) {
      setdual(true);
      console.log(genderFilter)
      console.log(Locationfilter)
    } else {
      setdual(false);
    }
    setloading(true)
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
        setloading(false)
        if(cloths.length === 0){setempty(true)}
      });
   } catch (err) {
        seterror(err)
        console.log(err)
       }
  }, [genderFilter, Locationfilter]);



  const fetchmore = () => {
    // setloading(true)
    db.collection("Products")
    .where("condition", "==", "Thrift")
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
          // setloading(false)
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };


  return (
   <div>
    <div className="lg:block hidden">
    <Sidebar/>
    </div>
     <div className="lg:absolute lg:top-[13%] lg:left-[40%]  lg:z-[-1]">
      <Search />
      <div className="-mt-[1rem] mx-[1rem] mb-[1rem] flex">
          <div 
           onClick={() => {
            // setallProducts(false);
            // setunder5(!under5);
            // setactiveProduct(false)
            setgender(!gender)
          }}
          className="flex filter items-center px-[1rem] py-[0.2rem] rounded-[20px]">
          <p
            className="mr-[0.5rem]"
          >
            {genderType}
          </p>
          <p className="mt-[-0.5rem]">&#8964;</p>
          </div>

          <div
            onClick={() => {
              setlocation(!location);
            }}
            className="flex filter items-center px-[1rem] py-[0.2rem] mx-[1rem] rounded-[20px]"
          >
            <p className="mr-[0.5rem]">Location</p>
            <p className="mt-[-0.5rem]">&#8964;</p>
          </div>


          <p
            onClick={() => {
              setallProducts(true);
              setactiveProduct(!activeProduct);
              setgenderFilter(false)
              setLocationfilter(false)
              setgenderType("Gender")
            }}
            className={
              activeProduct
                ? "activefilter px-[1rem] py-[0.2rem] rounded-[20px]"
                : "filter px-[1rem] py-[0.2rem] rounded-[20px]"
            }
          >
            All Products
          </p>
        </div>

        {gender ? (<div className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-[1rem] bg-[#00cc00] text-white py-[0.5rem] rounded-[10px] w-[85%]">
              <p
                onClick={() => {
                  setgender(false);
                  setgenderType("Male");
                  setallProducts(false);
                  setactiveProduct(false)
                  setgenderFilter(true)
                }}
                className="w-[100%] text-center pb-[0.5rem]"
              >
                Male
              </p>
              <p
                onClick={() => {
                  setgender(false);
                  setgenderType("Female");
                  setallProducts(false);
                  setactiveProduct(false)
                  setgenderFilter(true)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Female
              </p>
              <p
                onClick={() => {
                  setgender(false);
                  setgenderType("Unisex");
                  setallProducts(false);
                  setactiveProduct(false)
                  setgenderFilter(true)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Unisex
              </p>
            </div>
        </div>) : ""}

        {location ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-[1rem] bg-[#00cc00] text-white py-[1rem] rounded-[10px] w-[85%]">
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Abia State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pb-[0.5rem]"
              >
                Abia State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Adamawa State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Adamawa State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("AkwaIbom State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Akwa Ibom State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Anambra State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Anambra State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Bauchi State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Bauchi State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Bayelsa State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Bayelsa State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Benue State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Benue State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Borno State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Borno State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Cross River State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Cross River State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Delta State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pt-[0.5rem]"
              >
                Delta State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Ebonyi State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Ebonyi State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Edo State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Edo State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Ekiti State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Ekiti State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Enugu State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Enugu State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Gombe State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pt-[0.5rem]"
              >
                Gombe State
              </p>

              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Imo State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Imo state
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Jigawa State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Jigawa State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Kaduna State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Kaduna State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Kano State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Kano State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Kastina State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pt-[0.5rem] py-[0.5rem]"
              >
                Kastina State
              </p>

              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Kebbi State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Kebbi State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Kogi State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Kogi State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Kwara State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] border-b-[2px] text-center py-[0.5rem]"
              >
                Kwara State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Lagos State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Lagos State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Nasarawa State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Nasarawa State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Niger State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pt-[0.5rem]"
              >
                Niger State
              </p>

              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Ondo State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Ondo State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Osun State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Osun State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Plateau State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center py-[0.5rem]"
              >
                Plateau State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Sokoto State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Sokoto State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Taraba State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pt-[0.5rem]"
              >
                Taraba State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Yobe State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Yobe State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Zamfara State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]"
              >
                Zamfara State
              </p>
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Abuja State");
                  setLocationfilter(true);
                  setallProducts(false);
                  setactiveProduct(false)
                }}
                className="w-[100%] text-center pt-[0.5rem]"
              >
                Abuja (FCT) State
              </p>
            </div>
          </div>
        ) : (
          ""
        )}

<div className="flex">
     {Locationfilter ? <p className="ml-[1rem] mr-[0.3rem]">{state} </p> : ""}{Locationfilter && genderFilter ? <p className="mx-[0.3rem]">/</p> : ""}{genderFilter ? <p className={genderFilter && !Locationfilter ? "ml-[1rem]" : ""}>{genderType}</p> : ""}
      </div> 

      <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">{loading ? <img alt="Logo" className="loader mb-[-1rem]" src={logo1}/> : ""}</p>
      <p className="w-[100%] text-center text-xl lg:w-[100vw]">{empty ? "No results found" : ""}</p>

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
           {allProducts && clothsList.map((post, index) => {
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
            );}
          )}

{genderFilter && clothsList.map((post, index) => {
           if (!dual && post.gender === genderType ){ return (
              <div
              key={index}
              onClick={() => {
                navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
              }}
              className="sm:w-[85vw] lg:w-[95%] max-w-4xl"
            >
                  <EcommerceCard post={post} />
                </div>
              ); }
            return ""
          })}

{Locationfilter && clothsList.map((post, index) => {
           if (post.location === state && !dual){ return (
              <div
              key={index}
              onClick={() => {
                navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
              }}
              className="sm:w-[85vw] lg:w-[95%] max-w-4xl"
            >
                  <EcommerceCard post={post} />
                </div>
              ); }
              return ""
          })}

{genderFilter && Locationfilter && clothsList.map((post, index) => {
           if (post.gender === genderType && post.location === state ){ return (
              <div
              key={index}
              onClick={() => {
                navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
              }}
              className="sm:w-[85vw] lg:w-[95%] max-w-4xl"
            >
                  <EcommerceCard post={post} />
                </div>
              ); }
              return ""
          })}


        </InfiniteScroll>
      </div>
    </div>
    <footer className="lg:pb-[0rem] z-30 pb-[4rem] lg:overflow-x-hidden  footer lg:fixed lg:bottom-0 pt-[1rem] lg:pt-[0.5rem] mt-[2rem] flex justify-between px-[2rem] lg:w-[100vw] items-center">
          <img alt="logo" className="w-[70px]" src={logo2}/>
            <p className="motto text-[1.5rem] text-white">Buy More ..... Pay Less</p>
          </footer>
   </div>
  );
}