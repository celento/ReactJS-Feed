import React from 'react';

const PostDetails = (props) =>{
  return(
    <div>

      <div className="holder">
        <p className="name">{props.data.name}</p>
        <p className="text">{props.data.text}</p>
        <img className="img" src={props.data.image}/>
      </div>

    </div>
  );
};

export default PostDetails;
