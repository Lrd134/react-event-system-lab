import React, {Component} from 'react';
// Code Keypad Component Here

export default class Keypad extends Component {

  handleKeyUp = (eventInfo) => {
    console.log("Entering password...");
  }
  render(){
    return (
      <input className="keypad" type="password" onKeyUp={this.handleKeyUp}/>
    )
  }
}