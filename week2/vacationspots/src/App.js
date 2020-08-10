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

     {/* <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "blue"
      />
      <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "red"
      />
      <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "yellow"
      />
       <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "orange"
      />
       <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "green"
      />
       <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "purple"
      />
       <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "brown"
      /> <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "pink"
      /> <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "lightblue"
      />
       <File
      title = "Color Me Box"
      subtitle = "Adventure Awaits!!"
      information = "Shows different arrays of color"
      color = "lightgreen"
      /> */}
      
    </div>

  );
}

export default App;
