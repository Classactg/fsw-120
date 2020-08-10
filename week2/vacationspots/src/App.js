import React from 'react';
import File from './file'
import './App.css';
import jokesData from "./data"
function App() {


  return (
    <div className="App">

{  jokesData.map((joke, index) => {

var color ;
if (joke.timeToGo === "Winter") {
  color = "lightblue"
}

    return (
      <File title={joke.place} subtitle={joke.timeToGo} information = {joke.price} color = {color}/>
    )
  })
}
      
    </div>

  );
}

export default App;
