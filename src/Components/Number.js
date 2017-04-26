import React from 'react';

const Number = props => {
  return (
    <div onClick={() => props.onNumberClick(props.number)} className="Number">
      {props.number}
    </div>
  );
};

export default Number;
