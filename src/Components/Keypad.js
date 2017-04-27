import React from 'react';
import Number from './Number';
import Operator from './Operator';
import Equals from './Equals';

const Keypad = props => {
  const keypadStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '260px',
    padding: '20px'
  };
  const nHolderStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center'
  };
  const oHolderStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  let numbers = [...Array(10).keys()];
  let shifted = numbers.shift();
  numbers.push(shifted);
  numbers = numbers.map(i => (
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
    <div style={keypadStyles}>
      <div style={nHolderStyles}>
        {numbers}
        <Equals onEqualsClick={() => props.onEqualsClick()} />
      </div>
      <div style={oHolderStyles}>{operators}</div>

    </div>
  );
};

export default Keypad;
