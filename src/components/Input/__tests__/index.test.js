import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { InputComponent } from "..";

describe("InputComponent", () => {
  it("check render input component with placeholder props", () => {
    const placeholderText = "Enter your name";

    render(<InputComponent placeholder={placeholderText} />);

    const inputElement = screen.getByPlaceholderText(placeholderText);

    expect(inputElement).toBeInTheDocument();
  });

  it("check call onChange callback when change value", () => {
    const mockOnChange = jest.fn();

    render(<InputComponent name="firstName" onChange={mockOnChange} />);

    const inputElement = screen.getByRole("textbox");
    const newValue = "Khanh";

    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(mockOnChange).toHaveBeenCalledWith("firstName", newValue);
  });
  it('check show error feedback when input is error', async () => {
    const invalidMessage = 'The email is required';
    render(<InputComponent invalid={invalidMessage} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.blur(inputElement);
    await waitFor(() => {
      const feedbackElement = screen.getByText(invalidMessage);
      expect(feedbackElement).toBeInTheDocument();
    });
  });
});
