import React from 'react';


function File(props) {
  return (
    <div className="File">
      <header className="File-header">{
          props.title

      }
    
        <p>
          {
              props.subtitle
          }
        </p>
        <a style = {{backgroundColor: props.color}}
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
