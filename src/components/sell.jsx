import { Profile } from "./profile";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

export function Sell() {
  const [user] = useAuthState(auth);
  const [categories, setcategories] = useState(false);
  const [location, setlocation] = useState(false);
  const [condition, setcondition] = useState(false);

  return (
    <div>
      {user ? (
        <div>
          <p className="text-center py-[1rem] ">Post An AD</p>
          <div className="flex flex-col items-center">
            <form className="w-[90%] bg-red-400 flex flex-col px-[1rem]">
              <div
                onClick={() => {
                  setcategories(!categories);
                }}
                className="flex mt-[2rem] px-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>Categories</p>
                <p>&#8964;</p>
              </div>

              {categories ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p className="w-[100%] text-center pb-[0.5rem]">
                    Men Clothes
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Women Clothes
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">Shoes</p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Hair
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">Accesories</p>
                </div>
              ) : (
                ""
              )}

              <div className="mt-[2rem]">
                <h2>Add photo</h2>
                <p className="text-[12px] mt-[1rem]">
                  First picture is the title picture
                </p>
                <input
                  className="mt-[1rem]"
                  multiple
                  type="file"
                  accept="image/png , image/jpg"
                />
                <p className="text-[12px] mt-[1rem]">
                  Each picture must not exceed 5MB
                </p>
                <p className="text-[12px]">
                  Supported formats are *.jpg and *jpeg
                </p>
              </div>

              <div
                onClick={() => {
                  setlocation(!location);
                }}
                className="flex px-[1rem] mt-[2rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>Location</p>
                <p>&#8964;</p>
              </div>
              {location ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p className="w-[100%] text-center pb-[0.5rem]">Abia State</p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Adamawa State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Akwa Ibom State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Anambra State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Bauchi State
                  </p>
                  <p className="border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Bayelsa State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Benue State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Borno State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Cross River State
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">
                    Delta State
                  </p>
                  <p className="border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Ebonyi State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Edo State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Ekiti State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Enugu State
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">
                    Gombe State
                  </p>

                  <p className="border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Imo state
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Jigawa State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Kaduna State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Kano State
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">
                    Kastina State
                  </p>

                  <p className="border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Kebbi State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Kogi State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Kwara State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Nasarawa State
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">
                    Niger State
                  </p>

                  <p className="border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Ondo State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Osun State
                  </p>
                  <p className="w-[100%] text-center py-[0.5rem]">
                    Plateau State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Sokoto State
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">
                    Taraba State
                  </p>
                  <p className="border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Yobe State
                  </p>
                  <p className="border-b-[2px] border-t-[2px] w-[100%] text-center py-[0.5rem]">
                    Zamfara State
                  </p>
                  <p className="w-[100%] text-center pt-[0.5rem]">
                    Abuja (FCT) State
                  </p>
                </div>
              ) : (
                ""
              )}

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="TITLE*"
              />
              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="BRAND*"
              />
              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem]"
                type="text"
                placeholder="COLOR*"
              />

              <div
                onClick={() => {
                  setcondition(!condition);
                }}
                className="flex px-[1rem] mt-[1rem] justify-between border py-[0.5rem] rounded-[10px] items-center bg-white"
              >
                <p>Condition</p>
                <p>&#8964;</p>
              </div>

              {condition ? (
                <div className="flex flex-col items-center mt-[1rem] bg-blue-300 py-[1rem] rounded-[10px]">
                  <p className="w-[100%] text-center pb-[0.5rem]">Brand New</p>
                  <p className="w-[100%] border-t-[1.5px] text-center pt-[0.5rem]">
                    Used
                  </p>
                </div>
              ) : (
                ""
              )}

              <h2 className="mt-[1rem]">Made in Nigeria</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                />
                <label for="MIN">YES</label>
              </div>

              <h2 className="mt-[1rem]">Handmade</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                />
                <label for="MIN">YES</label>
              </div>

              <h2 className="mt-[1rem]">Warranty</h2>
              <div>
                <input
                  type="checkbox"
                  id="MIN"
                  name="MIN"
                  className="mr-[0.5rem]"
                />
                <label for="MIN">YES</label>
              </div>

              <textarea
                rows="4"
                cols="50"
                className="mt-[1rem] p-[0.5rem] rounded-[10px]"
                placeholder="Description*"
              />

              <div className="relative">
                <input
                  className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[3rem] w-[100%]"
                  type="text"
                  placeholder="Price*"
                />
                <svg
                  fill="#000000"
                  width="20"
                  height="20"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496.262 496.262"
                  className="absolute top-[48%] left-[2%]"
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
              </div>

              <h3 className="mt-[1rem]">YOUR CONTACT DETAILS</h3>
              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem] w-[100%]"
                type="tel"
                placeholder="Phone Number*"
              />

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem] w-[100%]"
                type="text"
                placeholder="Instagram Link*"
              />

              <input
                className="mt-[1rem] py-[0.5rem] rounded-[10px] px-[1rem] w-[100%]"
                type="text"
                placeholder="Twitter Link*"
              />

              <h3>Promote your AD</h3>
              <p>Choose one of the following packages</p>

              <button className="text-center create-ad mt-[2rem] border py-[0.5rem] rounded-[10px] items-center bg-white">
                POST AD
              </button>
              <p className="text-[12px] mt-[0.5rem] mb-[2rem]">
                By Clicking on Post Ad, you accept the Terms of Use, Confirm
                that you will abide by the safety tips, and declare that this
                poisting does not include any prohibited items{" "}
              </p>
            </form>
          </div>
        </div>
      ) : (
        <Profile />
      )}
    </div>
  );
}
