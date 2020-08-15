import React from 'react';
import SuperHero from './superhero'
import './App.css';
import jokesData from "./data.json"
class App extends React.Component{
  constructor (){
    super ()
    this.state = {
      catchPhraseHide : false
    }
  }

 click=(e)=>{
  console.log(e)
 
  this.setState({
    catchPhraseHide : true
  })
}
  render(){return (
    <div className="App">

{  jokesData.map((joke, index) => {

// // var color ;
// // if (joke.timeToGo === "Winter") {
// //   color = "lightblue"
// }

    return (<>
       <SuperHero name={joke.name} show={joke.show} catchPhrase = {joke.catchPhrase} imageName = {joke.imageName} catchPhraseHide = {this.state.catchPhraseHide} click={this.click}/></>
    )
  })
}
      
    </div>

  )};
}

export default App;
