import React, { Component } from 'react';
import './App.css';
import Button from './../Button/index';

class Counter extends Component {
  state = {
    counter : this.props.initialValue,
  }
  increamentCounter = () => this.setState({counter: this.state.counter + 1});
  decreamentCounter = () => this.setState({counter: this.state.counter - 1});
  render(){
    return (
      <div className="Counter">
      <p>Counter : {this.state.counter}</p>
      <span>
      <Button buttonText="Increment" onClick={this.increamentCounter}/>
      <Button buttonText="Decreament" onClick={this.decreamentCounter}/>
      </span>
      </div>
    );
    }
}
export default Counter;