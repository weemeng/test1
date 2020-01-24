import React from 'react';
import { render, fireEvent} from '@testing-library/react';
// import App from '../App';
import Counter from "./Counter"

describe("Counter", () => {
  it("should render with Counter Value as 0 when initialised ",() => {
    const { getByText } = render(<Counter />);
    const counterValue = getByText("Counter Value: 0");
    expect(counterValue).toBeInTheDocument();

  })

  it("should render +1 button when initialised",() => {
    const {getByText} = render(<Counter />);
    const incrementButton = getByText("+1")
    expect(incrementButton).toBeInTheDocument();
  })

  it("should increment Counter Value after mouseclick on incrementbutton", () => {
    const {getByText} = render(<Counter />);
    const incrementButton = getByText("+1")
    fireEvent.click(incrementButton);
    const counterValue = getByText("Counter Value: 1")
    expect(counterValue).toBeInTheDocument();
  })

});
