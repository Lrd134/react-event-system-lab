import React, {Component} from 'react';
// Code Keypad Component Here

export default class Keypad extends Component {

  handleKeyUp = (eventInfo) => {
    const eventInputValue = eventInfo.target.value; //  This throws an error when running npm test.
    console.log('Password is ' + eventInputValue);  //  This is expected to be what is 
                                                    //  entered into the keypad textbox.
    console.log("Entering password...");
  }
  render(){
    return (
      <input className="keypad" type="password" onKeyUp={this.handleKeyUp}/>
    )
  }
}
