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

class App extends React.Component {
  constructor(){
    super()
    this.state={
      classStyle:"redColor"
    }
  }
  changeClassStyle=()=>{
    if(this.state.classStyle==="redColor")
    this.setState({classStyle:"blueColor"})
    else{
      this.setState({classStyle:"redColor"})
    }
  }
render(){
  return 
    <div id="main">
    <p className={this.state.classStyle}>Newton School </p>
    <button id='button' onClick={this.changeClassStyle}>change style</button>
    </div>
  }
}

export default App;