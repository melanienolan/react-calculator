import React, { Component } from 'react';
import Number from './Number';
import Operator from './Operator';
import Equals from './Equals';
import Clear from './Clear';

class Keypad extends Component {
  render() {
    let numbers = [...Array(10).keys()].map(i => (
      <Number
        number={i}
        key={i}
        onNumberClick={i => this.props.onNumberClick(i)}
      />
    ));
    let operators = this.props.operators.map(i => (
      <Operator
        operator={i}
        key={i}
        onOperatorClick={i => this.props.onOperatorClick(i)}
      />
    ));

    return (
      <div className="Keypad">
        {numbers}
        {operators}
        <Equals onEqualsClick={() => this.props.onEqualsClick()} />
        <Clear onClearClick={() => this.props.onClearClick()} />
      </div>
    );
  }
}

export default Keypad;
