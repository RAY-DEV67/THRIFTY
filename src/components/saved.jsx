import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo1 from "../assets/images/thriftlogo1.webp"
import { useEffect, useState, useContext } from "react";
import db from "../config/firebase";
import { EcommerceCard } from "./ecommerceCard";
import { useNavigate } from "react-router-dom";
import { SetProduct, SetId } from "../App";

export function Saved() {
  const setProducts = useContext(SetProduct);
  const setProductsId = useContext(SetId);

  const [user] = useAuthState(auth);
  const [saved, setsaved] = useState([]);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setloading(true)
    db.collection("Saved")
      .get()
      .then((collections) => {
        const cloths = collections.docs.map((cloths) => {
          return { ...cloths.data(), id: cloths.id };
        });
        setsaved(cloths);
        setTimeout(() => {
          setloading(false)
        }, 1000)
        console.log(cloths.length)
        if(cloths.length === 1){setempty(true)}
      });
  }, []);

  console.log(saved)

  return (
    <div>
      {user ? (
        <div className="md:absolute md:top-[13%] lg:left-[40%] md:w-[100vw] lg:w-[59vw]  md:z-[-1]">
          <p className="p-[1rem] border-y text-center mb-[1rem] contact">Saved Items</p>
          <div className="flex flex-wrap gap-3 justify-center">
          <p className="w-[100%] flex flex-col items-center loaderContainer">{loading ? <img alt="logo" className="loader mb-[-1rem]" src={logo1} /> : ""}</p>
          <p className="w-[100%] text-center font-bold">{empty && "YOU HAVE NO SAVED ITEMS"}</p>
            {saved?.map((post, index) => {
              if (post.userId === user.uid) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setProductsId(post.id);
                      setProducts("Top-Accessories");
                      navigate(`/ThriftNg/Buy/${post.category}/${post.postId}`);
                    }}
                    className="sm:w-[85vw] lg:w-[95%] max-w-4xl"
                  >
                    <EcommerceCard post={post} />
                  </div>
                );
              }
              return ""
            })}
          </div>
          <div className="hidden lg:block lg:rounded-[15px] lg:fixed lg:w-[38%] lg:left-5 lg:top-[13%] lg:bottom-[5%] lg:bg-white lg:z-10 lg:border lg:overflow-scroll">
            <Profile/>
          </div>
        </div>
      ) : (
        <Profile />
      )}
    </div>
  );
}
