import React from 'react';

const Clear = props => {
  const clearStyles = {
    width: '90%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: 'plum',
    fontSize: '20px',
    color: 'white'
  };
  return (
    <div style={clearStyles} onClick={props.onClearClick}>
      AC
    </div>
  );
};

export default Clear;
