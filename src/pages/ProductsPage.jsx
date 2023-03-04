import { useState } from "react";
import { EcommerceCard } from "../components/ecommerceCard";
import db from "../config/firebase";
import { Search } from "../components/search";
import InfiniteScroll from "react-infinite-scroll-component";
// import { Footer } from "../components/footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/images/thriftlogo1.webp";
import { Sidebar } from "../components/sidebar";

export function ProductsPage() {
  const { product } = useParams();
  const navigate = useNavigate();

  const [clothsList, setclothsList] = useState([]);
  const [under5list, setunder5list] = useState([]);
  const [location2list, setlocation2list] = useState([]);
  const [locationlist, setlocationlist] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [under5, setunder5] = useState(false);
  const [allProducts, setallProducts] = useState(true);
  const [activeThrift, setactiveThrift] = useState(false);
  const [location, setlocation] = useState(false);
  const [state, setstate] = useState("Location");
  const [Locationfilter, setLocationfilter] = useState(false);
  const [dual, setdual] = useState(false);
  const [empty, setempty] = useState(false);
  const [activeProduct, setactiveProduct] = useState(true);

  console.log(isEmpty);
  console.log(loading);

  console.log(locationlist);

  useEffect(() => {
    setloading(true);
    setempty(false)
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
        setloading(false);
        if(cloths.length === 0){
          setempty(true)
        }
      });
  }, [product, allProducts]);

  const fetchmore = () => {
    setempty(false)
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
          // if(newcloths.length === 0){
          //   setempty(true)
          // }
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };

  // FOR THRIFT//////////

  useEffect(() => {
    setloading(true);
    setempty(false)
    db.collection("Products")
      .where("category", "==", product)
      .where("under5k", "==", true)
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setunder5list(cloths);
        setlastDocuments(lastDoc);
        setloading(false);
        if(cloths.length === 0 && under5){
          setempty(true)
        }
      });
  }, [under5, product]);

  console.log(empty)

  const fetchmore2 = () => {
    db.collection("Products")
    setempty(false)
      .where("category", "==", product)
      .where("under5", "==", true)
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
          setunder5list((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
          // if(newcloths.length === 0){
          //   setempty(true)
          // }
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };

  // FOR THRIFT AND LOCATION//////////

  useEffect(() => {
    setloading(true);
    setempty(false)
    db.collection("Products")
      .where("category", "==", product)
      .where("under5", "==", true)
      .where("location", "==", state)
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setlocationlist(cloths);
        setlastDocuments(lastDoc);
        setloading(false);
        if (under5 && Locationfilter) {
          setdual(true);
        } else {
          setdual(false);
        }
      });
  }, [under5, state, product,Locationfilter]);

  const fetchmore3 = () => {
    db.collection("Products")
      .where("category", "==", product)
      .where("under5", "==", true)
      .where("location", "==", state)
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
          setlocationlist((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };

  // FOR LOCATION//////////

  useEffect(() => {
    setloading(true);
    setempty(false)
    db.collection("Products")
      .where("category", "==", product)
      .where("location", "==", state)
      .limit(10)
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        const lastDoc = collections.docs[collections.docs.length - 1];
        setlocation2list(cloths);
        setlastDocuments(lastDoc);
        setloading(false);
        // if(cloths.length === 0 && state !== "Location"){
        //   setempty(true)
        // }
      });
  }, [state, product]);

  const fetchmore4 = () => {
    db.collection("Products")
      .where("category", "==", product)
      .where("location", "==", state)
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
          setlocation2list((clothsList) => [...clothsList, ...newcloths]);
          setlastDocuments(lastDoc);
        } else {
          setisEmpty(true);
          sethasmore(false);
        }
        // console.log(clothsList)
      });
  };

  console.log(allProducts);

  return (
    <div>
      <div className="lg:block hidden">
        <Sidebar />
      </div>
      <div className="lg:absolute lg:top-[13%] lg:left-[40%] lg:z-[-1]">
        <Search />
        <div className="-mt-[1rem] mx-[1rem] mb-[1rem] flex">
          <p
            onClick={() => {
              setallProducts(false);
              setunder5(!under5);
              setactiveThrift(!activeThrift);
              setactiveProduct(false)
            }}
            className={
              activeThrift
                ? "activefilter px-[1rem] py-[0.2rem] rounded-[20px]"
                : "filter px-[1rem] py-[0.2rem] rounded-[20px]"
            }
          >
            Under 5k
          </p>

          <div
            onClick={() => {
              setlocation(!location);
            }}
            className="flex filter items-center px-[1rem] py-[0.2rem] mx-[1rem] rounded-[20px]"
          >
            <p className="mr-[0.5rem]">{state}</p>
            <p className="mt-[-0.5rem]">&#8964;</p>
          </div>


          <p
            onClick={() => {
              setallProducts(true);
              setunder5(false);
              setactiveProduct(!activeProduct);
              setactiveThrift(false)
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

        {location ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-[1rem] bg-[#00cc00] text-white py-[1rem] rounded-[10px] w-[85%]">
              <p
                onClick={() => {
                  setlocation(false);
                  setstate("Abia State");
                  setLocationfilter(true);
                  setallProducts(false);
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

        <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
          {loading ? (
            <img alt="Logo" className="loader mb-[-1rem]" src={logo1} />
          ) : (
            ""
          )}
        </p>

        <p className="w-[100%] text-center text-2xl">{empty ? "No Results Found!!" : ""}</p>

        <div className="mb-[5rem]">
          <InfiniteScroll
            dataLength={clothsList.length}
            hasMore={hasmore}
            loader={
              <p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer">
                {<img alt="Logo" className="loader mb-[-1rem]" src={logo1} />}
              </p>
            }
            next={
              allProducts
                ? fetchmore
                : under5
                ? fetchmore2
                : Locationfilter && under5
                ? fetchmore3
                : Locationfilter
                ? fetchmore4
                : ""
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            className="pb-[5rem] flex flex-wrap gap-3 justify-center"
          >
            {allProducts &&
              clothsList.map((post, index) => {
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

            {under5 &&
              under5list.map((post, index) => {
                if (!dual)
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
                  return ""
              })}
            {under5
              ? Locationfilter &&
                location2list.map((post, index) => {
                  // if(!location2list){<p>No Result</p>}
                  if (post.under5k && post.location === state) {
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
                  }
                  return ""
                })
              : Locationfilter &&
                location2list.map((post, index) => {
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
    </div>
  );
}
