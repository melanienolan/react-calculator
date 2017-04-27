import React, { Component } from 'react';
import Screen from './Components/Screen';
import Keypad from './Components/Keypad';
import Clear from './Components/Clear';
import './App.css';

const operators = ['+', '-', '*', '/'];

const appStyles = {
  backgroundColor: 'thistle',
  width: '300px',
  margin: '50px auto',
  padding: '10px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      onScreen: '0',
      tempTotal: '',
      operator: ''
    };
  }
  onNumberClick(number) {
    if (this.state.operator.length) {
      let tempTotal = this.state.tempTotal;
      tempTotal += number;
      this.setState({
        onScreen: tempTotal,
        tempTotal: tempTotal
      });
    } else {
      let total = this.state.total === '0' ? '' : this.state.total;
      total += number;
      this.setState({
        total: total,
        onScreen: total
      });
    }
  }
  calculate(value1, value2, op) {
    if (op === '+') {
      return value1 + value2;
    }
    if (op === '-') {
      return value1 - value2;
    }
    if (op === '*') {
      return value1 * value2;
    }
    if (op === '/') {
      return value1 / value2;
    }
  }
  onOperatorClick(operator) {
    let total = +this.state.total;
    if (this.state.operator.length) {
      let tempTotal = +this.state.tempTotal;
      let op = this.state.operator;
      let newTotal = this.calculate(total, tempTotal, op);
      this.setState({
        total: newTotal,
        onScreen: operator,
        tempTotal: '',
        operator: operator
      });
    } else {
      this.setState({
        total: total,
        onScreen: operator,
        tempTotal: '',
        operator: operator
      });
    }
  }
  onEqualsClick() {
    if (this.state.operator.length) {
      let value1 = +this.state.total;
      let value2 = +this.state.tempTotal;
      let op = this.state.operator;
      let newTotal = this.calculate(value1, value2, op);
      this.setState({
        total: newTotal,
        onScreen: newTotal,
        tempTotal: '',
        operator: ''
      });
    }
  }
  onClearClick() {
    this.setState({
      total: '0',
      onScreen: '0',
      tempTotal: '',
      operator: ''
    });
  }
  render() {
    return (
      <div style={appStyles}>
        <Screen display={this.state.onScreen} />
        <Keypad
          operators={operators}
          onNumberClick={number => this.onNumberClick(number)}
          onOperatorClick={operator => this.onOperatorClick(operator)}
          onEqualsClick={() => this.onEqualsClick()}
        />
        <Clear onClearClick={() => this.onClearClick()} />
      </div>
    );
  }
}

export default App;
