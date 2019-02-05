import React, { Component } from 'react';

class Counter extends Component {
  render(){
    return (
      <div className="Counter">
      <p>Counter : 0</p>
      <span>
      <button type="button">Add</button>
      <button type="button">Minus</button>
      </span>
      </div>
    );
    }
}
export default Counter;