import React, { Component } from 'react';
import NameList from "./NameList"
class App extends Component {
  constructor() {
    super()
    this.state = {
      name:"",
      NameList:[]
    }
  }
  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      name:event.target.value
    })
    
  }
handleNameList=(event) => {
  event.preventDefault()
  this.setState({
    NameList:this.state.NameList.concat(this.state.name), name:""
  })
} 
  render () {
    return (
      <div>
        <form>
          <input 
            type="text" 
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            value={this.state.name}/> 
            <h1>{this.state.name}</h1>
          <button onClick={this.handleNameList}>Submit</button>
        </form>
        <NameList text={this.state.NameList}/>
      </div>
    )
  
  }
}
export default App;


// What I'll need is a new component, which I'll have to import into App.js. From there I'll need to figure out how to create an empty item. And figure how to push <li> items into ordered <ol>
