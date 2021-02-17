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
    };
  }

  buttonPressed = buttonName => {
    this.setState(prevState => Calculate(prevState, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={next ?? total} />
        <ButtonPanel clickHandler={this.buttonPressed} />
      </>
    );
  }
}

export default App;
