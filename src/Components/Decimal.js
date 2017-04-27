import React from 'react';

const Decimal = props => {
  const decimalStyles = {
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
    <div style={decimalStyles} onClick={props.onDecimalClick}>
      .
    </div>
  );
};

export default Decimal;
