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
  let imageUrl;
  if (roll === 1) {
  imageUrl = "https://raw.githubusercontent.com/Classactg/fsw-120/master/week3/RollingDice/src/components/dice%201.jpg"
}
  else if (roll === 2){
  imageUrl = "https://raw.githubusercontent.com/Classactg/fsw-120/master/week3/RollingDice/src/components/dice%202.jpg"
}
  else if (roll === 3){
  imageUrl = "https://raw.githubusercontent.com/Classactg/fsw-120/master/week3/RollingDice/src/components/dice%203.jpg"
}
  else if (roll === 4){
  imageUrl = "https://raw.githubusercontent.com/Classactg/fsw-120/master/week3/RollingDice/src/components/dice%204.jpg"
}
  else if (roll === 5){
  imageUrl = "https://raw.githubusercontent.com/Classactg/fsw-120/master/week3/RollingDice/src/components/dice%205.jpg"
}
  else if (roll === 6){
  imageUrl = "https://raw.githubusercontent.com/Classactg/fsw-120/master/week3/RollingDice/src/components/dice%206.jpg"
}
return (<div>{roll}
  <img
  className = "dice-images"
  src = {imageUrl}/>
</div>)
}

render() {let color = "yellow"
if (this.state.numberOfDice === 1){color = "red"}
else if (this.state.numberOfDice === 2){color = "green"}
else if (this.state.numberOfDice === 3){color = "black"}
else if (this.state.numberOfDice === 4){color = "purple"}
else if (this.state.numberOfDice === 5){color = "blue"}
  return(
    <div className = "App" >
      <h1 style={{color}}>High Roller!</h1>
      {
        [1, 2, 3, 4, 5,].map(number => {
          let text = number === 1 ? "die" : "dice"; 
          return(
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
