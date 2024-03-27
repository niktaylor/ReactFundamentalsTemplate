import { TestWrapper, mockedState } from "../../test-helpers";
import { Courses } from "./Courses";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Courses", () => {
  it("should render", () => {
    render(<Courses />, { wrapper: TestWrapper });
  });

  it("should render a courseCard for each course in store", () => {
    render(<Courses />, { wrapper: TestWrapper });
    expect(screen.getAllByTestId("courseCard")).toHaveLength(
      mockedState.courses.length
    );
  });
});
