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
  flexDirection: 'column'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '',
      onScreen: '',
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
      let total = this.state.total;
      total += number;
      this.setState({
        total: total,
        onScreen: total
      });
    }
  }
  isValidQuery(x) {
    if (
      typeof Number(x[0]) === 'number' &&
      typeof Number(x[x.length - 1]) === 'number'
    ) {
      return true;
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
    if (this.state.operator.length) {
      let value1 = Number(this.state.total);
      let value2 = Number(this.state.tempTotal);
      let op = this.state.operator;
      let newTotal = this.calculate(value1, value2, op);
      this.setState({
        total: newTotal,
        onScreen: operator,
        tempTotal: '',
        operator: operator
      });
    } else {
      let total = this.state.total;
      if (this.isValidQuery(total)) {
        total = Number(total);
        this.setState({
          total: total,
          onScreen: operator,
          tempTotal: '',
          operator: operator
        });
      }
    }
  }
  onEqualsClick() {
    if (this.state.operator.length) {
      let value1 = Number(this.state.total);
      let value2 = Number(this.state.tempTotal);
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
      total: '',
      onScreen: '',
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
