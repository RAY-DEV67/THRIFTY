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
        <div>
          <p className="p-[1rem] border-y text-center mb-[1rem]">Saved Items</p>
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
                  >
                    <EcommerceCard post={post} />
                  </div>
                );
              }
              return ""
            })}
          </div>
        </div>
      ) : (
        <Profile />
      )}
    </div>
  );
}
