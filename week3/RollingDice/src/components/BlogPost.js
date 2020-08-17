import React from 'react';


function BlogPost(props) {
  return (
    <div className="BlogPost"style = {{backgroundColor: props.color}}>
     <h1>{props.title}</h1>
     <h1>{props.subtitle}</h1>
     <h1>{props.author}</h1>
     <h1>{props.date}</h1>
    </div>
  );
}

export default BlogPost;
