import React from 'react';
import Display from './display';
import ButtonPanel from './buttonpanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '0',
    };
  }

  buttonPressed = buttonName => {
    this.setState(prev => ({
      results: prev.results + buttonName,
    }));
  }

  render() {
    const { results } = this.state;
    return (
      <>
        <Display results={results} />
        <ButtonPanel clickHandler={this.buttonPressed} />
      </>
    );
  }
}

export default App;
