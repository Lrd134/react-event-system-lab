import React, {Component} from 'react';

// Code EyesOnMe Component Here

export default class EyesOnMe extends Component {

  handleFocus = () => {
    console.log('Good!');
  }
  handleBlur = () => {
    console.log('Hey! Eyes on me!');
  }
  render(){
    return (
      <button className="eyesOnMe"
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}>Eyes On Me!</button>
    )
  }
}