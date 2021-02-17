import React from 'react';
import Display from './display';
import ButtonPanel from './buttonpanel';
import Calculate from '../logic/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  buttonPressed = buttonName => {
    this.setState(prevState => Calculate(prevState, buttonName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={next || operation || total || '0'} />
        <ButtonPanel clickHandler={this.buttonPressed} />
      </>
    );
  }
}

export default App;
