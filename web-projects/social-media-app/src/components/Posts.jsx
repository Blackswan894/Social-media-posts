import React, { useState } from "react";
import Comments from './Comments';

export default function Posts(props){

    const [likes, setLikes] = useState(0);

    function handleLike(){
        setLikes = (likes + 1);
    }
return(
<div>
<h3>{props.content}</h3>
<p>This is a test post to be edited</p>
<p>Likes: 30</p>
<button onClick={handleLike}>Likes</button>
<p>Comments: </p>
<Comments content="This is a test comment!"/>
<Comments content="This is another test comment!"/>
<Comments content="This is yet another test comment!"/>
</div>

)    
}
