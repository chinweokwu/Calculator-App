import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home';

describe('Snapshot test', () => {
  test('Snapshot for Home component', () => {
    const renderedComponent = renderer.create(<Home />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
