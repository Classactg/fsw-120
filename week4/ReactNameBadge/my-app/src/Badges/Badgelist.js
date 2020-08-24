import React from 'react';


import Badgecard from "./Badgecard"
import BadgeCard from './Badgecard';
class BadgeList extends React.Component {
//   constructor(){
//     super()
//   this.state={array:[]}
// }
// addOne=(obj) => {

// }
  render(){return (<div className="BadgeList">
     {this.props.array.map((Badge, index)=><BadgeCard {...Badge}/>)}
     {/* <Badgecard array={""}/> */}
    </div>
  )}
}

export default BadgeList;