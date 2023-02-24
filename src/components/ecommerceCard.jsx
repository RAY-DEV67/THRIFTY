// import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate"

export function EcommerceCard (props) {
    const {post} = props


    return ( 
    
    <div className="border ecommerceCard w-[90vw] flex rounded-[10px]">
<div className="relative">
<img src={post.images} alt="Product" className="w-[200px] object-contain rounded-[10px] h-[150px]"/>
</div>

<div className="ml-[1rem]">
<div>
<h1 className="text-[#00CC00]">#{post.price}</h1>
</div>

<div>
    <h1>{post.title}</h1>
</div>
<div className="flex justify-between w-[40vw] mt-[30%]">
    
<div>
<h1>{post.location}</h1>
</div>

<div>
<h1>{post.gender}'s</h1>
</div>
</div>
    



    </div>    </div> 
     );
}

