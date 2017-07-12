import React from 'react';
import PropTypes from 'prop-types';

const Screen = props => {
  const screenStyles = {
    height: '60px',
    width: '90%',
    border: '1px solid grey',
    borderRadius: '10px',
    backgroundColor: 'whitesmoke',
    padding: '10px',
    textAlign: 'right',
    fontSize: '30px',
    lineHeight: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  return (
    <div style={screenStyles}>
      {props.display}
    </div>
  );
};

Screen.propTypes = {
  display: PropTypes.string
};

export default Screen;
