import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodos = jest.fn();

test("renders input element", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  const inputElement = screen.getByPlaceholderText(/add a new task here/i);
  expect(inputElement).toBeInTheDocument();
});

test("should be able to type into input", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  const inputElement = screen.getByPlaceholderText(/add a new task here/i);

  fireEvent.change(inputElement, {
    target: {
      value: "Wash the car",
    },
  });

  expect(inputElement.value).toBe("Wash the car");
});

test("should be empty when add button is clicked", () => {
  render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  const inputElement = screen.getByPlaceholderText(/add a new task here/i);
  const addBtn = screen.getByText(/add/i);

  fireEvent.change(inputElement, {
    target: {
      value: "Wash the car",
    },
  });
  fireEvent.click(addBtn);

  expect(inputElement.value).toBe("");
});
