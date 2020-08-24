import React from 'react';

import BadgeForm from "./BadgeForm"
import BadgeList from "./Badgelist"
class App extends React.Component {
  constructor(){
    super()
  this.state={array:[]}
}
addOne=(obj) => {
this.setState({
  array:[obj,...this.state.array]
})
}
  render(){return (<div className="App">
     <BadgeForm addOne={this.addOne}/>
     <BadgeList array={this.state.array}/>
    </div>
  )}
}

export default App;
