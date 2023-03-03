import { getDoc,getDocs, collection, doc, addDoc, where, query, deleteDoc } from "firebase/firestore";
// import { Product, Id } from "../App";
import db from "../config/firebase";
import { useState, useEffect} from "react";
import { Topnav } from "../components/topnav";
import { Footer } from "../components/footer";
import { EcommerceCard } from "../components/ecommerceCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo1 from "../assets/images/thriftlogo1.webp"


export function BuyProduct() {
  const [user] = useAuthState(auth);
  const {id} = useParams()
  const {product} = useParams()
  const navigate = useNavigate();

 
  const [buyProduct, setbuyProduct] = useState(null);
  const [clothsList, setclothsList] = useState([]);
  const [lastDocuments, setlastDocuments] = useState(null);
  const [isEmpty, setisEmpty] = useState(false);
  const [hasmore, sethasmore] = useState(true);
  const [loading, setloading] = useState(false);
  const [saves, setsaves] = useState([]);
  const [error, seterror] = useState();

  console.log(isEmpty)
  console.log(loading)



  useEffect(() => {
    const topRef = doc(db, "Products", id);
    getDoc(topRef).then((doc) => {
      setbuyProduct(doc.data());
    });
  }, [id]);

  useEffect(() => {
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
      });
   } catch (err) {
    seterror(err)
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
            return cloths.data();
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
    }
      catch (err) {
        seterror(err)
        console.log(err)
       }

  };

  
  const docRef = collection(db, "Saved")

useEffect(() => {
  db.collection("Saved")
  .where("postId", "==" , id)
    .limit(10)
    .get()
    .then((collections) => {
      const cloths = collections.docs.map((cloths) => {
        return { userId: cloths.data().userId , saveId: cloths.id };
      });
      setsaves(cloths);
    });
}, [id]);

const hasProductBeenSaved = saves.find((save) => 
  save.userId === user.uid
)

  const addsave = async () => {
 try{
  const newDoc = await addDoc(docRef, {
    userId: user?.uid,
    postId: id,
    images: buyProduct?.images,
    title: buyProduct?.title,
    price: buyProduct?.price,
    location: buyProduct?.location,
    gender: buyProduct?.gender,
    phone: buyProduct?.phone,
    instagram: buyProduct?.instagram,
    twitter: buyProduct?.twitter,
    category: buyProduct?.category
  });
  if(user){
    setsaves((prev) => prev ? [...prev, {userId: user.uid, likeId: newDoc.id}] : [{userId: user.uid, likeId: newDoc.id}])
    console.log(saves)
  }
 } catch (err) {
  console.log(err)
 }
}

