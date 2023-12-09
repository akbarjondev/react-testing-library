import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  test("renders FollowersList component with item", async () => {
    render(<MockFollowersList />);

    const followerElement = await screen.findAllByTestId(/follower-item/i);
    expect(followerElement.length).toBe(5);
  });
});
