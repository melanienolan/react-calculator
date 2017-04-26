import React from 'react';

const Equals = props => {
  return (
    <div className="Equals" onClick={() => props.onEqualsClick()}>
      =
    </div>
  );
};

export default Equals;
