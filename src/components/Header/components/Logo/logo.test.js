import { Logo } from "./Logo";
import { render, screen } from "@testing-library/react";

describe("Logo", () => {
  it("should render", () => {
    render(<Logo />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
