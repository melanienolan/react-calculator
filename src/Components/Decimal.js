import React from 'react';
import PropTypes from 'prop-types';

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

Decimal.propTypes = {
  onDecimalClick: PropTypes.func
};

export default Decimal;
