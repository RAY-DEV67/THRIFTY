import { getDoc,getDocs, collection, doc, addDoc, where, query, deleteDoc } from "firebase/firestore";
// import { Product, Id } from "../App";
import db from "../config/firebase";
import { useState, useEffect} from "react";
import { Topnav } from "../components/topnav";
import { Footer } from "../components/footer";
import womencloth from "../assets/images/women-cloth.png";
import { EcommerceCard } from "../components/ecommerceCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


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
      .limit(20)
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
    <div>
      <Topnav />
      <div className="flex justify-center relative">
      <img src={buyProduct?.images} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      <svg viewBox="0 0 24 24" onClick={() => {!user ? navigate("/profile") : hasProductBeenSaved ? removesave() : addsave()}} className="absolute top-2 left-[80%]" width="25px" fill={hasProductBeenSaved ? "#000000" : "none"} xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <p className="absolute top-2 left-[88%]">{saves.length}</p>
        </div>   


        <div className="slider">
                <div className="slide-track">
                  {/* SLIDES///// */}

                  <div className="slide softtools">
                  <img src={buyProduct?.images} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  {/* SAME SLIDES (DOUBLED)//////// */}


                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>

                  <div className="slide softtools">
                  <img src={womencloth} alt="cloths" className="rounded-[1rem] w-[90%] h-[90%]" />
      
                  </div>
                </div>
              </div>






      <div className="border-b text-center">
        <p>ThriftNg</p>
        <p>{buyProduct?.title}</p>
        <div className="flex justify-center">
          <svg
            fill="#000000"
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
          <p>{buyProduct?.price} NGN</p>
        </div>
      </div>

      <div>
        <h1>Product Details:</h1>
        <div>
          <p>Description:</p>
          <p> {buyProduct?.description}</p>
        </div>
        <div>
          <p>Condition:</p>
          <p> {buyProduct?.condition}</p>
        </div>
        <div>
          <p>Gender:</p>
          <p> {buyProduct?.gender}</p>
        </div>
        <div>
          <p>HandMade:</p>
          <p> {buyProduct?.handmade ? "yes" : "No"}</p>
        </div>
        <div>
          <p>Location:</p>
          <p> {buyProduct?.location}</p>
        </div>
        {buyProduct?.brand ? (
          <div>
            <p>Brand:</p>
            <p> {buyProduct?.brand}</p>
          </div>
        ) : (
          ""
        )}
        {buyProduct?.color ? (
          <div>
            <p>Color:</p>
            <p> {buyProduct?.color}</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="border-y">
        <p className="text-center">Contact Seller</p>
        <div className="flex flex-col gap-3">
        <a href={`tel:${buyProduct?.phone}`} className="mail border">Show Contact</a>
        <a href="tel:{+2348114291075}" className="mail border">Instagram</a>
        <a href="tel:{+2348114291075}" className="mail border">Twitter</a>
        </div>
      </div>


      <div className="flex">
      <img src={buyProduct?.vendorlogo} alt="cloths" className="rounded-full mx-[1rem] w-[30px] h-[30px]" />
       <p>{buyProduct?.vendor}</p>
      </div>

      <h2>Similar Ads</h2>

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
      <Footer />
    </div>
  );
}
