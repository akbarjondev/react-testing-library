import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const mockRenderTodos = (todos) => {
  return todos.forEach((todo) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, {
      target: { value: todo },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  test("renders Todo component", () => {
    render(<MockTodo />);

    mockRenderTodos(["Go to the gym"]);

    const addedElement = screen.getByText(/Go to the gym/i);
    expect(addedElement).toBeInTheDocument();
  });

  test("renders multiple tasks", async () => {
    render(<MockTodo />);

    mockRenderTodos(["Go to the gym", "Buy groceries", "Do homework"]);

    const addedElements = screen.getAllByTestId("todo-item");
    expect(addedElements.length).toBe(3);
  });
});
