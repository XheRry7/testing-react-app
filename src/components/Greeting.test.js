import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hello world as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert

    const helloWorldElement = screen.getByText("Hello world!", {
      exact: false,
    });

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const initialState = screen.getByText(`It's good to see you!`);

    expect(initialState).toBeInTheDocument();
  });

  test("renders changed when the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedState = screen.getByText("Changed!");
    expect(changedState).toBeInTheDocument();
  });

  test("does not renders good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedState = screen.queryByText("It's good to see you!");
    expect(changedState).toBeNull();
  });
});
