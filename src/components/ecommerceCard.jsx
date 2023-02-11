export function EcommerceCard (props) {
    const {post} = props
    return ( <div className="border w-[45%]">
<div>
<img src={post.images} alt="Product" className="w-[300px] h-[300px]"/>
</div>

<div>
<h1>#{post.price}</h1>
</div>

<div>
    <h1>{post.title}</h1>
</div>

<div>
<h1>{post.location}</h1>
</div>

<div>
<h1>{post.gender}'s</h1>
</div>



    </div> );
}

