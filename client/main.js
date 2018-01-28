 import React from 'react';
 import ReactDOM from 'react-dom';
 import Post from './components/posts';
 const App = () =>{
   return(
     <div>
      <Post/>
     </div>
   );
 };

Meteor.startup( ()=>{
  ReactDOM.render(<App />, document.querySelector('.container'));
});
