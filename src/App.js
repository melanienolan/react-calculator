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
      operator: '',
      equalsPressed: false
    };
  }
  onNumberClick(number) {
    if (this.state.operator.length) {
      let { tempTotal } = this.state;
      tempTotal += number;
      this.setState({
        onScreen: tempTotal,
        tempTotal
      });
    } else {
      if (this.state.equalsPressed) {
        let total = '';
        total += number;
        this.setState({
          total,
          onScreen: total,
          equalsPressed: false
        });
      } else {
        let { total } = this.state;
        total = total === '0' ? '' : total;
        total += number;
        this.setState({
          total,
          onScreen: total
        });
      }
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
  onOperatorClick(op) {
    let { total, tempTotal, operator } = this.state;
    total = +total;
    tempTotal = +tempTotal;
    if (operator.length) {
      let newTotal = this.calculate(total, tempTotal, operator);
      this.setState({
        total: newTotal,
        onScreen: op,
        tempTotal: '',
        operator: op,
        equalsPressed: false
      });
    } else {
      this.setState({
        total,
        onScreen: op,
        tempTotal: '',
        operator: op,
        equalsPressed: false
      });
    }
  }
  onDecimalClick() {
    if (this.state.operator.length) {
      let { tempTotal } = this.state;
      if (tempTotal.indexOf('.') === -1) {
        tempTotal += '.';
        this.setState({
          onScreen: tempTotal,
          tempTotal: tempTotal
        });
      }
    } else {
      let { total } = this.state;
      if (total.indexOf('.') === -1) {
        total += '.';
        this.setState({
          total,
          onScreen: total
        });
      }
    }
  }
  onEqualsClick() {
    let { total, tempTotal, operator } = this.state;
    total = +total;
    tempTotal = +tempTotal;
    if (operator.length) {
      let newTotal = this.calculate(total, tempTotal, operator).toString();
      this.setState({
        total: newTotal,
        onScreen: newTotal,
        tempTotal: '',
        operator: '',
        equalsPressed: true
      });
    }
  }
  onClearClick() {
    this.setState({
      total: '0',
      onScreen: '0',
      tempTotal: '',
      operator: '',
      equalsPressed: false
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
          onDecimalClick={() => this.onDecimalClick()}
          onEqualsClick={() => this.onEqualsClick()}
        />
        <Clear onClearClick={() => this.onClearClick()} />
      </div>
    );
  }
}

export default App;
