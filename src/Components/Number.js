import React from 'react';
import PropTypes from 'prop-types';

const Number = props => {
  const numberStyles = {
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
    <div style={numberStyles} onClick={() => props.onNumberClick(props.number)}>
      {props.number}
    </div>
  );
};

Number.propTypes = {
  onNumberClick: PropTypes.func,
  number: PropTypes.num
};

export default Number;
