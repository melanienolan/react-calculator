import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return <div className="Screen">{this.props.display}</div>;
  }
}

export default Screen;
