import axios from 'axios';
import React from 'react';



class App extends React.Component {
  constructor (){
    super()
    this.state={
      array:[], title:"", author:"", tweetdate:"", type:"" 
    }
  }
 handleChange=(event)=>{
   const {name, value} = event.target
   console.log(name, value)
   console.log({[name]:value})
   this.setState({[name]:value})
 }
  componentDidMount(){
    // axios.get("/bounties")
    // .then(response => {console.log(response.data)
        this.setState({array: [
          {title:"title 1", author:"author 1", tweetdate:"123", type:"fiction"},

        {title:"title 1", author:"author 1", tweetdate:"123", type:"fiction"},
        
       {title:"title 1", author:"author 1", tweetdate:"123", type:"fiction"}]})
      // })
    // .catch(error => console.log(error))
  }
  handleSubmit=(event)=>{const newtweet={title: this.state.title, author: this.state.author,tweetdate: this.state.tweetdate, type: this.state.type,}

console.log(newtweet)
// axios.post("/bounties", newtweet)
// .then(response => {console.log(response.data)
    this.setState({array: [...this.state.array, newtweet]})
  // })
// .catch(error => console.log(error))
}
  render(){  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <span>
            Log In
          </span>
          <span style={{width:"50px", margin:"25px"}}>

          </span>
          <span>
            Log Out
          </span>
        </nav>
   <div><input
          type = "text" 
          name = "title"
          value = {this.state.title}
          onChange = {this.handleChange}
          placeholder = "Title"/>
          
          <input
          type = "text" 
          name = "author"
          value = {this.state.author}
          onChange = {this.handleChange}
          placeholder = "author"/>
          
          <input
          type = "text"
          name = "tweetdate"
          value = {this.state.tweetdate}
          onChange = {this.handleChange}
          placeholder = "tweet date"/>
          
          <input
          text = "text"
          name = "type"
          value = {this.state.type}
          onChange = {this.handleChange}
          placeholder = "fiction/non-fiction"/>
          
          <button onClick = {this.handleSubmit}>Submit</button></div>
          <h1 style={{color:"fuchsia"}}>
         TWITTER whisperer
          </h1>
        {this.state.array.map((tweet, index) => {
          return(
            <div className="tweet"
                 key = {index}
                 id = {index}
            > 
              <h1>Title: { tweet.title }</h1>
              <h2>Author: { tweet.author }</h2>
              <h3>tweet date: { tweet.tweetdate }</h3>
              <h3>Type: { tweet.type }</h3>
            </div>
          )
        })}
        <p>
          <h1>
         TWITTER whisperer
          </h1>
        </p>
      </header>
    </div>
  )}
}

export default App;
