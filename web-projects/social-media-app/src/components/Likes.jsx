import React from 'react';
import Comments from './Comments';
function Post(){
return(
<div>
<h3>Test Post</h3>
<p>This is a test post we'll edit later!</p>
<p>Likes: 30</p>
<button className='like-button'>Like</button>
<p>Comments:</p>
<Comments content="This is a test comment!" />
<Comments content="This is another test comment!" />
<Comments content="This is yet another test comment!" />
</div>
)
}
