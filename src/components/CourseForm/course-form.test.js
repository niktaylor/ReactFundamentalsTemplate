import { TestWrapper } from "../../test-helpers";
import { CourseForm } from "./CourseForm";
import { render } from "@testing-library/react";

describe("Courses", () => {
  it("should render", () => {
    render(<CourseForm />, { wrapper: TestWrapper });
  });
});
