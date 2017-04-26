import React, { Component } from 'react';
import Screen from './Components/Screen';
import Keypad from './Components/Keypad';
import './App.css';

const operators = ['+', '-', '*', '/'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '',
      onScreen: '',
      tempTotal: ''
    };
  }
  onNumberClick(number) {
    let total = (this.state.total += number);
    let tempTotal = (this.state.tempTotal += number);
    this.setState({
      total: total,
      onScreen: tempTotal,
      tempTotal: tempTotal
    });
  }
  isValidQuery(x) {
    if (
      typeof Number(x[0]) === 'number' &&
      typeof Number(x[x.length - 1]) === 'number'
    ) {
      return true;
    }
  }
  onOperatorClick(operator) {
    let total = this.state.total;
    if (this.isValidQuery(total)) {
      total = eval(total).toString();
      total = total += operator;
      this.setState({
        total: total,
        onScreen: operator,
        tempTotal: ''
      });
    }
  }
  onEqualsClick() {
    let total = this.state.total;
    total = eval(total).toString();
    this.setState({
      total: total,
      onScreen: total,
      tempTotal: ''
    });
  }
  onClearClick() {
    this.setState({
      total: '',
      onScreen: '',
      tempTotal: ''
    });
  }
  render() {
    return (
      <div className="App">
        <Screen display={this.state.onScreen} />
        <Keypad
          operators={operators}
          onNumberClick={number => this.onNumberClick(number)}
          onOperatorClick={operator => this.onOperatorClick(operator)}
          onEqualsClick={() => this.onEqualsClick()}
          onClearClick={() => this.onClearClick()}
        />
      </div>
    );
  }
}

export default App;
