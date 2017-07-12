import React from 'react';
import PropTypes from 'prop-types';

const Equals = props => {
  const equalsStyles = {
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
    <div style={equalsStyles} onClick={props.onEqualsClick}>
      =
    </div>
  );
};

Equals.propTypes = {
  onEqualsClick: PropTypes.func
};

export default Equals;
