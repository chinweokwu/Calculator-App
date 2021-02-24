import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './calculator';
import Navbar from './navbar';
import Home from './home';
import Quotes from './quotes';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quotes} />
      <Route path="/" component={Home} />
    </Switch>

  </div>

);

export default App;
