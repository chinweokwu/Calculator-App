import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/quotes';

describe('Snapshot test', () => {
  test('Snapshot for Quotes component', () => {
    const renderedComponent = renderer.create(<Quote />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
