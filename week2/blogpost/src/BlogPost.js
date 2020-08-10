import React from 'react';


function File(props) {
  return (
    <div className="File"style = {{backgroundColor: props.color}}>
      <header className="File-header">{
          props.title

      }
    
        <p>
          {
              props.subtitle
          }
        </p>
        <a 
          className="File-link"
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

export default File;
