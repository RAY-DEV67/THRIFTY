import bags from "../assets/images/bags.webp";
import store from "../assets/images/store.webp";
import hair from "../assets/images/hair.webp";
import sneakers from "../assets/images/sneakers.jpg";
import mencloth from "../assets/images/men-clothes.jpg";
import womencloth from "../assets/images/women-cloth.png";
import accessories from "../assets/images/accessories.png";

export function LandingPage() {
  return (
    <div>
      <div className="flex justify-between px-6 py-4">
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="style=linear">
              {" "}
              <g id="menu-strawberry">
                {" "}
                <path
                  id="vector"
                  d="M3 6H21"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  id="vector_2"
                  d="M5 12H19"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  id="vector_3"
                  d="M7 18H17"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
        <p>LOGO</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[90%]">
          <p className="text-2xl">Welcome</p>
          <p className="text-4xl my-2 font-bold">Thrift Shopper</p>
          <p>Buy More ..... Pay Less</p>
        </div>
      </div>
      <div className="flex flex-col items-center relative">
        <input
          type="text"
          placeholder="What are you looking for..."
          className="border w-[90%] my-[2rem] rounded-xl pl-[5rem] py-[0.5rem]"
        />
        <svg
          fill="#000000"
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          className="absolute left-[7%] top-[35%]"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z"></path>
          </g>
        </svg>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[90%] grid-cols-2 gap-x-4	 grid relative">
          <div className="relative">
            <img src={womencloth} alt="cloths" className="rounded-[1rem]" />
            <p className="absolute top-[62%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[100%] text-[12px]">
              Women Clothing
            </p>
          </div>

          <div>
            <img src={mencloth} alt="cloths" className="rounded-[1rem]" />
            <p className="absolute top-[82%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[48%] text-[12px]">
              Men's Clothing
            </p>
          </div>

          <div>
            <img
              src={sneakers}
              alt="cloths"
              className="absolute w-[48%] top-[83%] rounded-[1rem]"
            />
            <p className="absolute top-[132%] tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[48%] text-[12px]">
              Sneakers
            </p>
          </div>

          <div>
            <img
              src={hair}
              alt="cloths"
              className="absolute w-[51%] left-[-0.35rem] rounded-[1rem] top-[152%]"
            />
            <p className="absolute top-[207%] left-0 tag rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[48%] text-[12px] ">
              Hair
            </p>
          </div>

          <div>
            <img
              src={bags}
              alt="cloths"
              className="absolute w-[48%] top-[175%] left-[52%] rounded-[1rem]"
            />
            <p className="absolute top-[227%] tag left-[52%] rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[48%] text-[12px]">
              Bags
            </p>
          </div>

          <div>
            <img
              src={accessories}
              alt="cloths"
              className="absolute w-[48%] top-[104%] left-[52%] rounded-[1rem]"
            />
            <p className="absolute top-[154%] tag left-[52%] rounded-[0.5rem] px-[1rem] py-[0.5rem] w-[48%] text-[12px]">
              Accessories
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[100%]">
        <h2 className="text-center heading p-2 mb-[2rem]">OFFICIAL STORES</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap w-[95%] ml-2 gap-2">
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
          </div>
        </div>
      </div>

      <div>
      <h2 className="text-center p-2 mt-[2rem] mb-[2rem] heading">TOP PRODUCTS</h2>
      <div className="flex flex-col items-center">
      <div className="flex flex-wrap w-[95%] ml-2 gap-2">
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
            <img src={store} alt="store" className="w-[48%]" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="pb-[5rem] pt-[2rem] mt-[2rem] flex justify-between px-[2rem] bg-red-300">
        <p>LOGO</p>
        <p>BUY MORE PAY LESS!!</p>
      </footer>
    </div>
  );
}