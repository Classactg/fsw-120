import React from 'react';


function SuperHero(props) {
  return (
    <div className="SuperHero
  ">
      <header className="SuperHero
    -header">{props.name}
    <p>{props.show}</p>
        {(props.catchPhraseHide?<h1>{props.catchPhrase}</h1>:<button onClick={(e)=>{props.click(e)}}>Catch Phrase Here!</button>)}
        <img src={props.imageName}>
          </img> 
      </header>
    </div>
  );
}

export default SuperHero;


