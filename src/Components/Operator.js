import React, { Component } from 'react';

class Operator extends Component {
  render() {
    return (
      <div
        className="Operator"
        onClick={() => this.props.onOperatorClick(this.props.operator)}
      >
        {this.props.operator}
      </div>
    );
  }
}

export default Operator;
