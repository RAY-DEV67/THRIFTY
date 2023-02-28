// import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate"

export function EcommerceCard (props) {
    const {post} = props


    return ( 
    
   <div className="flex flex-col items-center">
     <div className="ecommerceCard w-[95%] flex rounded-[10px]">
<div className="w-[40%]">
<img src={post.images} alt="Product" className="rounded-[10px] h-[162px]"/>
</div>

<div className="w-[60%]">
<div className="ml-[1rem]">
<div>
<h1 className="text-[#00CC00] mt-[0.5rem]">#{post.price}</h1>
</div>

<div>
    <h1>{post.title}</h1>
</div>

<div>
<h1 className="mt-[1rem] productgender w-[50%] text-center rounded-[10px]">{post.gender}</h1>
</div>
    
<div className="flex mt-[2rem] mb-[0.5rem] items-center ">
<svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="10" r="3" stroke="#00cc00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z" stroke="#00cc00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
<h1 className="ml-[0.3rem]">{post.location}</h1>
</div>

</div>
    



    </div>    </div> 
   
   </div>  );
}

