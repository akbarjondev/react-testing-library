import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders header with title", () => {
    render(<Header title={"Test title"} />);
    const title = screen.getByText(/test title/i);

    expect(title).toBeInTheDocument();
  });
});
