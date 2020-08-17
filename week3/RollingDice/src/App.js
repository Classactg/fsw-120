import React, {Component} from 'react';

import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      numberOfDice: 0,
      rollAllDice: 0,
      rolls: [],
      rollSum: 0,

    }}
    
diceRoll = numberOfDice => {
  let rolls = []
  let rollSum = 0
  for (let i = 0; i < numberOfDice; i ++) {
    rolls [i] = Math.floor (Math.random() * 6) + 1
    console.log(numberOfDice, "numberOfDice")
    console.log(rolls, "rolls")
    rollSum += rolls [i]
    console.log(rollSum, "rollSum") 
  }

  this.setState({
    numberOfDice,
    rolls,
    rollSum
  })
}
buildDice = (roll) => {
  let imageUrl = ""
  if (roll === 1) {
  imageUrl = "https://raw.githubusercontent.com"
}
  else if (roll === 2){
  imageUrl = "https://raw.githubusercontent.com"
}
  else if (roll === 3){
  imageUrl = "https://raw.githubusercontent.com"
}
  else if (roll === 4){
  imageUrl = "https://raw.githubusercontent.com"
}
  else if (roll === 5){
  imageUrl = "https://raw.githubusercontent.com"
}
  else if (roll === 6){
  imageUrl = "https://raw.githubusercontent.com"
}
return (
  <img
  className = "dice-images"
  source = {imageUrl}
  alt = "dice"/>
)
}

render() {
  return(
    <div className = "App" >
      <h1>High Roller!</h1>
      {
        [1, 2, 3, 4, 5,].map(number => {
          let text = number === 1 ? "die" : "dice"; 
          return(
            <button key = {number} onClick = {()=> this.diceRoll(number=5)}
            className="btn-all">Roll All</button>,
            <button key = {number} onClick = {()=> this.diceRoll(number)}
            className="button">{number} {text}</button>
          )
        })
      }
      <div>
        {
          this.state.rolls.map((roll) => {
            return this.buildDice(roll)
          })
        }
      </div>
    </div>
  )
}
}
export default App;
