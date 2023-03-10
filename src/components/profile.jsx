import { auth, provider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/thriftlogo1.webp"
import logo2 from "../assets/images/logowhite.webp";

export function Profile() {
  const [user] = useAuthState(auth);

  const SignUserOut = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <div className="profile">
      {user ? (
        <div>
 <div className="flex flex-col items-center topnav mb-[1rem] lg:mt-[4.5rem]">
 <img alt="logo" className="w-[70px] mt-[1rem] lg:hidden" src={logo2}/>
 <p className="mr-[0.5rem] mb-[0.5rem] text-[2rem] text-white motto tracking-widest">Welcome Back</p>
         <div className="flex items-center">
           <p className="mr-[0.5rem] mb-[0.5rem] text-[1.5rem] text-white"> {user?.displayName}</p>
          <svg viewBox="0 0 80 80" height="30" width="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.5009 61.621C26.453 61.621 26.4007 61.6123 26.3484 61.5992C21.1 59.9994 15.4158 54.2629 14.1822 49.324C14.1124 49.0451 14.2824 48.7661 14.557 48.6963C14.836 48.6266 15.115 48.7966 15.1848 49.0712C16.3225 53.6264 21.7888 59.1232 26.6491 60.6097C26.9238 60.6925 27.0763 60.9802 26.9935 61.2548C26.9281 61.4771 26.7232 61.621 26.5009 61.621Z" fill="#975500"></path> <path d="M29.003 68.1292C28.9638 68.1292 28.9246 68.1249 28.8853 68.1161C24.5437 67.1048 19.4959 63.8617 15.0409 59.2149C10.8736 54.8733 8.17534 50.2526 8.00098 47.1577C7.98354 46.8743 8.20149 46.6259 8.48919 46.6128C8.77253 46.5954 9.021 46.8133 9.03408 47.101C9.19101 49.917 11.8413 54.3894 15.7863 58.5C20.1061 63.0073 24.9665 66.1415 29.1207 67.1092C29.3997 67.1746 29.5741 67.4536 29.5087 67.7325C29.452 67.9679 29.2384 68.1292 29.003 68.1292Z" fill="#975500"></path> <path d="M51.2562 22.834C51.0252 22.834 50.8159 22.6815 50.7549 22.4504C50.0269 19.6868 46.7184 15.72 43.7063 14.9441C43.4317 14.8743 43.2616 14.591 43.3358 14.312C43.4099 14.033 43.6888 13.8674 43.9678 13.9415C47.3592 14.8177 50.9423 19.0939 51.7575 22.1889C51.8316 22.4635 51.666 22.7468 51.387 22.8209C51.3434 22.8297 51.2998 22.834 51.2562 22.834Z" fill="#975500"></path> <path d="M57.7816 23.7536C57.5506 23.7536 57.3413 23.5967 57.2803 23.3656C55.3405 15.7285 48.087 9.76966 43.9459 9.02862C43.6625 8.97631 43.4794 8.71041 43.5274 8.42707C43.5797 8.14372 43.8456 7.96064 44.1289 8.00859C48.6406 8.81938 56.208 14.9613 58.2829 23.1084C58.3526 23.3874 58.187 23.6664 57.908 23.7362C57.8644 23.7492 57.8252 23.7536 57.7816 23.7536Z" fill="#975500"></path> <path d="M44.9005 37.3237C45.7331 38.2434 46.4829 39.4509 46.1646 39.7691C45.8464 40.0873 44.87 39.5119 44.1246 38.7621C43.3792 38.0167 41.5963 45.9503 41.422 46.3513C41.2912 46.6521 39.2163 49.0321 38.1309 51.2945C37.7691 52.0486 37.8214 54.3241 37.6862 54.4592C37.1414 55.0041 36.4483 54.9474 34.9531 53.6266C33.4579 52.3058 32.682 60.1739 34.4649 61.4163C37.5119 63.5435 43.6059 71.9958 51.6571 71.9958C60.9724 71.9958 69.5991 62.2794 69.5991 55.1479C69.5991 48.0165 67.5067 45.3138 67.6462 39.3375C67.7595 34.2767 71.4429 31.8617 71.4429 29.3335C71.4429 27.2062 68.2826 26.6875 67.2452 26.6875C65.4056 26.6875 60.6891 29.0458 60.6891 35.2531C60.6891 37.668 60.0004 39.8519 57.5288 39.8519C55.0572 39.8519 52.2979 36.4606 50.6283 33.8146" fill="url(#paint0_linear)"></path> <path d="M71.4388 29.3335C71.4388 28.1784 70.5016 27.4983 69.4815 27.1147C70.7064 31.173 64.4948 31.3474 64.4948 45.1744C64.4948 59.0014 56.4435 63.0248 53.1088 63.7179C49.7741 64.4067 43.8981 64.6072 39.4257 59.1191C38.0526 57.4321 36.1913 55.6013 34.1207 53.8708C33.2445 55.3311 33.0571 60.4356 34.4651 61.4163C37.5121 63.5436 43.606 71.9958 51.6573 71.9958C60.9726 71.9958 69.5992 62.2794 69.5992 55.148C69.5992 48.0165 67.5069 45.3139 67.6464 39.3376C67.7597 34.2767 71.4388 31.8618 71.4388 29.3335Z" fill="url(#paint1_linear)"></path> <path d="M34.9531 53.6267C33.458 52.3059 29.9227 48.5396 27.6212 46.6957C25.3196 44.8562 23.31 44.878 21.9282 46.9093C20.5464 48.9407 24.5742 52.5064 25.4939 53.4261C26.9019 54.8341 32.682 60.174 34.4649 61.4207" fill="url(#paint2_linear)"></path> <path d="M41.422 46.351C41.2476 46.7521 40.075 47.031 37.7429 44.4941C35.9601 42.5543 31.1869 36.979 28.3709 34.4507C25.5549 31.9225 23.3667 30.885 21.5271 32.2102C19.6876 33.5353 20.7338 36.2903 22.7913 38.5919C25.337 41.4383 28.2663 44.3415 31.0692 47.1313C33.2618 49.3108 38.2268 53.9184 37.6819 54.4633" fill="url(#paint3_linear)"></path> <path d="M31.0735 47.1271C33.1441 49.1846 37.6776 53.3998 37.7255 54.3283C38.3794 53.3083 37.185 50.2744 35.9208 49.2108C28.615 43.0601 21.5577 33.1432 20.6597 33.4396C20.2761 34.8825 21.2482 36.8615 22.7913 38.592C25.337 41.4342 28.2663 44.3417 31.0735 47.1271Z" fill="url(#paint4_linear)"></path> <path d="M50.624 33.819C48.9545 31.173 42.1107 22.6641 40.4455 20.2492C38.776 17.8342 36.5354 17.8342 34.9836 18.9284C33.4318 20.0225 32.9697 22.2064 36.4657 26.8488C38.6714 29.7781 40.5022 32.472 44.9049 37.328L50.0224 36.9706L50.624 33.819Z" fill="url(#paint5_linear)"></path> <path d="M44.1247 38.7622C43.3793 38.0168 36.7666 30.1792 35.2714 28.4966C32.4686 25.3493 28.9159 18.6058 24.6789 21.6092C22.4514 23.1872 23.6589 25.4757 24.2909 26.3955C24.923 27.3153 33.1442 36.805 33.9506 37.6071C34.7571 38.4135 41.5965 45.946 41.4265 46.347" fill="url(#paint6_linear)"></path> <path d="M44.9005 37.3233C45.7026 38.2082 46.4218 39.3546 46.1952 39.7252C48.8629 37.5805 43.2223 31.2773 40.0271 27.4936C37.5555 24.5643 36.8798 20.8373 35.11 18.8408C35.0664 18.867 35.0272 18.8975 34.9836 18.9236C33.4318 20.0178 32.9697 22.2017 36.4657 26.8441C38.667 29.7734 40.5022 32.4717 44.9005 37.3233Z" fill="url(#paint7_linear)"></path> <path d="M33.9462 37.6113C34.7526 38.4177 41.592 45.9502 41.422 46.3512C43.5361 43.5048 35.3411 35.1397 31.3743 30.9114C27.935 27.2454 27.3465 24.0371 23.99 22.2368C22.7433 23.7451 23.7328 25.5933 24.2864 26.3997C24.9185 27.3195 33.1441 36.8092 33.9462 37.6113Z" fill="url(#paint8_linear)"></path> <path d="M41.2693 46.5217C41.0296 46.6699 40.537 46.6829 39.7742 46.2427C40.3409 46.7004 40.8639 46.8747 41.2693 46.5217Z" fill="url(#paint9_linear)"></path> <path d="M67.729 27.5506C69.4857 27.2367 69.7952 27.4373 69.4813 27.1147C68.6269 26.7965 67.7115 26.6875 67.2408 26.6875C65.4012 26.6875 60.6847 29.0458 60.6847 35.2531C60.6847 37.668 59.996 39.8519 57.52 39.8519C56.5436 39.8519 55.5279 39.3245 54.5471 38.5224C58.8888 43.3305 62.2932 38.8014 62.8119 35.6977C63.3307 32.5941 62.5765 28.4747 67.729 27.5506Z" fill="url(#paint10_radial)"></path> <path d="M34.4518 19.3945C33.3795 20.6107 33.4144 22.7903 36.4614 26.8442C38.6671 29.7735 40.4979 32.4674 44.9006 37.3234C45.7331 38.2432 46.4829 39.4507 46.1647 39.7689C46.9014 34.7385 39.7394 29.7909 37.4117 25.9985C35.5678 22.9908 35.2016 21.2166 34.4518 19.3945Z" fill="url(#paint11_linear)"></path> <path d="M33.9462 37.6113C34.7526 38.4177 41.592 45.9502 41.422 46.3512C42.9302 45.2745 41.9015 43.5963 39.5694 41.2642C34.7875 36.4823 28.1312 30.057 25.4547 24.7651C25.2019 24.2638 24.7311 23.8933 24.1775 23.8235C22.7346 23.6361 23.807 25.6979 24.2908 26.3997C24.9185 27.3195 33.1441 36.8092 33.9462 37.6113Z" fill="url(#paint12_linear)"></path> <path d="M22.7913 38.5919C25.337 41.4384 28.2663 44.3415 31.0692 47.1314C33.2618 49.3109 38.2268 53.9184 37.6819 54.4633C40.7594 51.874 26.466 42.5151 20.6554 33.4438C20.2761 34.878 21.2482 36.8614 22.7913 38.5919Z" fill="url(#paint13_linear)"></path> <path d="M37.0543 54.9779C37.3463 54.8646 37.4989 54.7295 37.5468 54.5813C37.0194 54.9867 36.3263 54.8428 34.9532 53.6266C33.458 52.3058 29.9228 48.5396 27.6212 46.6957C26.6099 45.8893 25.6553 45.4403 24.7834 45.3618C26.0301 46.1421 25.4504 46.4211 28.2228 48.5483C29.7136 49.6904 35.1537 55.7233 37.0543 54.9779Z" fill="url(#paint14_linear)"></path> <path d="M33.4319 41.1772C35.4501 43.6357 39.3907 47.694 41.1605 46.5737C40.6723 46.7394 39.5607 46.4691 37.7473 44.4945C35.9645 42.5547 31.1913 36.9794 28.3753 34.4511C26.0955 32.4024 24.2255 31.3344 22.6213 31.7049C27.2899 33.2393 31.5182 38.8538 33.4319 41.1772Z" fill="url(#paint15_linear)"></path> <path d="M35.6158 30.5975C38.8371 34.1022 43.6191 41.055 46.0427 39.8388C45.646 39.9608 44.7916 39.4334 44.1247 38.7621C43.3793 38.0167 36.7666 30.1791 35.2714 28.4965C33.3273 26.3169 31.03 22.4112 28.3884 21.2168C31.0518 23.3179 33.0047 27.7598 35.6158 30.5975Z" fill="url(#paint16_linear)"></path> <path d="M54.5472 38.5266C54.5516 38.5266 54.5516 38.5266 54.5472 38.5266C53.0433 37.2973 51.631 35.4186 50.6197 33.8188C48.9545 31.1728 42.1108 22.6639 40.4456 20.249C39.9356 19.5123 39.3776 19.0023 38.7979 18.6797C39.5738 19.7956 40.014 21.3867 41.7707 23.357C44.5867 26.5173 48.2701 32.2103 49.5343 34.1675C50.794 36.116 52.8341 40.2397 54.5472 38.5266Z" fill="url(#paint17_linear)"></path> <path d="M63.7711 66.5906C62.7249 64.0449 61.1949 62.4931 58.9849 63.949C52.9562 67.9202 46.021 66.5776 37.3246 59.5507C29.5698 53.278 25.5594 48.7969 21.7845 47.1753C20.8778 49.2371 24.6092 52.5457 25.4897 53.4262C26.8977 54.8342 32.6778 60.1741 34.4607 61.4208C37.5077 63.548 43.6017 72.0002 51.6529 72.0002C56.1558 71.9959 60.4887 69.7335 63.7711 66.5906Z" fill="url(#paint18_linear)"></path> <path d="M67.642 39.3375C67.7553 34.2766 71.4388 31.8617 71.4388 29.3334C71.4388 28.588 71.0508 28.0432 70.5015 27.6465C71.1728 29.6168 69.5731 31.3648 67.1843 34.3377C64.595 37.559 64.024 42.5589 65.8025 47.5631C67.5853 52.5673 65.3404 59.4678 61.718 61.6517C58.0956 63.8356 53.2832 73.4386 39.5041 62.5889C39.4998 62.5845 39.4998 62.5845 39.4954 62.5801C38.6541 61.7999 37.8215 61.1068 36.9802 60.5837C31.1609 56.9787 27.8436 53.7356 25.3371 51.0112C24.8446 50.475 23.5194 48.4219 21.9414 49.0975C22.7304 50.8847 24.8533 52.7897 25.4897 53.4261C26.8977 54.8341 32.6778 60.1739 34.4607 61.4206C34.6917 61.5819 34.9445 61.7824 35.2104 62.0135C35.2802 62.0745 35.3499 62.1355 35.4197 62.1965C35.4371 62.214 35.4589 62.2314 35.4763 62.2445C35.5199 62.2837 35.5679 62.3273 35.6115 62.3666C35.6202 62.3753 35.6333 62.384 35.642 62.3971C37.451 64.0404 39.94 66.7605 42.9914 68.8834C42.9914 68.8834 42.9958 68.8834 42.9958 68.8877C43.2617 69.0752 43.5363 69.2583 43.8109 69.4326C43.8153 69.437 43.8196 69.437 43.824 69.4413C44.0986 69.6157 44.3776 69.7857 44.6566 69.947C44.6609 69.947 44.6609 69.9513 44.6653 69.9513C46.7751 71.1632 49.1159 72.0001 51.6442 72.0001C60.9595 72.0001 69.5861 62.2837 69.5861 55.1523C69.5861 48.0208 67.5069 45.3182 67.642 39.3375Z" fill="url(#paint19_radial)"></path> <defs> <linearGradient id="paint0_linear" x1="65.0704" y1="73.8405" x2="57.3943" y2="55.8565" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#FFCB4B"></stop> <stop offset="1" stop-color="#FFD748"></stop> </linearGradient> <linearGradient id="paint1_linear" x1="66.5983" y1="61.3326" x2="50.4983" y2="42.1276" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#FFCB4B"></stop> <stop offset="1" stop-color="#FFD748"></stop> </linearGradient> <linearGradient id="paint2_linear" x1="23.5643" y1="48.5465" x2="33.0518" y2="55.5328" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#FFCB4B"></stop> <stop offset="1" stop-color="#FFD748"></stop> </linearGradient> <linearGradient id="paint3_linear" x1="20.1097" y1="30.055" x2="36.756" y2="47.4775" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#FFCB4B"></stop> <stop offset="1" stop-color="#FFD748"></stop> </linearGradient> <linearGradient id="paint4_linear" x1="32.8886" y1="40.4011" x2="27.3859" y2="45.5848" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFA754"></stop> </linearGradient> <linearGradient id="paint5_linear" x1="38.0895" y1="21.8354" x2="47.7495" y2="37.0154" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#FFCB4B"></stop> <stop offset="1" stop-color="#FFD748"></stop> </linearGradient> <linearGradient id="paint6_linear" x1="28.118" y1="24.3572" x2="41.228" y2="42.0672" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#FFCB4B"></stop> <stop offset="1" stop-color="#FFD748"></stop> </linearGradient> <linearGradient id="paint7_linear" x1="43.7096" y1="26.4938" x2="35.4296" y2="33.9688" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFA754"></stop> </linearGradient> <linearGradient id="paint8_linear" x1="36.0933" y1="31.8196" x2="24.7083" y2="40.1427" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFA754"></stop> </linearGradient> <linearGradient id="paint9_linear" x1="44.5743" y1="43.4211" x2="33.1893" y2="51.7442" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFA754"></stop> </linearGradient> <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.5133 29.9083) scale(13.6681)"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFA754"></stop> </radialGradient> <linearGradient id="paint11_linear" x1="45.2249" y1="25.0259" x2="38.1524" y2="31.5809" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FF8900"></stop> </linearGradient> <linearGradient id="paint12_linear" x1="39.8091" y1="28.5789" x2="30.4941" y2="36.9739" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FF8900"></stop> </linearGradient> <linearGradient id="paint13_linear" x1="36.661" y1="37.6589" x2="25.161" y2="47.3189" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FF8900"></stop> </linearGradient> <linearGradient id="paint14_linear" x1="24.1128" y1="44.6766" x2="37.4816" y2="55.5441" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFBC47"></stop> </linearGradient> <linearGradient id="paint15_linear" x1="26.6716" y1="31.2062" x2="37.1079" y2="47.0762" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFBC47"></stop> </linearGradient> <linearGradient id="paint16_linear" x1="34.8464" y1="32.3397" x2="37.7789" y2="30.0972" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFA754"></stop> </linearGradient> <linearGradient id="paint17_linear" x1="49.3174" y1="41.1993" x2="45.4073" y2="22.5692" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FFBC47"></stop> </linearGradient> <linearGradient id="paint18_linear" x1="40.3917" y1="59.0796" x2="34.5267" y2="64.4703" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FF8900"></stop> </linearGradient> <radialGradient id="paint19_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.2763 41.2639) rotate(48.1401) scale(39.6178 35.9605)"> <stop offset="0.6134" stop-color="#FFBC47" stop-opacity="0"></stop> <stop offset="1" stop-color="#FF8900"></stop> </radialGradient> </defs> </g></svg>
 </div>
         </div>
          <div className="flex flex-col items-center">
          <div className="w-[95%]">

{/* ///////////// MAKE MONEY //////////// */}
<Link to="/sell" >
<div className="profile-details text-center py-[0.5rem] mt-[1rem] mx-[0.5rem] cursor-pointer rounded-[20px] flex justify-center items-center ecommerceCard">
<p className="text-[80%]">Make Money with Thrift</p>
<svg className="ml-[5px]" viewBox="0 0 80 80" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M40.475 69.95C57.3059 69.95 70.95 56.3059 70.95 39.475C70.95 22.6441 57.3059 9 40.475 9C23.6441 9 10 22.6441 10 39.475C10 56.3059 23.6441 69.95 40.475 69.95Z" fill="url(#paint0_radial)"></path> <path opacity="0.5" d="M40.475 69.95C57.3059 69.95 70.95 56.3059 70.95 39.475C70.95 22.6441 57.3059 9 40.475 9C23.6441 9 10 22.6441 10 39.475C10 56.3059 23.6441 69.95 40.475 69.95Z" fill="url(#paint1_radial)"></path> <path d="M40.475 69.95C57.3059 69.95 70.95 56.3059 70.95 39.475C70.95 22.6441 57.3059 9 40.475 9C23.6441 9 10 22.6441 10 39.475C10 56.3059 23.6441 69.95 40.475 69.95Z" fill="url(#paint2_radial)"></path> <path d="M33.7705 21.0199C33.7705 19.8009 32.4523 19.0355 30.1844 19.0355C28.2566 19.0355 24.0185 20.0986 21.0986 23.8548C20.5599 24.5493 21.382 24.932 21.9207 24.4785C23.7208 22.9476 28.526 20.9916 32.2822 21.4026C33.7847 21.5727 33.7705 21.0199 33.7705 21.0199Z" fill="url(#paint3_linear)"></path> <path d="M47.1795 21.0199C47.1795 19.8009 48.4977 19.0355 50.7656 19.0355C52.6934 19.0355 56.9315 20.0986 59.8514 23.8548C60.3901 24.5493 59.5679 24.932 59.0293 24.4785C57.2292 22.9476 52.424 20.9916 48.6678 21.4026C47.1653 21.5727 47.1795 21.0199 47.1795 21.0199Z" fill="url(#paint4_linear)"></path> <path d="M40.475 59.4468C24.4721 59.4468 19.341 43.132 24.217 45.6834C30.7655 49.1136 34.9045 50.1058 40.475 50.1058C46.0314 50.1058 50.1845 49.1136 56.7331 45.6834C61.6091 43.1462 56.4779 59.4468 40.475 59.4468Z" fill="#643800"></path> <path d="M50.0994 52.7706C50.0994 51.7926 49.1639 51.0697 48.2143 51.3532C45.9463 52.0335 43.3666 52.4304 40.475 52.4304C37.5834 52.4304 35.0037 52.0194 32.7358 51.3532C31.8003 51.0697 30.8506 51.7926 30.8506 52.7706V61.4312C30.8506 66.7466 35.1596 71.2682 40.475 71.2682C45.7904 71.2682 50.0994 66.7466 50.0994 61.4312V59.2341V52.7706Z" fill="url(#paint5_radial)"></path> <path d="M50.0994 52.7706C50.0994 51.7926 49.1639 51.0697 48.2143 51.3532C45.9463 52.0335 43.3666 52.4304 40.475 52.4304C37.5834 52.4304 35.0037 52.0194 32.7358 51.3532C31.8003 51.0697 30.8506 51.7926 30.8506 52.7706V61.4312C30.8506 66.7466 35.1596 71.2682 40.475 71.2682C45.7904 71.2682 50.0994 66.7466 50.0994 61.4312V59.2341V52.7706Z" fill="url(#paint6_radial)"></path> <path d="M56.7331 45.6976C50.1845 49.1278 46.0455 50.12 40.475 50.12C34.9186 50.12 30.7655 49.1278 24.2169 45.6976C22.516 44.8046 22.0341 46.2079 22.7995 48.4049C22.7995 48.3624 23.0546 46.0094 25.3509 47.6253C25.3509 47.6253 25.3651 47.6253 25.3651 47.6395C28.7811 50.2617 33.7989 52.4304 40.475 52.4304C47.1512 52.4304 52.1689 50.2617 55.5849 47.6395C55.5849 47.6395 55.5991 47.6395 55.5991 47.6253C57.8954 45.9952 58.1505 48.3482 58.1505 48.4049C58.9159 46.2079 58.4198 44.8046 56.7331 45.6976Z" fill="url(#paint7_linear)"></path> <path opacity="0.5" d="M40.475 52.4446C37.5834 52.4446 35.0037 52.0336 32.7358 51.3674C31.8003 51.0839 30.8506 51.8068 30.8506 52.7848C30.8506 54.4857 30.8506 56.4276 30.8506 56.4276C30.8506 56.4276 30.964 54.1172 40.475 54.1172C49.9719 54.1172 50.0994 56.4276 50.0994 56.4276C50.0994 56.4276 50.0994 54.4857 50.0994 52.7848C50.0994 51.8068 49.1639 51.0839 48.2143 51.3674C45.9463 52.0336 43.3666 52.4446 40.475 52.4446Z" fill="#366E0D"></path> <path opacity="0.24" d="M40.475 52.4446C40.1348 52.4446 39.8088 52.4162 39.4828 52.4021C39.497 64.0109 39.9364 68.0648 40.475 68.0648C41.0136 68.0648 41.453 64.0676 41.4672 52.4021C41.1412 52.4021 40.8152 52.4446 40.475 52.4446Z" fill="url(#paint8_linear)"></path> <path d="M32.183 34.6274C33.4729 34.1312 34.295 33.1107 34.295 31.5799C34.295 29.5387 32.7358 28.0788 30.0568 28.0788H29.6033V26.1085H28.4268V28.0788H24.954V41.2043H28.4268V43.1887H29.6033V41.2043H30.1561C32.6933 41.2043 34.4084 39.9286 34.4084 37.7883C34.4226 36.2432 33.5437 35.1376 32.183 34.6274ZM26.655 29.6096H30.0285C31.6444 29.6096 32.5515 30.616 32.5515 31.8066C32.5515 33.0398 31.6727 33.9612 30.0568 33.9612H26.655V29.6096ZM30.1986 39.6451H26.655V35.3502H30.1986C31.616 35.3502 32.7216 36.1298 32.7216 37.5189C32.7216 38.823 31.7294 39.6451 30.1986 39.6451Z" fill="url(#paint9_linear)"></path> <path d="M32.8067 34.9392C32.6791 34.8541 32.3673 34.6699 32.183 34.6415V35.251C33.4303 35.7188 34.2666 36.6968 34.3942 38.0434C34.3942 37.9583 34.4225 37.8733 34.4225 37.7882C34.4225 36.4984 33.7989 35.5203 32.8067 34.9392Z" fill="url(#paint10_linear)"></path> <path d="M30.0568 34.5706C31.6727 34.5706 32.5515 33.6493 32.5515 32.4161C32.5515 32.3169 32.5374 32.2177 32.5232 32.1185C32.3814 33.1816 31.531 33.9611 30.0568 33.9611H26.655V34.5706H30.0568Z" fill="url(#paint11_linear)"></path> <path d="M32.7216 38.1284C32.7216 38.0292 32.7075 37.93 32.6933 37.8307C32.5515 38.9505 31.616 39.6451 30.1986 39.6451H26.655V40.2546H30.1986C31.7294 40.2546 32.7216 39.4466 32.7216 38.1284Z" fill="url(#paint12_linear)"></path> <path d="M28.4268 28.0788H24.954V28.6883H28.4268V28.0788Z" fill="url(#paint13_linear)"></path> <path d="M29.6033 28.6883H30.0569C32.6224 28.6883 34.1391 30.0207 34.2667 31.9342C34.2808 31.8208 34.295 31.6932 34.295 31.5798C34.295 29.5387 32.7358 28.0788 30.0569 28.0788H29.6033V28.6883Z" fill="url(#paint14_linear)"></path> <path d="M29.6032 26.1085H28.4268V26.718H29.6032V26.1085Z" fill="url(#paint15_linear)"></path> <path d="M54.8478 34.6274C56.1377 34.1312 56.9598 33.1107 56.9598 31.5799C56.9598 29.5387 55.4006 28.0788 52.7217 28.0788H52.2681V26.1085H51.1058V28.0788H47.6331V41.2043H51.1058V43.1887H52.2823V41.2043H52.8351C55.3723 41.2043 57.0874 39.9286 57.0874 37.7883C57.0874 36.2432 56.2086 35.1376 54.8478 34.6274ZM49.3198 29.6096H52.6933C54.3092 29.6096 55.2164 30.616 55.2164 31.8066C55.2164 33.0398 54.3376 33.9612 52.7217 33.9612H49.3198V29.6096ZM52.8634 39.6451H49.3198V35.3502H52.8634C54.2809 35.3502 55.3865 36.1298 55.3865 37.5189C55.3865 38.823 54.4084 39.6451 52.8634 39.6451Z" fill="url(#paint16_linear)"></path> <path d="M55.4715 34.9392C55.3439 34.8541 55.0321 34.6699 54.8478 34.6415V35.251C56.0952 35.7188 56.9315 36.6968 57.0591 38.0434C57.0591 37.9583 57.0874 37.8733 57.0874 37.7882C57.0874 36.4984 56.4637 35.5203 55.4715 34.9392Z" fill="url(#paint17_linear)"></path> <path d="M52.7217 34.5706C54.3376 34.5706 55.2164 33.6493 55.2164 32.4161C55.2164 32.3169 55.2022 32.2177 55.188 32.1185C55.0463 33.1816 54.1958 33.9611 52.7217 33.9611H49.3198V34.5706H52.7217Z" fill="url(#paint18_linear)"></path> <path d="M55.3865 38.1284C55.3865 38.0292 55.3723 37.93 55.3581 37.8307C55.2164 38.9505 54.2809 39.6451 52.8634 39.6451H49.3198V40.2546H52.8634C54.4084 40.2546 55.3865 39.4466 55.3865 38.1284Z" fill="url(#paint19_linear)"></path> <path d="M51.0916 28.0788H47.6189V28.6883H51.0916V28.0788Z" fill="url(#paint20_linear)"></path> <path d="M52.2681 28.6883H52.7217C55.2873 28.6883 56.8039 30.0207 56.9315 31.9342C56.9457 31.8208 56.9599 31.6932 56.9599 31.5798C56.9599 29.5387 55.4007 28.0788 52.7217 28.0788H52.2681V28.6883Z" fill="url(#paint21_linear)"></path> <path d="M52.2823 26.1085H51.1058V26.718H52.2823V26.1085Z" fill="url(#paint22_linear)"></path> <path d="M43.0264 61.8139C44.1604 61.3887 44.8691 60.4815 44.8691 59.1349C44.8691 57.3348 43.5083 56.0733 41.1554 56.0733H40.7585V54.3582H39.7238V56.0733H36.6763V67.5687H39.7238V69.3122H40.7585V67.5687H41.2404C43.4658 67.5687 44.9683 66.4631 44.9683 64.5779C44.9825 63.2313 44.2171 62.2675 43.0264 61.8139ZM38.1788 57.4198H41.1412C42.5586 57.4198 43.3524 58.2986 43.3524 59.3334C43.3524 60.4106 42.587 61.2186 41.1696 61.2186H38.1929V57.4198H38.1788ZM41.283 66.208H38.1788V62.4376H41.283C42.5161 62.4376 43.4942 63.1179 43.4942 64.3369C43.4942 65.4992 42.6295 66.208 41.283 66.208Z" fill="url(#paint23_linear)"></path> <path d="M43.565 62.0832C43.4516 62.0123 43.1823 61.8423 43.0264 61.8139V62.3525C44.1178 62.7636 44.8407 63.6282 44.9541 64.8047C44.9541 64.7338 44.9824 64.663 44.9824 64.5779C44.9824 63.4581 44.4438 62.5935 43.565 62.0832Z" fill="url(#paint24_linear)"></path> <path d="M41.1554 61.7572C42.5728 61.7572 43.3382 60.9493 43.3382 59.872C43.3382 59.787 43.324 59.7019 43.3099 59.6169C43.1823 60.5524 42.4452 61.2328 41.1412 61.2328H38.1646V61.7714H41.1554V61.7572Z" fill="url(#paint25_linear)"></path> <path d="M43.4942 64.8898C43.4942 64.8047 43.48 64.7197 43.4658 64.6346C43.3383 65.6126 42.5162 66.2222 41.283 66.2222H38.1788V66.7608H41.283C42.6295 66.7466 43.4942 66.0379 43.4942 64.8898Z" fill="url(#paint26_linear)"></path> <path d="M39.7379 56.0733H36.6904V56.6119H39.7379V56.0733Z" fill="url(#paint27_linear)"></path> <path d="M40.7726 56.6119H41.1695C43.4233 56.6119 44.7557 57.7884 44.869 59.4609C44.8832 59.3617 44.8974 59.2483 44.8974 59.1491C44.8974 57.349 43.5367 56.0874 41.1837 56.0874H40.7868V56.6119H40.7726Z" fill="url(#paint28_linear)"></path> <path d="M40.7726 54.3582H39.7379V54.8968H40.7726V54.3582Z" fill="url(#paint29_linear)"></path> <defs> <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.479 27.1245) scale(36.7641)"> <stop stop-color="#FFDF30"></stop> <stop offset="1" stop-color="#FFB82E"></stop> </radialGradient> <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34.479 27.1245) scale(28.924)"> <stop stop-color="#FFE95F"></stop> <stop offset="1" stop-color="#FFBB47" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.5702 64.1784) scale(15.8006 5.69928)"> <stop stop-color="#7A4400" stop-opacity="0.5"></stop> <stop offset="0.6008" stop-color="#894D00" stop-opacity="0.1981"></stop> <stop offset="0.995" stop-color="#965500" stop-opacity="0"></stop> </radialGradient> <linearGradient id="paint3_linear" x1="27.3442" y1="23.0612" x2="27.3442" y2="19.85" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#7A4400"></stop> </linearGradient> <linearGradient id="paint4_linear" x1="53.6057" y1="23.0612" x2="53.6057" y2="19.85" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#7A4400"></stop> </linearGradient> <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.4746 58.5024) scale(9.80561 18.2581)"> <stop stop-color="#7CEB00"></stop> <stop offset="1" stop-color="#2F9200"></stop> </radialGradient> <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.3715 64.4215) rotate(-39.9023) scale(10.0997 6.12476)"> <stop stop-color="white" stop-opacity="0.33"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </radialGradient> <linearGradient id="paint7_linear" x1="40.4746" y1="39.6764" x2="40.4746" y2="52.0924" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint8_linear" x1="40.4741" y1="90.9562" x2="40.4741" y2="47.0718" gradientUnits="userSpaceOnUse"> <stop stop-color="#7CEB00"></stop> <stop offset="1" stop-color="#2F9200"></stop> </linearGradient> <linearGradient id="paint9_linear" x1="29.6883" y1="6.58052" x2="29.6883" y2="65.5206" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#7A4400"></stop> </linearGradient> <linearGradient id="paint10_linear" x1="33.8017" y1="29.7392" x2="30.5136" y2="72.4546" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint11_linear" x1="29.8485" y1="30.0886" x2="26.8208" y2="69.4204" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint12_linear" x1="30.3664" y1="30.1285" x2="27.3388" y2="69.4601" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint13_linear" x1="26.5838" y1="29.8373" x2="23.5561" y2="69.1689" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint14_linear" x1="31.9219" y1="30.2482" x2="28.8943" y2="69.58" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint15_linear" x1="28.7441" y1="30.0036" x2="25.7164" y2="69.3355" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint16_linear" x1="52.354" y1="6.58052" x2="52.354" y2="65.5206" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#7A4400"></stop> </linearGradient> <linearGradient id="paint17_linear" x1="56.4675" y1="29.7392" x2="53.1793" y2="72.4546" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint18_linear" x1="52.5142" y1="30.0886" x2="49.4866" y2="69.4204" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint19_linear" x1="53.0321" y1="30.1285" x2="50.0045" y2="69.4601" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint20_linear" x1="49.2495" y1="29.8373" x2="46.2219" y2="69.1689" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint21_linear" x1="54.5877" y1="30.2482" x2="51.56" y2="69.58" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint22_linear" x1="51.4099" y1="30.0036" x2="48.3822" y2="69.3355" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint23_linear" x1="40.8388" y1="37.2421" x2="40.8388" y2="88.8818" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#7A4400"></stop> </linearGradient> <linearGradient id="paint24_linear" x1="44.4427" y1="57.5323" x2="41.5618" y2="94.957" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint25_linear" x1="40.9791" y1="57.8385" x2="38.3265" y2="92.2986" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint26_linear" x1="41.4329" y1="57.8734" x2="38.7803" y2="92.3335" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint27_linear" x1="38.1188" y1="57.6183" x2="35.4661" y2="92.0784" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint28_linear" x1="42.7957" y1="57.9783" x2="40.1431" y2="92.4384" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> <linearGradient id="paint29_linear" x1="40.0115" y1="57.764" x2="37.3589" y2="92.2238" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#3C2200"></stop> <stop offset="1" stop-color="#512D00"></stop> </linearGradient> </defs> </g></svg>
</div>
</Link>


{/* ///////////////////// NOTIFICATIONS ////////////////////// */}

<Link to="/Notifications" className="profile-details text-center py-[0.5rem] ecommerceCard my-[1rem] mx-[0.5rem] cursor-pointer rounded-[20px] flex justify-center items-center">
<p className="text-[80%]">Notifications</p>
<svg className="ml-[5px]" viewBox="0 0 24 24" height="30" width="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6Z" fill="#000000" fill-opacity=".16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 18H4" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M14 20a2 2 0 1 1-4 0" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="12" cy="3" r="1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle></g></svg>
</Link>

{/* /////////////////////////// INVITE //////////////////////////// */}

<Link to="/Invite Friends" className="profile-details text-center py-[0.5rem] ecommerceCard my-[1rem] mx-[0.5rem] cursor-pointer rounded-[20px] flex justify-center items-center">
<p className="text-[80%]">Invite your friends to Thrift</p>
<img alt="logo" className="w-[30px] mt-[0.5rem] ml-[5px]" src={logo1} />
</Link>

{/* /////////////////////// FAQ /////////////////////// */}

<Link to="/FAQ" className="profile-details text-center py-[0.5rem] ecommerceCard mx-[0.5rem] cursor-pointer rounded-[20px] flex justify-center items-center">
<p className="text-[80%]">FAQ</p>
<svg className="ml-[5px]" fill="#000000" height="30" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Zm1-4.5v2H11v-2Zm3-7a3.984,3.984,0,0,1-1.5,3.122A3.862,3.862,0,0,0,13.063,15H11.031a5.813,5.813,0,0,1,2.219-3.936A2,2,0,0,0,13.1,7.832a2.057,2.057,0,0,0-2-.14A1.939,1.939,0,0,0,10,9.5,1,1,0,0,1,8,9.5V9.5a3.909,3.909,0,0,1,2.319-3.647,4.061,4.061,0,0,1,3.889.315A4,4,0,0,1,16,9.5Z"></path></g></svg>
</Link>

{/* ///////////////////////////// How to create Ad /////////////////// */}

</div>
<div className="flex flex-col create-ad items-center mt-[2.5rem] cursor-pointer rounded-[20px] justify-center">
<p  className="text-center p-[0.5rem] mx-[0.5rem] text-[80%]">Learn how to create an effective ad</p>
</div>

<div className="flex flex-col items-center mb-[5rem]">
<button onClick={SignUserOut} className="ecommerceCard profile-details rounded-[10px] mb-[0.5rem] mt-[2rem] p-[0.5rem]">
Sign Out
</button>
</div>
</div>
</div>      ) : (
       <div className="overflow-hidden">
        <div className="flex justify-between px-6 py-4 topnav">
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
          <p className="text-2xl mt-[1rem]">Welcome</p>
          <p className="text-4xl my-2 font-bold thriftng">Thrift Shopper</p>
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

      <div className="overlay"></div>
      
         <div className="flex flex-col items-center justify-center absolute top-[30%] left-[5%] w-[90%]">
          <div className="mt-[-1rem] border login-page p-[2rem]">
            <p>LOGO</p>
            <p className="mt-[2rem] text-[2rem] mb-[0.5rem] text-bolder">
              Login
            </p>
            <p>Hello Thrift Shopper, Kindly Login to your account.</p>
            <div>
              <div
                onClick={signInWithGoogle}
                className="border sign-in-google rounded-[20px] cursor-pointer w-[100%] py-[0.3rem] mt-[2rem] flex justify-center"
              >
                <svg
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="mx-[0.5rem]"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Google-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>Sign in with Google</p>
              </div>
              <div className="flex justify-center items-center mt-[2rem]">
                <div className="w-[28%] h-[1px] bg-black"></div>
                <p className="mx-[1rem] text-[80%] motto text-xl">Buy more, Pay less</p>
                <div className="w-[28%] h-[1px] bg-black"></div>
              </div>
              {/* <EmailAndPassword /> */}
            </div>
       </div>
          </div>
        </div>
      )}
    </div>
  );
}
