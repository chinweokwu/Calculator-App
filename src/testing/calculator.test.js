import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});

const clickButton = regexp => userEvent.click(screen.getByText(regexp), { button: 0 });

beforeEach(() => {
  render(<Calculator />);
});

describe('Calculator component', () => {
  it('Displays a value of 0 as the initial value', () => {
    expect(screen.getAllByText(/0/)).toHaveLength(2);
  });

  it('Displays when a number is clicked', () => {
    clickButton(/5/);
    clickButton(/8/);

    expect(screen.getByText(/58/)).toBeInTheDocument();
  });

  it('Displays the operator sign when clicked', () => {
    clickButton(/5/);
    clickButton(/\+\//);

    expect(screen.getAllByText(/\+/)).toHaveLength(2);
  });

  it('Changes the sign of displayed number when "+/-" is clicked', () => {
    clickButton(/2/);
    clickButton(/3/);
    clickButton(/\+\/-/);

    expect(screen.getByText(/-23/)).toBeInTheDocument();
  });

  it('Converts the number into a percentage when clicked', () => {
    clickButton(/9/);
    clickButton(/6/);
    clickButton(/0/);
    clickButton(/%/);

    expect(screen.getByText(/9.6/)).toBeInTheDocument();
  });

  it('Sets the current number to 0 when "AC" is clicked', () => {
    clickButton(/7/);
    clickButton(/8/);
    clickButton(/AC/);

    expect(screen.getAllByText(/0/)).toHaveLength(2);
  });

  it('Performs the operation and displays result when "=" is clicked', () => {
    clickButton(/3/);
    clickButton(/X/);
    clickButton(/7/);
    clickButton(/=/);

    expect(screen.getByText(/21/)).toBeInTheDocument();
  });

  it('Does not follow chains operations', () => {
    clickButton(/8/);
    clickButton(/\+\//);
    clickButton(/2/);
    clickButton(/X/);
    clickButton(/5/);
    clickButton(/=/);

    expect(screen.getByText(/10/)).toBeInTheDocument();
  });
});
