import React from 'react';

const Equals = props => {
  const equalsStyles = {
    width: '104px',
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
    <div style={equalsStyles} onClick={() => props.onEqualsClick()}>
      =
    </div>
  );
};

export default Equals;
