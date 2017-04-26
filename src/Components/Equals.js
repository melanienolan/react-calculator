import React, { Component } from 'react';

class Equals extends Component {
  render() {
    return (
      <div className="Equals" onClick={() => this.props.onEqualsClick()}>
        =
      </div>
    );
  }
}

export default Equals;
