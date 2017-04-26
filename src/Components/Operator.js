import React from 'react';

const Operator = props => {
  return (
    <div
      className="Operator"
      onClick={() => props.onOperatorClick(props.operator)}
    >
      {props.operator}
    </div>
  );
};

export default Operator;
