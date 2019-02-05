import React, { Component } from 'react';

class Button extends Component {
  render(){

    return (
      <button type="button" onClick={this.props.onClick}>{this.props.buttonText}</button>
    );
    }
}
export default Button;