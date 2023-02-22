export function TopCard(props) {
    const {post} = props
    return ( 
    
    <div className="topcard" >
<div className="relative">
<img src={post.images} alt="Product" className="w-[165px] bg-[#c1f2c1] rounded-[10px] object-contain topimage"/>
</div>

<div className="ml-[1rem]">
<div>
<h1>#{post.price}</h1>
</div>

<div>
    <h1>{post.title}</h1>
</div>
<div className="flex justify-between w-[40vw] mt-[10%]">
    
<div>
<h1>{post.location}</h1>
</div>

</div>
    



    </div>    </div>  );
}
