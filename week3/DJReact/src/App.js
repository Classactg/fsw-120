import React from "react";
import Square from "./Square";

const DEFAULT_COLOR = "white"
class App extends React.Component {
  constructor () {
    super()
    this.state = 
    {
      Square1: {color:DEFAULT_COLOR},
      Square2: {color:DEFAULT_COLOR},
      Square3: {color:DEFAULT_COLOR},
      Square4: {color:DEFAULT_COLOR}
    }
  }
  onChangeColorEvent = (event) => {
    const currentSquare = 'Square' + event.target.id;
    this.setState((previousState) => {
      return {...previousState, [currentSquare]: {
          color: this.getRandomColor()}}
    });
  }

  blackOrWhite = () => {
  if (this.state.Square1.color === "white") {
    return (
      this.setState({Square1: {color:"black"}}),
      this.setState({Square2: {color:"white"}}),
      this.setState({Square3: {color:"white"}}),
      this.setState({Square4: {color:"black"}})
    )
  }
  if (this.state.Square1.color !== "white"){
    return (
      this.setState({Square1: {color:"white"}}),
      this.setState({Square2: {color:"black"}}),
      this.setState({Square3: {color:"black"}}),
      this.setState({Square4: {color:"white"}})
    )
  }
  }
  pink = () => {
    return(
      this.setState({Square1: {color:"pink"}}),
      this.setState({Square2: {color:"pink"}})
    )
  }
  blue = (event) => {
    const currentSquare = 'Square' + event.target.id
    return (
      this.setState({[currentSquare]:{color:"blue"}}))
  
  }
  getRandomColor=() => {
    let randomColor = Math.random()
    if (randomColor <= 0.1) {
      return "Yellow"
    } 
    if (randomColor > 0.1 && randomColor < 0.3) {
      return "Green" 
    }
    if (randomColor > 0.3 && randomColor < 0.5) {
      return "Red" 
    }
    if (randomColor > 0.5 && randomColor < 0.7) {
      return "BlueViolet" 
    }
    if (randomColor >= 0.7 ) {
      return "Orange"
    }
  }
  render (){
    return(
      <div>
        <div className = "gridContainer">
          <Square color = {this.state.Square1.color} />
          <Square color = {this.state.Square2.color} />
        </div>
     
        <div className = "gridContainer">
        <Square color = {this.state.Square3.color} />
        <Square color = {this.state.Square4.color} />
      </div>
      <div className = "gridContainer">
        <button id= "1" className = "button" onClick = {this.blackOrWhite}>
          Small Time DJ
        </button>
        <button id= "2" className = "button" onClick = {this.pink}>
          Party Time DJ
        </button>
        <button id= "3" className = "button" onClick = {this.blue}>
          Professional DJ Left</button>
          <button id= "4" className = "button" onClick = {this.seagreen}>
          Professional DJ Right</button>
      </div>
      <div className = "gridContainer">
        <button id = "1" className = "button" onClick = {this.onChangeColorEvent}>
          Big Time DJ One
        </button>
        <button id = "2" className = "button" onClick = {this.onChangeColorEvent}>
          Big Time DJ Two
        </button>
        <button id = "3" className = "button" onClick = {this.onChangeColorEvent}>
          Big Time DJ Three
        </button>  
        <button id = "4" className = "button" onClick = {this.onChangeColorEvent}>
          Big Time DJ Four
        </button>
      </div>
      </div>
    )
  }
}


export default App;
