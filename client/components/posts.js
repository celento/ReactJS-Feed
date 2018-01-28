import React from 'react';
import PostDetails from './post_detail';


// Array to store the contents of the post. (For Static Contents)
 const CONTENTS = [
   {id:'983902138',name:'Celento',text:'Hello World React JS is awesome.',image:'https://dummyimage.com/500x400/000/fff'},
   {id:'239203309',name:'Dave',text:'Everything at once.',image:'https://dummyimage.com/500x400/fff/000'},
   {id:'787429899',name:'Jack',text:'The day is quite windy.',image:'https://dummyimage.com/500x400/000/fff'},

 ];
const Post = () => {
 
const POSTS = CONTENTS.map(details => {
  return <PostDetails key={details.id} data={details}/>
});

  return (
     <div>
     {POSTS}
     </div>
  );
};

export default Post;
