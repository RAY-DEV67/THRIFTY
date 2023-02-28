import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/thriftlogo1.webp"

export function Topnav() {
  const [showNav, setshowNav] = useState(false);
  const [Stores, setStores] = useState(false);
  const [accessoriesStores, setaccessoriesStores] = useState(false);
  const [hairStores, sethairStores] = useState(false);
  const [shoesStores, setshoesStores] = useState(false);
  const [bagsStores, setbagsStores] = useState(false);
  const [skinCareStores, setskinCareStores] = useState(false);
  const [pastriesStores, setpastriesStores] = useState(false);
  const [fragranceStores, setfragranceStores] = useState(false);

  const setCloths = () => {
    setStores(!Stores)
  }
  const setaccessories = () => {
    setaccessoriesStores(!accessoriesStores)
  }
  const sethair = () => {
    sethairStores(!hairStores)
  }
  const setshoes = () => {
    setshoesStores(!shoesStores)
  }
  const setbags = () => {
    setbagsStores(!bagsStores)
  }
  const setskinCare = () => {
    setskinCareStores(!skinCareStores)
  }
  const setpastries = () => {
    setpastriesStores(!pastriesStores)
  }
  const setfragrance = () => {
    setfragranceStores(!fragranceStores)
  }

  return (
    <div>
      <div className="flex justify-between px-6 py-4 topnav">
        <div
          onClick={() => {
            setshowNav(true);
          }}
        >
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
        </div>
        <p>LOGO</p>
      </div>
      {showNav ? (
        <div
          className="overlay z-10"
          onClick={() => {
            setshowNav(false);
          }}
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          showNav
            ? "w-[70%] bg-white mobile-nav h-[100vh] fixed top-0 z-[39] showNav translate-x-[0%]"
            : "w-[70%] fixed top-0 z-[39] h-[100vh] showNav translate-x-[-100%]"
        }
      >
        <div className="flex categories justify-between py-[1rem]">
          <svg viewBox="0 0 24 24" className="mx-[1rem]"
            onClick={() => {
              setshowNav(false);
            }} width="20px" height="20px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.16998 14.83L14.83 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.83 14.83L9.16998 9.17004" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <p className="mx-[1rem]">Logo</p>
        </div>
        <div className="ml-[1rem] categories">
          <p className="mt-[1rem] font-bold categories pb-[1rem]">Our Categories</p>
          <div className="my-[1rem] flex">
            <svg
              viewBox="0 -11.71 113.169 113.169"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              className="mr-[1rem]"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g
                  id="Group_13"
                  data-name="Group 13"
                  transform="translate(-34.813 -756.63)"
                >
                  {" "}
                  <path
                    id="Path_57"
                    data-name="Path 57"
                    d="M59.058,806.808a1.611,1.611,0,0,1-.743-.181L35.57,794.662a1.393,1.393,0,0,1-.723-.909,1.294,1.294,0,0,1,.252-1.1l24.327-30.915a1.578,1.578,0,0,1,1.868-.433,1.349,1.349,0,0,1,.79,1.62l-1.526,4.985v37.519a1.363,1.363,0,0,1-.747,1.195A1.591,1.591,0,0,1,59.058,806.808ZM38.509,793.025l19.049,10.02V768.818Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="Path_58"
                    data-name="Path 58"
                    d="M123.737,806.808a1.591,1.591,0,0,1-.753-.187,1.363,1.363,0,0,1-.747-1.195V767.907l-1.525-4.985a1.348,1.348,0,0,1,.79-1.62,1.581,1.581,0,0,1,1.868.433L147.7,792.65a1.294,1.294,0,0,1,.252,1.1,1.393,1.393,0,0,1-.723.909L124.48,806.627A1.608,1.608,0,0,1,123.737,806.808Zm1.5-37.991v34.228l19.049-10.02Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="Path_59"
                    data-name="Path 59"
                    d="M91.308,845.463a1.445,1.445,0,0,1-1.5-1.382V773.474a1.505,1.505,0,0,1,3,0v70.607A1.445,1.445,0,0,1,91.308,845.463Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="Path_60"
                    data-name="Path 60"
                    d="M117.035,801.842H99.7a1.192,1.192,0,0,1-1.237-1.14V790.679a1.191,1.191,0,0,1,1.237-1.14h17.333a1.191,1.191,0,0,1,1.236,1.14V800.7A1.192,1.192,0,0,1,117.035,801.842Zm-16.1-2.28H115.8v-7.743h-14.86Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="Path_61"
                    data-name="Path 61"
                    d="M113.847,757.254a1.562,1.562,0,0,0-1.1-.443h-4.378a14.6,14.6,0,0,1-.28,2.765h3.039L109.409,780.4l-17.451-7.726a1.618,1.618,0,0,0-1.308,0L73.5,780.4l-1.991-20.819h3.02a14.6,14.6,0,0,1-.279-2.765H69.871a1.562,1.562,0,0,0-1.107.449,1.312,1.312,0,0,0-.387,1.055L70.7,782.641a1.379,1.379,0,0,0,.756,1.082,1.609,1.609,0,0,0,1.4.039l18.46-8.309,18.774,8.313a1.617,1.617,0,0,0,1.4-.049,1.379,1.379,0,0,0,.746-1.093l2.009-24.326A1.322,1.322,0,0,0,113.847,757.254Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="Path_62"
                    data-name="Path 62"
                    d="M106.844,756.811c-.257,7.7-7.118,13.9-15.536,13.9s-15.278-6.2-15.535-13.9h-3c.258,9.227,8.464,16.663,18.535,16.663s18.278-7.436,18.536-16.663Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    id="Path_63"
                    data-name="Path 63"
                    d="M124.6,767.716c0-6.258-5.06-11.086-11.849-11.086H69.871c-6.789,0-12.275,4.828-12.275,11.086v77.49c0,.172.02.34.028.511v.663h66.947v-.661c.007-.171.025-.34.025-.513ZM69.871,759.63h42.876c5.134,0,8.849,3.353,8.849,8.086V843.38h-61V767.716C60.6,762.983,64.736,759.63,69.871,759.63Z"
                    fill="#000000"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Category/Cloths/Male">
            <p>Men Clothing</p>
            </Link>
          </div>
          <div className="mb-[1rem] flex">
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              className="mr-[1rem]"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 297.857 297.857"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M247.116,50.68l-5.156-7.169c-0.158-8.142-2.77-16.734-8.29-24.386c-6.39-8.881-19.699-18.16-32.468-19.073 c-0.288-0.016-4.986-0.033-12.237-0.049c-2.469-0.005-4.587,1.733-5.07,4.155c-3.271,16.403-17.605,28.795-34.97,28.795 c-17.366,0-31.709-12.392-34.973-28.796c-0.481-2.417-2.604-4.161-5.068-4.157c-7.196,0.013-11.875,0.037-12.237,0.052 c-12.74,0.91-26.065,10.175-32.468,19.073c-5.509,7.651-8.132,16.244-8.289,24.386l-5.146,7.169c-0.806,1.1-1.139,2.485-0.913,3.84 c0.225,1.366,0.972,2.563,2.082,3.369l31.025,22.314c2.308,1.679,5.538,1.159,7.209-1.159l4.704-6.551 c5.659,14.137,8.122,29.256,7.271,44.275c-12.198,25.747-20.33,60.831-20.33,99.506c0,15.275,9.307,51.939,16.072,75.721 c0.986,3.466,4.153,5.863,7.756,5.863h86.612c3.608,0,6.769-2.392,7.756-5.862c6.767-23.782,16.082-60.445,16.082-75.721 c0-38.647-8.121-73.709-20.302-99.451c-0.859-15.031,1.599-30.16,7.252-44.3l4.694,6.521c1.669,2.318,4.891,2.838,7.199,1.159 l31.034-22.314c1.11-0.805,1.857-2.003,2.083-3.369C248.246,53.165,247.921,51.781,247.116,50.68z"></path>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Category/Cloths/Female">
            <p>Women Clothing</p>
            </Link>
          </div>
          <div className="flex">
            <svg
              viewBox="0 0 24 24"
              height="20px"
              width="20px"
              className="mr-[1rem]"
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
                <path
                  d="M16 16.4722V20C16 21.1045 15.1046 22 14 22H10C8.89543 22 8 21.1045 8 20V16.4722"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M8 7.52779V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V7.52779"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M14 12H12V10"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Accessories">
            <p>Accessories</p>
            </Link>
          </div>
          <div className="my-[1rem] flex">
            <svg
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="20px"
              width="20px"
              className="mr-[1rem]"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>hair_fill</title>{" "}
                <g
                  id="页面-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Part"
                    transform="translate(-336.000000, -48.000000)"
                    fill-rule="nonzero"
                  >
                    {" "}
                    <g
                      id="hair_fill"
                      transform="translate(336.000000, 48.000000)"
                    >
                      {" "}
                      <path
                        d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                        id="MingCute"
                        fill-rule="nonzero"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M12,3 C7.02944,3 3,7.02944 3,12 L3,18 C3,19.6569 4.34315,21 6,21 L7.38197,21 C8.13951,21 8.83204,20.572 9.17082,19.8944 L9.34564,19.5448 C9.03131,19.3254 8.72677,19.0709 8.44209,18.7842 C7.34335,17.6778 6.5,16.0546 6.5,14 C6.5,13.265 6.62409,12.5336 6.84885,11.8426 C6.94857,11.536 7.22583,11.5 7.5,11.5 C9.19063,11.5 10.6854,10.6614 11.5912,9.3752 C11.6848,9.24221 11.8373,9.16308 12,9.16309 C12.1626,9.16309 12.3151,9.24221 12.4088,9.37521 C13.3145,10.6614 14.8093,11.5 16.5,11.5 C16.7742,11.5 17.0515,11.536 17.1512,11.8426 C17.3759,12.5337 17.5,13.265 17.5,14 C17.5,16.0546 16.6567,17.6778 15.5579,18.7842 C15.2732,19.0709 14.9687,19.3254 14.6544,19.5448 L14.8292,19.8944 C15.168,20.572 15.8605,21 16.618,21 L18,21 C19.6569,21 21,19.6569 21,18 L21,12 C21,7.02944 16.9706,3 12,3 Z"
                        id="路径"
                        fill="#000000"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Hair">
            <p>Hair</p>
            </Link>
          </div>
          <div className="flex">
            <svg
              height="20px"
              width="20px"
              className="mr-[1rem]"
              viewBox="0 -18.69 62.062 62.062"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Shoes" transform="translate(-330.208 -493.463)">
                  {" "}
                  <g id="Group_21" data-name="Group 21">
                    {" "}
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M343.789,518.14c-8.9,0-13.344-1.752-13.579-5.356a1,1,0,0,1,.1-.507c.212-.432,2.468-4.291,15.885-6.487,5.6-.917,14.3-8.029,14.387-8.1.556-.441,5.4-4.225,8.176-4.225a2.256,2.256,0,0,1,1.81.766,3.421,3.421,0,0,1,.488,2.882c-.125.752.108,1.027.184,1.118a3.7,3.7,0,0,0,2.651.681c5.019,0,13.584-3.269,13.671-3.3a1,1,0,0,1,1.2.4c.193.306,4.729,7.576,3.182,15.753a1,1,0,0,1-.969.814c-.164,0-16.511.257-25.678,3.144A107.458,107.458,0,0,1,343.789,518.14Zm-11.532-5.164c.518,2.015,4.672,3.164,11.532,3.164a107.234,107.234,0,0,0,20.938-2.34c8.319-2.619,21.859-3.122,25.386-3.21.785-5.731-1.651-10.976-2.638-12.817-2.324.841-9.086,3.137-13.582,3.137-2.019,0-3.385-.454-4.177-1.389a3.228,3.228,0,0,1-.631-2.738c.167-1-.032-1.252-.041-1.263a.467.467,0,0,0-.284-.057c-1.572,0-5.078,2.319-6.919,3.781-.36.3-9.193,7.516-15.32,8.521C336,509.485,332.941,512.2,332.257,512.976Z"
                      fill="#231f20"
                    ></path>{" "}
                  </g>{" "}
                  <g id="Group_22" data-name="Group 22">
                    {" "}
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="M371.68,518.049a1,1,0,0,1-1-.992l-.028-3.774a1,1,0,0,1,.885-1l19.142-2.209a.993.993,0,0,1,.78.246,1,1,0,0,1,.335.746l0,5.969a1,1,0,0,1-1,1l-19.118.014Zm.979-3.883.014,1.882,17.124-.012,0-3.848Z"
                      fill="#231f20"
                    ></path>{" "}
                  </g>{" "}
                  <g id="Group_23" data-name="Group 23">
                    {" "}
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M349.37,517.277c-4.863-4.856-.121-12.211-.073-12.284l.836.549c-.044.067-4.341,6.749-.056,11.028Z"
                      fill="#231f20"
                    ></path>{" "}
                  </g>{" "}
                  <g id="Group_24" data-name="Group 24">
                    {" "}
                    <path
                      id="Path_17"
                      data-name="Path 17"
                      d="M360.315,504.334a.5.5,0,0,1-.353-.147l-2.585-2.58a.5.5,0,1,1,.706-.707l2.585,2.58a.5.5,0,0,1-.353.854Z"
                      fill="#231f20"
                    ></path>{" "}
                  </g>{" "}
                  <g id="Group_25" data-name="Group 25">
                    {" "}
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M362.793,502.779a.5.5,0,0,1-.354-.146l-2.584-2.582a.5.5,0,0,1,.707-.707l2.584,2.582a.5.5,0,0,1-.353.853Z"
                      fill="#231f20"
                    ></path>{" "}
                  </g>{" "}
                  <g id="Group_26" data-name="Group 26">
                    {" "}
                    <path
                      id="Path_19"
                      data-name="Path 19"
                      d="M365.163,501.158a.5.5,0,0,1-.354-.146l-2.584-2.582a.5.5,0,0,1,.707-.707l2.584,2.582a.5.5,0,0,1-.353.853Z"
                      fill="#231f20"
                    ></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Shoes">
            <p>Shoes</p>
            </Link>
          </div>
          <div className="my-[1rem] flex">
            <svg
              viewBox="0 0 1024 1024"
              height="20px"
              width="20px"
              fill="#000000"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M91.2 536c0-120.8 98.4-219.2 219.2-219.2h389.6c121.6 0 219.2 98.4 219.2 219.2v414.4c0 13.6-11.2 24-24 24H116c-13.6 0-24-11.2-24-24V536h-0.8z m-48.8 0v414.4c0 40 32.8 72.8 72.8 72.8H896c40.8 0 72.8-32.8 72.8-72.8V536c0-148-120-268-268-268H311.2c-148 0-268.8 120-268.8 268z"
                  fill=""
                ></path>
                <path
                  d="M286.4 463.2c0-13.6 11.2-24.8 24-24.8 13.6 0 24 11.2 24 24.8V536c0 13.6-11.2 24.8-24 24.8-13.6 0-24-11.2-24-24.8v-72.8z m-48.8 0V536c0 40.8 32.8 73.6 72.8 73.6 40.8 0 72.8-32.8 72.8-73.6v-72.8c0-40.8-32.8-73.6-72.8-73.6-40 0.8-72.8 33.6-72.8 73.6zM652 463.2c0-13.6 11.2-24.8 24-24.8 13.6 0 24 11.2 24 24.8V536c0 13.6-11.2 24.8-24 24.8-13.6 0-24-11.2-24-24.8v-72.8z m-48.8 0V536c0 40.8 32.8 73.6 72.8 73.6 40.8 0 72.8-32.8 72.8-73.6v-72.8c0-40.8-32.8-73.6-72.8-73.6-40 0.8-72.8 33.6-72.8 73.6z"
                  fill=""
                ></path>
                <path
                  d="M335.2 414.4V219.2c0-94.4 76.8-170.4 170.4-170.4 94.4 0 170.4 76.8 170.4 170.4v195.2h48.8V219.2C725.6 98.4 627.2 0 505.6 0 384.8 0 286.4 98.4 286.4 219.2v195.2h48.8zM84.8 853.6H912c16 0 29.6-11.2 29.6-24s-13.6-24-29.6-24H84.8c-16 0-29.6 11.2-29.6 24s12.8 24 29.6 24z"
                  fill=""
                ></path>
              </g>
            </svg>
            <Link to="/ThriftNg/Bags">
            <p className="ml-[1rem]">Bags</p>
            </Link>
          </div>
          <div className="flex">
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              className="mr-[1rem]"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
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
                  <g>
                    {" "}
                    <circle cx="255.994" cy="290.698" r="9.077"></circle>{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <circle cx="255.994" cy="258.235" r="9.077"></circle>{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M315.039,321.397c-1.676-4.136-6.066-6.498-10.445-5.633c-4.383,0.875-7.534,4.753-7.495,9.193 c0,2.935-2.389,5.324-5.324,5.324c-1.786,0-3.445-0.89-4.439-2.381c-0.038-0.057-0.075-0.113-0.114-0.167l-0.492-0.701 c-0.051-0.073-0.104-0.146-0.158-0.217c-4.656-6.215-12.064-9.775-19.834-9.496c-3.794,0.13-7.474,1.187-10.739,3.023 c-3.265-1.835-6.945-2.892-10.74-3.023c-7.754-0.276-15.175,3.282-19.831,9.496c-0.054,0.072-0.106,0.144-0.158,0.217 l-0.492,0.701c-0.039,0.056-0.077,0.112-0.115,0.167c-0.994,1.491-2.653,2.381-4.438,2.381c-2.936,0-5.325-2.389-5.325-5.295 c0.04-4.467-3.11-8.346-7.492-9.221c-4.373-0.871-8.768,1.492-10.448,5.63c-1.817,4.482-2.739,9.225-2.739,14.098 c0,10.079,3.99,19.562,11.237,26.702c7.248,7.142,16.769,11.019,26.878,10.84c8.79-0.13,17.116-3.326,23.664-8.863 c6.547,5.537,14.874,8.732,23.662,8.863c0.191,0.003,0.381,0.005,0.571,0.005c9.872,0,19.197-3.837,26.308-10.844 c7.246-7.138,11.237-16.621,11.237-26.702C317.778,330.622,316.856,325.88,315.039,321.397z M294.507,349.979 c-3.951,3.893-9.1,6.013-14.586,5.909c-6.763-0.101-13.025-3.549-16.75-9.223c-1.585-2.414-4.28-3.869-7.169-3.869 c-2.89,0-5.583,1.454-7.169,3.869c-3.725,5.675-9.987,9.124-16.75,9.223c-5.479,0.053-10.635-2.018-14.585-5.909 c-1.004-0.989-1.893-2.06-2.662-3.196c1.728,0.427,3.533,0.653,5.391,0.653c7.495,0,14.458-3.707,18.646-9.924l0.348-0.497 c1.314-1.697,3.284-2.634,5.449-2.553c1.822,0.064,3.562,0.925,4.776,2.363c1.629,1.931,4.028,3.046,6.555,3.046 s4.926-1.115,6.555-3.046c1.214-1.44,2.955-2.301,4.776-2.363c2.159-0.057,4.136,0.855,5.45,2.553l0.349,0.496 c4.19,6.217,11.151,9.925,18.647,9.925c1.858,0,3.664-0.226,5.391-0.653C296.4,347.918,295.511,348.989,294.507,349.979z"></path>{" "}
                  </g>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M336.041,275.887c4.736,0,8.576-3.839,8.576-8.576v-25.075c0-28.433-13.847-55.207-36.634-71.768V63.305 c0-4.737-3.84-8.576-8.576-8.576c-4.272,0-7.747-3.475-7.747-7.746V16.309C291.661,7.316,284.344,0,275.352,0h-39.264 c-8.993,0-16.309,7.316-16.309,16.309v30.674c0,4.271-3.475,7.746-7.747,7.746c-4.736,0-8.576,3.839-8.576,8.576V170.89 c-22.464,16.588-36.073,43.088-36.073,71.347v228.063c0,22.992,18.706,41.699,41.699,41.699h93.837 c22.992,0,41.698-18.706,41.698-41.699v-165.69c0-4.737-3.84-8.576-8.576-8.576s-8.576,3.839-8.576,8.576V470.3 c0,13.535-11.011,24.547-24.546,24.547h-93.837c-13.535,0-24.547-11.013-24.547-24.547V242.237 c0-24.798,12.991-47.925,34.046-60.896h74.825c21.044,12.962,34.059,36.148,34.059,60.896v25.075 C327.465,272.048,331.305,275.887,336.041,275.887z M290.832,164.189h-70.224V70.358c9.516-3.502,16.323-12.659,16.323-23.375 V17.152h37.578v29.831c0,10.716,6.807,19.873,16.323,23.375V164.189z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Skin-Care">
            <p>Skin Care</p>
            </Link>
          </div>
          <div className="my-[1rem] flex">
            <svg
              height="20px"
              width="20px"
              className="mr-[1rem]"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"> </style>{" "}
                <g>
                  {" "}
                  <path
                    class="st0"
                    d="M512,275.052c-0.038-4.608-1.333-8.486-3.276-12.005c-1.889-3.283-4.418-6.331-8.296-8.692l0.023-0.038 L281.417,115.193c-14.923-34.364-43.224-51.306-61.933-51.306c-4.357,0-9.263,1.005-14.375,2.842l-13.674-8.684l-0.068-0.038 c-7.237-4.403-15.494-5.812-24.347-5.858c-9.24,0.016-19.318,1.699-29.908,4.8c-15.867,4.67-32.863,12.592-48.989,23.63 c-16.104,11.038-31.325,25.215-43.247,42.538c-16.455,23.942-27.645,47.916-34.737,69.862C3.047,214.948,0.015,234.838,0,251.025 c0.008,2.842,0.13,5.539,0.32,8.167v164.712c0.008,19.86,16.096,35.941,35.948,35.948h435.456 c19.479-0.007,35.385-15.494,35.941-34.942l4.091-147.519h-0.038C511.802,276.614,512,275.791,512,275.052z M260.087,158.004 c0.556-6.407,3.565-11.412,6.704-11.175c3.146,0.236,5.24,5.63,4.684,12.044c-0.563,6.399-3.565,11.404-6.711,11.16 C261.618,169.797,259.531,164.411,260.087,158.004z M247.556,104.528c3.123-0.45,6.506,4.334,7.572,10.688 c1.052,6.361-0.617,11.869-3.733,12.318s-6.506-4.327-7.572-10.681C242.772,110.5,244.44,104.985,247.556,104.528z M240.09,201.898 c0.556-6.399,3.558-11.396,6.712-11.16c3.138,0.236,5.233,5.622,4.677,12.029s-3.558,11.412-6.712,11.175 C241.622,213.706,239.526,208.313,240.09,201.898z M216.803,158.012c0.563-6.414,3.565-11.411,6.711-11.167 c3.139,0.236,5.233,5.629,4.677,12.028c-0.556,6.406-3.565,11.412-6.704,11.168C218.341,169.804,216.247,164.419,216.803,158.012z M205.132,201.959c1.066,6.354-0.602,11.861-3.725,12.31c-3.116,0.449-6.506-4.327-7.564-10.68 c-1.059-6.354,0.601-11.868,3.732-12.318C200.691,190.815,204.065,195.606,205.132,201.959z M186.095,116.968 c0.61-6.407,3.649-11.389,6.795-11.137c3.131,0.259,5.195,5.659,4.602,12.066c-0.61,6.399-3.649,11.381-6.795,11.13 C187.558,128.768,185.502,123.366,186.095,116.968z M484.279,424.247c-0.19,6.795-5.751,12.203-12.554,12.203H36.268 c-6.917-0.015-12.531-5.622-12.547-12.546v-40.359h461.685L484.279,424.247z M486.412,347.23H23.874 c-0.053-0.007-0.099-0.03-0.152-0.037v-56.388h464.26L486.412,347.23z M488.462,275.204H24.552l-0.662-0.747 c-0.053-0.068-0.115-0.228-0.168-0.312v-15.434l-0.038-0.472c-0.182-2.209-0.282-4.617-0.274-7.214 c-0.016-13.247,2.574-31.019,8.997-50.848c6.414-19.845,16.629-41.799,31.758-63.807c13.301-19.38,32.254-34.821,51.459-45.219 c9.59-5.203,19.219-9.149,28.086-11.754c8.86-2.613,16.988-3.855,23.31-3.848c6.041-0.038,10.277,1.226,11.976,2.324l3.717,2.361 c-18.816,16.271-35.217,44.77-35.217,86.082c0,55.876,45.989,68.91,71.988,68.91c26,0,71.988-13.034,71.988-68.91 c0-6.239-0.488-12.09-1.188-17.75l197.819,125.64l0.373,0.609l0.046,0.145L488.462,275.204z M177.266,170.856 c-3.108,0.457-6.498-4.335-7.557-10.68c-1.066-6.361,0.61-11.868,3.726-12.318c3.116-0.457,6.506,4.326,7.572,10.68 C182.058,164.898,180.39,170.407,177.266,170.856z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Pastries">
            <p>Pastries</p>
            </Link>
          </div>
          <div className="flex">
            <svg
              height="20px"
              width="20px"
              className="mr-[1rem]"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style type="text/css"></style>{" "}
                <g>
                  {" "}
                  <path
                    class="st0"
                    d="M303.424,145.11v-24.402l43.113-60.35L307.736,0H204.264l-38.793,60.358l43.113,60.35h-0.009v24.402 c-80.474,16.606-141.582,75.675-141.582,161.994C66.994,409.742,143.233,512,195.65,512h120.708 c52.409,0,128.648-102.258,128.648-204.896C445.006,220.786,383.899,161.707,303.424,145.11z M338.192,390.492H173.808V261.844 h164.385V390.492z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <Link to="/ThriftNg/Fragrance">
            <p>Fragrance</p>
            </Link>
          </div>
          <Link to="/ThriftNg/Thrifts"> 
          <div className="my-[1rem] flex">
          <img alt="logo" className="w-[10%] h-[10%] mb-[-1rem] mr-[0.5rem] ml-[-0.3rem] " src={logo1} />
            <p>Thrift</p>
          </div>
          </Link>
        </div>
        <div className="ml-[1rem] officialStore">
          <h2 className="my-[1rem] officialStore pb-[1rem] font-bold">Official Stores</h2>
          <div onClick={setCloths} className="flex justify-between mr-[1rem]" >
            <p>Clothing</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {Stores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Clothstore 1</p>
            <p>Clothstore 2</p>
            <p>Clothstore 3</p>
            <p>Clothstore 4</p>
          </div> : ""}
         
          <div className="flex justify-between mr-[1rem] my-[1rem]" onClick={setaccessories}>
            <p>Accessories</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {accessoriesStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Accessoriesstore 1</p>
            <p>AccessoriesStore 2</p>
            <p>AccessoriesStore 3</p>
            <p>AccessoriesStore 4</p>
          </div> : ""}
          <div onClick={sethair} className="flex justify-between mr-[1rem]">
            <p>Hair</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {hairStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Hairstore 1</p>
            <p>Hairstore 2</p>
            <p>Hairstore 3</p>
            <p>Hairstore 4</p>
          </div> : ""}
          <div className="flex justify-between mr-[1rem] my-[1rem]" onClick={setshoes}>
            <p>Shoes</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {shoesStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Shoesstore 1</p>
            <p>Shoesstore 2</p>
            <p>Shoesstore 3</p>
            <p>Shoesstore 4</p>
          </div> : ""}
          <div onClick={setbags} className="flex justify-between mr-[1rem]">
            <p>Bags</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {bagsStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Bagsstore 1</p>
            <p>Bagsstore 2</p>
            <p>Bagsstore 3</p>
            <p>Bagsstore 4</p>
          </div> : ""}
          <div className="flex justify-between mr-[1rem] my-[1rem]" onClick={setskinCare}>
            <p>Skin Care</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {skinCareStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>SkinCarestore 1</p>
            <p>SkinCarestore 2</p>
            <p>SkinCarestore 3</p>
            <p>SkinCarestore 4</p>
          </div> : ""}
          <div onClick={setpastries} className="flex justify-between mr-[1rem]">
            <p>Pastries</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {pastriesStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Pastriesstore 1</p>
            <p>Pastriesstore 2</p>
            <p>Pastriesstore 3</p>
            <p>Pastriesstore 4</p>
          </div> : ""}
          <div className="flex justify-between mr-[1rem] my-[1rem]" onClick={setfragrance}>
            <p>Fragrance</p>
            <svg viewBox="0 0 1024 1024" width="15px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"></path></g></svg>
          </div>
          {fragranceStores ?  <div className="mt-[1rem] border-t border-b py-[1rem]">
            <p>Fragrancestore 1</p>
            <p>Fragrancestore 2</p>
            <p>Fragrancestore 3</p>
            <p>Fragrancestore 4</p>
          </div> : ""}
        </div>
        <div className="ml-[1rem]">
          <Link to="/sell">
          <p className="my-[1rem]">Sell on Thrift NG</p>
          </Link>
          <Link to="/Contact Us">
          <p className="pb-[1rem]">Contact Us</p>
          </Link>
          <Link to="/Privacy-Policy">
          <p className="my-[1rem]">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
