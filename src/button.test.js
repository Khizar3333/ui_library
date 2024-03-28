import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // Use React Testing Library
import Button from './components/Button'; // Assuming Button component is in a separate file

describe('Button component', () => {
  it('renders the button text correctly', () => {
    const buttonText = 'Click Me';
    const { getByText } = render(<Button text={buttonText} />);

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  }); // <-- Added closing parenthesis for the `it` block
});
it('triggers the onClick handler and logs a message on click', () => {
    const mockConsoleLog = jest.spyOn(console, 'log'); // Spy on console.log
    const buttonText = 'Click Me';
    const { getByText } = render(<Button text={buttonText} />);

    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);

    expect(mockConsoleLog).toHaveBeenCalledWith('Button clicked!'); // Verify logged message
  });