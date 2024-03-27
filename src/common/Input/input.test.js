import { Input } from "./Input";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Input", () => {
  it("should render", () => {
    render(<Input />);
  });

  it("should have placeholder and error", () => {
    const placeholder = "placeholder";
    const error = "error";
    render(<Input placeholderText={placeholder} error={error} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it("should emit event", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
    fireEvent.change(screen.getByDisplayValue(""), {
      target: { value: "value" },
    });
    expect(onChange).toHaveBeenCalled();
  });
});
