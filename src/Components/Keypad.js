import React from 'react';
import Number from './Number';
import Operator from './Operator';
import Equals from './Equals';
import Clear from './Clear';

const Keypad = props => {
  let numbers = [...Array(10).keys()].map(i => (
    <Number number={i} key={i} onNumberClick={i => props.onNumberClick(i)} />
  ));
  let operators = props.operators.map(i => (
    <Operator
      operator={i}
      key={i}
      onOperatorClick={i => props.onOperatorClick(i)}
    />
  ));

  return (
    <div className="Keypad">
      {numbers}
      {operators}
      <Equals onEqualsClick={() => props.onEqualsClick()} />
      <Clear onClearClick={() => props.onClearClick()} />
    </div>
  );
};

export default Keypad;
