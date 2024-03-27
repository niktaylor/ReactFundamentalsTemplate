import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should should render", () => {
    render(<Button />);
  });

  it("should have text", () => {
    const text = "test text";
    render(<Button buttonText={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should handle click", () => {
    const clickFn = jest.fn();
    render(<Button buttonText="button" handleClick={clickFn} />);
    fireEvent.click(screen.getByText("button"));
    expect(clickFn).toHaveBeenCalled();
  });
});
