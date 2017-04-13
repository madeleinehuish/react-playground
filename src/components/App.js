import React, { Component } from 'react';
import InputBar1 from './inputBar1';
import InputBar2 from './inputBar2';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appTerm: '',
      testValue: 'Bob'
    };
  }

  onInput2Change(event) {
    console.log(event.target.value);
    this.setState({ appTerm : event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Maddie's Kookie React Test App</h2>
        </div>
        <p className="App-intro">
          Playing, playing, playing with React!
        </p>
        <InputBar1 />
        <InputBar2
          appTerm={this.state.appTerm}
          onInput2Change={event => this.onInput2Change(event)}
          testValue={this.state.testValue}
        />
      </div>
    );
  }
}

export default App;
