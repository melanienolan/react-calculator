import React from 'react';

const Clear = props => {
  return (
    <div className="Clear" onClick={() => props.onClearClick()}>
      AC
    </div>
  );
};

export default Clear;
