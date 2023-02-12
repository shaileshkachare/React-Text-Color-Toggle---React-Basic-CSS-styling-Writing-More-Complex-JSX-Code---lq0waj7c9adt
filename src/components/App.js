// import React, {useEffect, useState} from 'react'
// import '../styles/App.css';

// const App = () => {
// //code here 
//   return (
//     <div id="main">
//       <p className={} >Newton School</p>
//       <button id='button' onClick={}>Change Style</button>
//     </div>
//   )
// }


// export default App;

import React, {Component} from "react";
import { render } from "react-dom";
import '../styles/App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      classStyle:"redcolor"
    }
  }
  changeClassStyle=()=>{
    if(this.state.classStyle==="redcolor")
    this.setState({classStyle:"bluecolor"})
    else{
      this.setState({classStyle:"redcolor"})
    }
  }
render(){
  return 
    <div id="main">
    <p className={this.state.classStyle}>Newton School </p>
    <button id='butten' onclick={this.channgeClassStyle}>change style</button>
    </div>
  }
}

export default App;