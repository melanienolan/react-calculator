import React, { Component } from 'react';

class Number extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.onNumberClick(this.props.number)}
        className="Number"
      >
        {this.props.number}
      </div>
    );
  }
}

export default Number;
