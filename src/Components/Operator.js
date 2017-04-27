import React from 'react';

const Operator = props => {
  const operatorStyles = {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '2px',
    backgroundColor: 'honeydew',
    fontSize: '20px'
  };
  return (
    <div
      style={operatorStyles}
      onClick={() => props.onOperatorClick(props.operator)}
    >
      {props.operator}
    </div>
  );
};

export default Operator;
