export function EcommerceCard (props) {
    const {post} = props

    console.log(post.title)
    return ( <div className="border">
<div>
<img src={post.images} alt="Product" className="w-[200px]"/>
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

