import React from 'react';


function BlogPost(props) {
  return (
    <div className="BlogPost"style = {{backgroundColor: props.color}}>
      <header className="BlogPost-header">{
          props.title

      }
    
        <p>
          {
              props.subtitle
          }
        </p>
        <a 
          className="BlogPost-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         {
             props.information
         }
        </a>
      </header>
    </div>
  );
}

export default BlogPost;