const removesave = async () => {
  try{
    const saveToDeleteQuery = query(docRef, where("postId", "==" , id), where("userId", "==", user.uid))

    const saveToDeleteData = await getDocs(saveToDeleteQuery)
    const saveToDelete = doc(db,"Saved", saveToDeleteData?.docs[0].id )
   await deleteDoc(saveToDelete);
   if(user){
     setsaves((prev) => prev.filter((like) => like.saveId === saveToDeleteData?.docs[0].id ))
     console.log(saves)
   }
  } catch (err) {
   console.log(err)
  }
 }



  return (
    <div className="lg:mt-[7rem] productfont">
      <Topnav />
      <div className="flex justify-center relative mt-[1rem] lg:-z-10">
      <img src={buyProduct?.images} alt="Product" className="rounded-[1rem] w-[90%] h-[90%]" />
      <svg viewBox="0 0 24 24" onClick={() => {!user ? navigate("/profile") : hasProductBeenSaved ? removesave() : addsave()}} className="absolute top-2 left-[80%]" width="25px" fill={hasProductBeenSaved ? "#000000" : "none"} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <p className="absolute top-2 left-[88%]">{saves.length}</p>
        </div>   


        <div className="slider lg:-z-10">
                <div className="slide-track">
                  {/* SLIDES///// */}

                  <div className="slide softtools">
                  <img src={buyProduct?.images} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images2} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images3} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images4} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images5} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  {/* SAME SLIDES (DOUBLED)//////// */}


                  <div className="slide softtools">
                  <img src={buyProduct?.images} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images2} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images3} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images4} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={buyProduct?.images5} alt="Product" className="lg:h-[180px] buyProduct rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>
                </div>
              </div>






      <div className="buyProductBorder mb-[1rem] pb-[1rem] text-center">
        <p className="text-2xl mb-[1rem]">THRIFT NG</p>
        <p className="text-xl font-bold mb-[0.5rem]">{buyProduct?.title}</p>
        <div className="flex justify-center">
          <svg
            fill="#00cc00"
            width="20"
            height="20"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496.262 496.262"
            className=""
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M477.832,274.28h-67.743v-65.106h67.743c10.179,0,18.43-8.243,18.43-18.424c0-10.182-8.251-18.43-18.43-18.43h-67.743 V81.982c0-13.187-2.606-22.866-7.743-28.762c-4.882-5.609-11.301-8.219-20.19-8.219c-8.482,0-14.659,2.592-19.447,8.166 c-5.077,5.902-7.654,15.599-7.654,28.821v90.343H227.627l-54.181-81.988c-4.637-7.317-8.997-14.171-13.231-20.75 c-3.812-5.925-7.53-10.749-11.042-14.351c-3.109-3.189-6.652-5.657-10.796-7.554c-3.91-1.785-8.881-2.681-14.762-2.681 c-7.501,0-14.31,2.055-20.83,6.277c-6.452,4.176-10.912,9.339-13.636,15.785c-2.391,6.126-3.656,15.513-3.656,27.63v77.626h-67.07 C8.246,172.326,0,180.574,0,190.755c0,10.181,8.246,18.424,18.424,18.424h67.07v65.113h-67.07C8.246,274.292,0,282.538,0,292.722 C0,302.9,8.246,311.14,18.424,311.14h67.07v103.143c0,12.797,2.689,22.378,8.015,28.466c5.065,5.805,11.487,8.5,20.208,8.5 c8.414,0,14.786-2.707,20.07-8.523c5.411-5.958,8.148-15.533,8.148-28.442V311.14h115.308l62.399,95.683 c4.339,6.325,8.819,12.709,13.287,18.969c4.031,5.621,8.429,10.574,13.069,14.711c4.179,3.742,8.659,6.484,13.316,8.157 c4.794,1.726,10.397,2.601,16.615,2.601c16.875,0,34.158-5.166,34.158-43.479V311.14h67.743c10.179,0,18.43-8.252,18.43-18.43 C496.262,282.532,488.011,274.28,477.832,274.28z M355.054,209.173v65.106h-60.041l-43.021-65.106H355.054z M141.936,134.364 l24.76,37.956h-24.76V134.364z M141.936,274.28v-65.106h48.802l42.466,65.106H141.936z M355.054,365.153l-35.683-54.013h35.683 V365.153z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="ml-[0.2rem] text-[#00cc00]"> {buyProduct?.price} NGN</p>
        </div>
      </div>

      <div className="ml-[1rem]">
        <h1 className="text-2xl mb-[2rem]">Product Details:</h1>
        <div className="mb-[1rem]">
          <p className="font-extrabold mb-[0.5rem]">Description:</p>
          <p> {buyProduct?.description}</p>
        </div>
        <div className="mb-[1rem]">
          <p className="font-extrabold mb-[0.5rem]">Condition:</p>
          <p> {buyProduct?.condition}</p>
        </div>
        <div className="mb-[1rem]">
          <p className="font-extrabold mb-[0.5rem]">Gender:</p>
          <p> {buyProduct?.gender}</p>
        </div>
        <div className="mb-[1rem]">
          <p className="font-extrabold mb-[0.5rem]">HandMade:</p>
          <p> {buyProduct?.handmade ? "yes" : "No"}</p>
        </div>
        <div className="mb-[1rem]">
          <p className="font-extrabold mb-[0.5rem]">Location:</p>
          <p> {buyProduct?.location}</p>
        </div>
        {buyProduct?.brand ? (
          <div className="mb-[1rem]">
            <p className="font-extrabold mb-[0.5rem]">Brand:</p>
            <p> {buyProduct?.brand}</p>
          </div>
        ) : (
          ""
        )}
        {buyProduct?.color ? (
          <div className="mb-[1rem]">
            <p className="font-extrabold mb-[0.5rem]">Color:</p>
            <p> {buyProduct?.color}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="border-y bg-[#00cc00] rounded-[20px] p-[1rem]">
        <p className="text-center text-xl text-white">Contact Seller</p>
        <div className="flex flex-col gap-3 mt-[1rem]">
        <div className="border w-[40%] flex justify-center rounded-[20px]">
        <a href={`tel:${buyProduct?.phone}`} className="mail mr-[0.5rem] py-[0.3rem] text-white">Show Contact</a>
        <svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#000000"></path></g></svg>
        </div>
        <div className="border w-[30%] flex justify-center rounded-[20px]">
        <a href={buyProduct?.instagram} className="mail mr-[0.5rem] py-[0.3rem] text-white">Instagram</a>
        <svg width="20px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-width="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"></path><circle cx="96" cy="96" r="30" stroke="#000000" stroke-width="12"></circle><circle cx="135" cy="57" r="9" fill="#000000"></circle></g></svg>
        </div>
        <div className="border w-[30%] flex justify-center rounded-[20px]">
        <a href={buyProduct?.twitter} className="mail mr-[0.5rem] py-[0.3rem] text-white">Twitter</a>
        <svg width="20px" fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1643.825 518.606c-14.457 11.294-22.588 28.8-21.685 47.096.565 16.377 1.017 32.753 1.017 49.355 0 530.372-373.497 1079.153-998.513 1079.153-122.203 0-242.598-24.282-355.765-71.153 136.433-22.588 266.428-82.447 374.965-173.816 17.957-15.247 24.62-39.868 16.828-62.005-7.793-22.136-28.574-37.157-52.179-37.722-105.374-2.146-200.81-62.682-256.376-157.214 38.06-1.13 79.059-7.116 109.779-16.038 24.847-7.228 41.562-30.381 40.771-56.132-.903-25.863-19.2-47.774-44.499-53.308-112.15-24.282-194.71-116.781-222.607-243.84 32.076 6.438 62.344 8.47 79.06 8.922 24.62 2.711 47.322-14.456 55.453-38.06 8.02-23.492-.226-49.582-20.442-64.151-78.042-56.245-161.619-161.167-161.619-286.42 0-30.832 3.84-61.326 11.181-90.804 195.163 217.186 461.478 348.31 743.83 363.558 18.975 1.016 34.674-6.438 46.08-19.765 11.408-13.327 15.926-31.398 12.312-48.565-5.648-25.637-8.471-52.178-8.471-79.058 0-188.951 141.063-342.664 314.428-342.664 87.19 0 168.283 37.835 228.141 106.73 13.327 15.36 34.334 22.475 54.212 18.183 28.687-6.099 56.922-13.779 84.706-23.153-16.49 16.715-34.673 31.624-54.438 44.386-22.25 14.343-31.51 42.014-22.475 66.861s34.56 39.868 60.31 36.593c14.683-1.92 29.252-4.179 43.709-7.002-18.297 17.731-37.497 34.447-57.713 50.033m261.685-199.68c-16.716-18.636-43.596-23.83-66.41-13.214-4.066 1.92-8.132 3.84-12.31 5.76 17.054-30.269 30.946-62.683 40.997-96.678 6.777-22.588-1.242-46.984-20.103-61.214-18.974-14.118-44.5-15.247-64.49-2.485-58.277 37.384-120.96 64.828-186.466 82.108-78.268-76.8-181.948-120.17-289.355-120.17-235.595 0-427.37 204.424-427.37 455.606 0 9.487.227 18.974.791 28.348C626 564.008 390.517 424.977 226.64 208.469c-11.52-15.247-30.155-23.04-49.242-22.136-19.2 1.468-36.367 12.536-45.516 29.477-37.157 68.894-56.809 147.614-56.809 227.464 0 86.626 28.687 165.007 70.25 230.739-19.426 9.035-32.98 28.574-32.98 51.388v5.195c0 139.821 49.808 261.91 133.497 344.47-9.035 2.937-17.28 8.246-23.943 15.36a56.566 56.566 0 0 0-12.537 54.326c40.772 136.997 137.788 242.145 258.41 289.807-122.88 69.571-268.688 97.129-404.443 80.753-26.541-3.953-50.485 11.858-59.633 36.028-9.261 24.282-.677 51.84 20.781 66.522 179.69 123.784 387.276 189.29 600.17 189.29 695.717 0 1111.454-606.156 1111.454-1192.095 0-8.583-.113-17.054-.339-25.524 68.555-57.149 127.51-125.365 175.737-203.069 13.214-21.345 10.842-48.903-5.986-67.538" fill-rule="evenodd"></path> </g></svg>
        </div>
        </div>
        <div className="flex mt-[1rem]"  onClick={() => {
                navigate(`/${buyProduct?.vendor}`);
              }}>
      <img src={buyProduct?.vendorlogo} alt="cloths" className="rounded-full mx-[1rem] w-[30px] h-[30px]" />
       <p className="text-white">{buyProduct?.vendor}</p>
      </div>
      </div>


  

      <h2 className="mt-[1.5rem] mb-[0.5rem] text-xl ml-[1rem]">Similar Ads</h2>

      <InfiniteScroll
          dataLength={clothsList.length}
          hasMore={hasmore}
          loader={<p className="w-[100%] flex flex-col items-center my-[1rem] loaderContainer"><img className="loader mb-[-1rem]" alt="Logo" src={logo1}/></p>
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
          {clothsList.map((post, index) => {
            return (
              <div
              key={index}
              onClick={() => {
                navigate(`/ThriftNg/Buy/${post.category}/${post.id}`);
              }}
              className="sm:w-[85vw] lg:w-[90%]"
            >
                <EcommerceCard post={post} />
              </div>
            );
          })}
        </InfiniteScroll>
      <Footer />
    </div>
  );
}
