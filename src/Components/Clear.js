import React, { Component } from 'react';

class Clear extends Component {
  render() {
    return (
      <div className="Clear" onClick={() => this.props.onClearClick()}>
        AC
      </div>
    );
  }
}

export default Clear;
