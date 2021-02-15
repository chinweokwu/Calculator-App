import React from 'react';
import Display from './display';
import ButtonPanel from './buttonpanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  // handleClick = buttonName => {
  //   this.setState(previous => {
  //     Calculate(previous, buttonName);
  //   });
  // }

  render() {
    const { total, next } = this.state;
    return (
      <>
        {/* <Display result={total ?? next} />
        <ButtonPanel handleClick={this.handleClick} /> */}
      </>
    );
  }
}

export default App;
